import { z } from "zod";

export const services = [
  "Hair Transplant",
  "Hair Loss Treatment",
  "PRP",
  "GFC",
  "Skin Treatment",
  "Acne / Acne Scars",
  "Pigmentation",
  "Other",
] as const;

export type Service = (typeof services)[number];

/** Normalises an Indian mobile number to its bare 10 digits, or null if invalid. */
export function normalizeIndianPhone(raw: string): string | null {
  const digits = raw.replace(/[^\d]/g, "");
  const local = digits.startsWith("91") && digits.length === 12
    ? digits.slice(2)
    : digits.startsWith("0") && digits.length === 11
      ? digits.slice(1)
      : digits;
  return /^[6-9]\d{9}$/.test(local) ? local : null;
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function maxDateISO(): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().slice(0, 10);
}

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, `Please keep this under ${max} characters.`)
    .optional()
    .transform((v) => (v ? v : undefined));

export const consultationSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Please enter your full name.")
      .max(100, "Name must be under 100 characters.")
      .regex(/^[\p{L}][\p{L}\s.'-]*$/u, "Please use letters only."),
    phone: z
      .string()
      .trim()
      .min(1, "Please enter your phone number.")
      .refine((v) => normalizeIndianPhone(v) !== null, {
        message: "Enter a valid 10-digit Indian mobile number starting with 6-9.",
      })
      .transform((v) => normalizeIndianPhone(v)!),
    service: z.enum(services, { message: "Please choose what you are looking for." }),
    concern: z
      .string()
      .trim()
      .min(3, "Please tell us briefly about your concern.")
      .max(120, "Please keep this under 120 characters."),
    preferredDate: optionalText(10).refine(
      (v) => !v || (/^\d{4}-\d{2}-\d{2}$/.test(v) && v >= todayISO() && v <= maxDateISO()),
      "Choose a date between today and one year from now.",
    ),
    preferredTime: optionalText(5).refine(
      (v) => !v || /^([01]\d|2[0-3]):[0-5]\d$/.test(v),
      "Enter a valid time.",
    ),
    message: optionalText(1000),
  })
  .refine(
    (v) => !(v.preferredTime && !v.preferredDate),
    { message: "Please also choose a preferred date.", path: ["preferredDate"] },
  );

export type ConsultationInput = z.input<typeof consultationSchema>;
export type ConsultationData = z.output<typeof consultationSchema>;

/** Field-keyed error messages, for inline display. */
export function fieldErrors(input: unknown): Record<string, string> {
  const result = consultationSchema.safeParse(input);
  if (result.success) return {};
  const out: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
