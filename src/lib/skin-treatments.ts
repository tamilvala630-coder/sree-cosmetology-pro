import { skinTreatments } from "@/lib/clinic";
import image0 from "@/assets/treatments/acne-treatment.jpg";
import image1 from "@/assets/treatments/acne-scar-treatment.jpg";
import image2 from "@/assets/treatments/pigmentation-treatment.jpg";
import image3 from "@/assets/treatments/chemical-peels.jpg";
import image4 from "@/assets/treatments/skin-rejuvenation.jpg";
import image5 from "@/assets/treatments/hydra-hydration-treatments.jpg";
import image6 from "@/assets/treatments/uneven-skin-tone.jpg";
import image7 from "@/assets/treatments/skin-texture.jpg";
import image8 from "@/assets/treatments/anti-ageing-cosmetic-skin-care.jpg";

const details = [
  {"overview": "Acne can involve blocked pores, inflammation and breakouts of different types. Management is tailored to severity, skin sensitivity and relevant medical history; early assessment can help reduce the risk of scarring.", "assessment": ["Type and severity of breakouts", "Current skincare and past treatment response", "Relevant medication and hormonal history"], "imageAlt": "Illustration of mild acne on a woman’s cheek", image: image0},
  {"overview": "Acne scars can be shallow, deep, raised or accompanied by changes in skin colour. The type and distribution of scars guide a discussion of suitable approaches; complete removal cannot be promised.", "assessment": ["Scar type, depth and distribution", "Whether active acne is present", "Skin type and previous procedures"], "imageAlt": "Illustration of shallow acne scarring on a cheek", image: image1},
  {"overview": "Pigmentation has several possible causes, including sun exposure, inflammation and hormonal influences. Identifying the pattern is important because different causes need different care and may recur.", "assessment": ["Pattern and duration of darker areas", "Sun exposure and previous inflammation", "Relevant medication and hormonal history"], "imageAlt": "Illustration of facial pigmentation patches", image: image2},
  {"overview": "A chemical peel uses a selected solution to exfoliate the skin. Peel choice and strength depend on skin type and the concern being treated. Temporary irritation and changes in pigmentation are possible, so clinical selection and aftercare matter.", "assessment": ["Skin type, sensitivity and current irritation", "Recent skincare products and procedures", "History of pigmentation changes or healing concerns"], "imageAlt": "Illustration of a chemical peel applied with a facial brush", image: image3},
  {"overview": "Skin rejuvenation is a broad term for approaches addressing visible skin quality, tone and early signs of ageing. A consultation helps distinguish the concern and select care rather than assuming one procedure suits everyone.", "assessment": ["Skin quality, tone and individual priorities", "Sensitivity and existing skin conditions", "Previous treatments and relevant health history"], "imageAlt": "Illustration of non-invasive skin rejuvenation care", image: image4},
  {"overview": "Hydration-focused facial care may support dry-feeling skin and short-term skin comfort. The products and techniques should be chosen around sensitivity, acne and current skin health; these treatments do not replace medical care for a skin condition.", "assessment": ["Dryness, sensitivity and skin comfort", "Active acne, irritation or other conditions", "Current products and allergy history"], "imageAlt": "Illustration of a hydration-focused facial treatment", image: image5},
  {"overview": "Uneven skin tone may follow sun exposure, previous inflammation or other skin changes. Assessment helps establish whether pigmentation, redness or another concern is contributing before care is planned.", "assessment": ["Distribution of uneven tone and redness", "Sun exposure and preceding skin changes", "Current products and treatment history"], "imageAlt": "Illustration of naturally uneven facial skin tone", image: image6},
  {"overview": "Skin texture concerns can include visible pores, roughness and small surface irregularities. Their causes differ, so care may involve a skincare review or selected clinical options based on examination.", "assessment": ["Nature and extent of texture changes", "Acne, scarring or irritation", "Skin sensitivity and skincare routine"], "imageAlt": "Illustration of visible pores and skin texture", image: image7},
  {"overview": "Cosmetic skin care for ageing-related concerns starts with a discussion of fine lines, skin quality and individual priorities. Options, limitations, risks and recovery should be explained before any treatment is selected.", "assessment": ["Fine lines, skin quality and personal goals", "Relevant health and treatment history", "Suitability, skin sensitivity and expectations"], "imageAlt": "Illustration of mature skin with natural fine lines", image: image8},
];

export const skinTreatmentOptions = skinTreatments.map((item, index) => {
  const detail = details[index];
  if (!detail) throw new Error("Missing skin treatment details");
  return { ...item, ...detail, discussion: ["Suitable care options and their limitations", "Possible side effects, recovery and aftercare", "Sun protection, skincare and follow-up appropriate to your skin"], faqs: [{ q: `Is ${item.title.toLowerCase()} suitable for everyone?`, a: "No. Suitability depends on the concern, your skin type, medical history and examination. The clinic will discuss appropriate options after assessment." }, { q: "What results and recovery should I expect?", a: "Response and recovery vary by person and by treatment. Your consultation should cover realistic expectations, potential risks and aftercare; no specific outcome is guaranteed." }] };
});

export type SkinTreatment = (typeof skinTreatmentOptions)[number];
export function getSkinTreatment(slug: string) { return skinTreatmentOptions.find((item) => item.slug === slug); }
