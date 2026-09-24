import { useId, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitConsultation } from "@/lib/consultation.functions";
import { consultationSchema, fieldErrors, services } from "@/lib/consultation.schema";

type Values = {
  name: string;
  phone: string;
  service: string;
  concern: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

const empty: Values = {
  name: "",
  phone: "",
  service: services[0],
  concern: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

const today = new Date().toISOString().slice(0, 10);
const nextYear = (() => {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().slice(0, 10);
})();

export function BookingForm() {
  const submit = useServerFn(submitConsultation);
  const uid = useId();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const inFlight = useRef(false);
  const lastSubmitted = useRef<string | null>(null);

  const fid = (n: string) => `${uid}-${n}`;
  const eid = (n: string) => `${uid}-${n}-error`;

  function setField(name: keyof Values, value: string) {
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name] || errors[name]) setErrors(fieldErrors(next));
  }

  function blur(name: keyof Values) {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(fieldErrors(values));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;

    const parsed = consultationSchema.safeParse(values);
    if (!parsed.success) {
      const next = fieldErrors(values);
      setErrors(next);
      setTouched(Object.fromEntries(Object.keys(values).map((k) => [k, true])));
      const first = Object.keys(next)[0];
      if (first) document.getElementById(fid(first))?.focus();
      return;
    }

    const fingerprint = JSON.stringify(parsed.data);
    if (lastSubmitted.current === fingerprint) {
      setState("success");
      return;
    }

    inFlight.current = true;
    setState("loading");
    try {
      await submit({ data: parsed.data });
      lastSubmitted.current = fingerprint;
      setState("success");
    } catch {
      setState("error");
    } finally {
      inFlight.current = false;
    }
  }

  function Err({ name }: { name: keyof Values }) {
    if (!errors[name]) return null;
    return (
      <span id={eid(name)} className="text-xs font-normal text-destructive">
        {errors[name]}
      </span>
    );
  }

  const aria = (name: keyof Values) => ({
    id: fid(name),
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? eid(name) : undefined,
    onBlur: () => blur(name),
  });

  if (state === "success")
    return (
      <div className="grid min-h-80 place-items-center rounded-lg bg-soft-blue p-8 text-center">
        <div>
          <CheckCircle2 className="mx-auto size-10 text-primary" />
          <h3 className="mt-4 text-2xl font-semibold text-ink">Thank you.</h3>
          <p className="mt-2 text-muted-foreground">Our team will contact you shortly.</p>
        </div>
      </div>
    );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-lg bg-background p-5 shadow-soft sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label htmlFor={fid("name")} className="grid gap-2 text-sm font-semibold">
          Name
          <Input {...aria("name")} name="name" value={values.name} onChange={(e) => setField("name", e.target.value)} autoComplete="name" />
          <Err name="name" />
        </label>
        <label htmlFor={fid("phone")} className="grid gap-2 text-sm font-semibold">
          Phone
          <Input {...aria("phone")} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile number" value={values.phone} onChange={(e) => setField("phone", e.target.value)} />
          <Err name="phone" />
        </label>
      </div>
      <label htmlFor={fid("service")} className="grid gap-2 text-sm font-semibold">
        What are you looking for?
        <select {...aria("service")} name="service" value={values.service} onChange={(e) => setField("service", e.target.value)} className="h-10 rounded-md border border-input bg-background px-3 text-sm">
          {services.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
        <Err name="service" />
      </label>
      <label htmlFor={fid("concern")} className="grid gap-2 text-sm font-semibold">
        Concern
        <Input {...aria("concern")} name="concern" placeholder="Tell us what you would like help with" value={values.concern} onChange={(e) => setField("concern", e.target.value)} />
        <Err name="concern" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label htmlFor={fid("preferredDate")} className="grid gap-2 text-sm font-semibold">
          Preferred date
          <Input {...aria("preferredDate")} name="preferredDate" type="date" min={today} max={nextYear} value={values.preferredDate} onChange={(e) => setField("preferredDate", e.target.value)} />
          <Err name="preferredDate" />
        </label>
        <label htmlFor={fid("preferredTime")} className="grid gap-2 text-sm font-semibold">
          Preferred time
          <Input {...aria("preferredTime")} name="preferredTime" type="time" value={values.preferredTime} onChange={(e) => setField("preferredTime", e.target.value)} />
          <Err name="preferredTime" />
        </label>
      </div>
      <label htmlFor={fid("message")} className="grid gap-2 text-sm font-semibold">
        Message <span className="font-normal text-muted-foreground">(optional)</span>
        <Textarea {...aria("message")} name="message" maxLength={1000} rows={4} value={values.message} onChange={(e) => setField("message", e.target.value)} />
        <Err name="message" />
      </label>
      <div aria-live="polite" className="grid gap-1">
        {state === "error" && (
          <p role="alert" className="text-sm text-destructive">
            Your request could not be saved. Please try again.
          </p>
        )}
      </div>
      <Button type="submit" size="lg" variant="premium" disabled={state === "loading"}>
        {state === "loading" && <LoaderCircle className="animate-spin" />}
        Request consultation
      </Button>
      <p className="text-xs leading-5 text-muted-foreground">
        Your details are stored privately and used only to respond to your enquiry.
      </p>
    </form>
  );
}
