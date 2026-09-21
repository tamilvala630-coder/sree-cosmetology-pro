import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitConsultation } from "@/lib/consultation.functions";

const services = ["Hair Transplant", "Hair Loss Treatment", "PRP", "GFC", "Skin Treatment", "Acne / Acne Scars", "Pigmentation", "Other"] as const;

export function BookingForm() {
  const submit = useServerFn(submitConsultation);
  const [state, setState] = useState<"idle"|"loading"|"success"|"error">("idle");
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState("loading"); const form = new FormData(event.currentTarget);
    try { await submit({ data: { name: String(form.get("name")||""), phone: String(form.get("phone")||""), concern: String(form.get("concern")||""), service: String(form.get("service")) as typeof services[number], preferredDate: String(form.get("preferredDate")||""), preferredTime: String(form.get("preferredTime")||""), message: String(form.get("message")||"") } }); setState("success"); }
    catch { setState("error"); }
  }
  if (state === "success") return <div className="grid min-h-80 place-items-center rounded-lg bg-teal-soft/45 p-8 text-center"><div><CheckCircle2 className="mx-auto size-10 text-primary"/><h3 className="mt-4 text-2xl font-semibold text-ink">Thank you.</h3><p className="mt-2 text-muted-foreground">Our team will contact you shortly.</p></div></div>;
  return <form onSubmit={onSubmit} className="grid gap-4 rounded-lg bg-background p-5 shadow-soft sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold">Name<Input name="name" required minLength={2} maxLength={100} /></label><label className="grid gap-2 text-sm font-semibold">Phone<Input name="phone" type="tel" required pattern="[+0-9][0-9 ()-]{6,19}" /></label></div><label className="grid gap-2 text-sm font-semibold">What are you looking for?<select name="service" className="h-10 rounded-md border border-input bg-background px-3 text-sm" required>{services.map(x=><option key={x}>{x}</option>)}</select></label><label className="grid gap-2 text-sm font-semibold">Concern<Input name="concern" required maxLength={120} placeholder="Tell us what you would like help with" /></label><div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-semibold">Preferred date<Input name="preferredDate" type="date" /></label><label className="grid gap-2 text-sm font-semibold">Preferred time<Input name="preferredTime" type="time" /></label></div><label className="grid gap-2 text-sm font-semibold">Message <span className="font-normal text-muted-foreground">(optional)</span><Textarea name="message" maxLength={1000} rows={4} /></label>{state === "error" && <p role="alert" className="text-sm text-destructive">Your request could not be saved. Please try again.</p>}<Button type="submit" size="lg" variant="premium" disabled={state === "loading"}>{state === "loading" && <LoaderCircle className="animate-spin"/>}Request consultation</Button><p className="text-xs leading-5 text-muted-foreground">Your details are stored privately and used only to respond to your enquiry.</p></form>;
}