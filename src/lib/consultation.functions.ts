import { createServerFn } from "@tanstack/react-start";
import { consultationSchema } from "@/lib/consultation.schema";

export const submitConsultation = createServerFn({ method: "POST" })
  .inputValidator((data) => consultationSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Duplicate-submission guard: same phone + service within the last 10 minutes.
    const since = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { data: recent, error: lookupError } = await supabaseAdmin
      .from("consultation_requests")
      .select("id")
      .eq("phone", data.phone)
      .eq("service", data.service)
      .gte("created_at", since)
      .limit(1);
    if (lookupError) throw new Error("Your request could not be saved. Please try again.");
    if (recent && recent.length > 0) {
      return { success: true, duplicate: true as const };
    }

    const { error } = await supabaseAdmin.from("consultation_requests").insert({
      name: data.name,
      phone: data.phone,
      concern: data.concern,
      service: data.service,
      preferred_date: data.preferredDate ?? null,
      preferred_time: data.preferredTime ?? null,
      message: data.message ?? null,
    });
    if (error) throw new Error("Your request could not be saved. Please try again.");
    return { success: true, duplicate: false as const };
  });
