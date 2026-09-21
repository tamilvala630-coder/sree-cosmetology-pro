export const clinic = {
  name: "Sree Cosmetology Hair & Skin Clinic",
  shortName: "Sree Cosmetology",
  location: "Danavaipeta, Rajahmundry",
  address: "DNO-46-15-15/2, Sree Cosmetology Hair & Skin Clinic, Opposite Gandhi Park, Beside Jabilli Hospital, Danavaipeta, Rajahmundry, Andhra Pradesh – 533103",
  phone: "",
  whatsapp: "",
  hours: "Opening hours awaiting verification",
  googleBusinessUrl: "",
  whatsappMessage: "Hi, I would like to book a consultation at Sree Cosmetology Hair & Skin Clinic. I would like to know more about your hair and skin treatments.",
  rating: null as null | { score: string; count: number },
  doctors: [] as Array<{ name: string; qualification: string; specialisation: string; experience: string; bio: string; image: string }>,
  reviews: [] as Array<{ name: string; text: string; rating: number }>,
};

export const hairTreatments = [
  { title: "FUE Hair Transplant", text: "Individual follicular units are moved from a suitable donor area to planned recipient areas after careful assessment." },
  { title: "Hairline Restoration", text: "Hairline planning considers facial proportions, existing loss and long-term expectations for an age-appropriate appearance." },
  { title: "Crown Restoration", text: "Selected crown-area concerns can be assessed for graft placement, coverage priorities and donor availability." },
  { title: "Beard & Moustache Transplant", text: "A consultation-led option for selected facial hair concerns, planned around growth direction and available donor hair." },
  { title: "Corrective Hair Transplant", text: "Previous procedures can be assessed individually to understand whether corrective planning may be appropriate." },
];

export const skinTreatments = [
  { title: "Acne Treatment", text: "A personalised approach based on acne type, triggers, skin history and current condition." },
  { title: "Acne Scar Treatment", text: "Assessment of scar type and depth helps guide suitable treatment options." },
  { title: "Pigmentation Treatment", text: "Careful assessment can help identify the pattern and possible causes before planning care." },
  { title: "Chemical Peels", text: "Clinically selected exfoliation options may support specific texture and tone concerns." },
  { title: "Skin Rejuvenation", text: "Consultation-led care focused on skin quality, hydration and individual goals." },
  { title: "Hydra / Hydration Treatments", text: "Hydration-focused treatments selected according to current skin needs." },
  { title: "Uneven Skin Tone", text: "A considered plan for visible unevenness after evaluation of your skin." },
  { title: "Skin Texture", text: "Options are discussed according to the nature and extent of texture concerns." },
  { title: "Anti-Ageing / Cosmetic Skin Care", text: "Personalised cosmetic care with clear discussion of suitability and expectations." },
];

export const faqItems = [
  ["What happens during the first consultation?", "The team discusses your concerns, relevant history and goals, then explains assessment findings and suitable next steps. No treatment should be selected before suitability is considered."],
  ["How do I know whether I need a hair transplant?", "A hair transplant may suit some patterns of stable hair loss, but donor area, progression, age and expectations all matter. A consultation is the right first step."],
  ["Is FUE suitable for everyone?", "No. Suitability depends on the donor area, hair loss pattern, health history and realistic treatment goals."],
  ["How long does a hair transplant procedure take?", "Timing varies with the planned graft number and individual procedure. Your team should explain the expected schedule after assessment."],
  ["What is the recovery like after a hair transplant?", "Recovery differs between patients. You will receive specific guidance about scalp care, activity and follow-up based on your procedure."],
  ["Can hair loss be treated without surgery?", "Some causes may be managed without surgery. The appropriate option depends on diagnosis, progression and individual suitability."],
  ["What is PRP for hair?", "PRP uses a prepared concentration from your own blood and may be considered for selected hair concerns after clinical assessment."],
  ["What is GFC treatment?", "GFC is a concentration of selected growth factors prepared from a patient's blood. Suitability and expected benefit vary."],
  ["Can acne scars be treated?", "Different scar types may respond to different approaches. An assessment helps determine what options may be suitable."],
  ["How are pigmentation concerns treated?", "Treatment depends on the pigmentation pattern, possible cause, skin type and history. Sun protection is often part of the plan."],
  ["Do treatment results vary from person to person?", "Yes. Response, recovery and outcomes differ according to the concern, biology, treatment plan and aftercare."],
  ["How can I book an appointment?", "Use the consultation form on this website. Once verified contact details are added, you can also call or message the clinic directly."],
] as const;

export const nav = [
  ["Home", "/"], ["Hair", "/hair"], ["Skin", "/skin"], ["Hair Transplant", "/hair-transplant"],
  ["Treatments", "/treatments"], ["Before & After", "/before-after"], ["About", "/about"],
  ["Reviews", "/reviews"], ["FAQs", "/faqs"], ["Contact", "/contact"],
] as const;

export function whatsappUrl() {
  return clinic.whatsapp ? `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(clinic.whatsappMessage)}` : "#contact-pending";
}