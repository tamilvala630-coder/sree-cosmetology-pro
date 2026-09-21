import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().regex(/^[+\d][\d\s()-]{6,19}$/),
  concern: z.string().trim().min(2).max(120),
  service: z.enum(["Hair Transplant", "Hair Loss Treatment", "PRP", "GFC", "Skin Treatment", "Acne / Acne Scars", "Pigmentation", "Other"]),
  preferredDate: z.string().trim().max(10).optional(),
  preferredTime: z.string().trim().max(30).optional(),
  message: z.string().trim().max(1000).optional(),
});

export const submitConsultation = createServerFn({ method: "POST" })
  .inputValidator((data) => schema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("consultation_requests").insert({
      name: data.name,
      phone: data.phone,
      concern: data.concern,
      service: data.service,
      preferred_date: data.preferredDate || null,
      preferred_time: data.preferredTime || null,
      message: data.message || null,
    });
    if (error) throw new Error("Your request could not be saved. Please try again.");
    return { success: true };
  });