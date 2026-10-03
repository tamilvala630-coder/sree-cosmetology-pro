import acneImg from "@/assets/concerns/acne-and-acne-scars.jpg";
import pigmentImg from "@/assets/concerns/pigmentation.jpg";
import textureImg from "@/assets/concerns/skin-texture.jpg";
import otherImg from "@/assets/concerns/other-skin-concerns.jpg";
import type { Concern } from "@/lib/hair-conditions";

const assessment = [
  "A conversation about your skin history, routine, products, health and medicines",
  "Examination of your skin type and the area of concern under good lighting",
  "Discussion of possible triggers and whether any tests may be useful",
  "A clear explanation of suitable options, sessions involved and realistic expectations",
];

export const skinConcerns: Concern[] = [
  {
    slug: "acne-and-acne-scars",
    image: acneImg,
    imageAlt: "Close-up of a woman's cheek with mild acne marks and shallow acne scars",
    title: "Acne & Acne Scars",
    intro: "Acne is common at many ages and can leave marks or scars. Understanding your acne type and skin helps guide a suitable, step-by-step plan.",
    understanding: "Acne develops when pores become blocked and inflamed. Active acne and acne scars are treated differently, and controlling active breakouts usually comes before scar treatment.",
    signs: ["Whiteheads, blackheads or red bumps", "Painful deeper spots", "Dark marks after spots heal", "Depressed or uneven scars"],
    causes: ["Excess oil and blocked pores", "Hormonal changes", "Some cosmetics or skincare products", "Genetic tendency", "Picking or squeezing spots"],
    assessment,
    options: ["Medical acne management, where suitable", "Chemical peels, after assessment", "Acne scar treatments for suitable skin", "Skincare routine guidance"],
    faqs: [
      { q: "Can acne scars be removed completely?", a: "Scars can often be improved, but complete removal is not always possible. Your doctor will explain what may be realistic." },
      { q: "Should active acne be treated first?", a: "Usually, yes. Controlling active acne helps prevent new marks before scar treatment is considered." },
    ],
  },
  {
    slug: "pigmentation",
    image: pigmentImg,
    imageAlt: "Close-up of facial skin with uneven pigmentation and dark spots",
    title: "Pigmentation",
    intro: "Dark spots, patches and uneven skin tone have several possible causes. Identifying the type of pigmentation helps choose a careful approach.",
    understanding: "Pigmentation occurs when certain areas of skin produce more melanin. Types such as melasma, sun spots and marks after acne behave differently and need different care.",
    signs: ["Dark spots or patches", "Uneven skin tone", "Marks left after acne or injury", "Patches that darken with sun exposure"],
    causes: ["Sun exposure", "Hormonal changes", "Marks after acne or inflammation", "Some medicines or products", "Genetic tendency"],
    assessment,
    options: ["Medical skincare, where suitable", "Chemical peels, after assessment", "Sun protection guidance", "Other clinic treatments for suitable skin"],
    faqs: [
      { q: "Will pigmentation come back?", a: "Some types, such as melasma, can recur. Ongoing sun protection and maintenance are often part of care." },
      { q: "How long does treatment take?", a: "Pigmentation usually improves gradually over weeks to months, and response varies." },
    ],
  },
  {
    slug: "skin-texture",
    image: textureImg,
    imageAlt: "Close-up of natural facial skin with visible pores and uneven texture",
    title: "Skin Texture",
    intro: "Visible pores, roughness or uneven texture are common concerns. A consultation helps understand what is affecting your skin's surface.",
    understanding: "Skin texture is influenced by oil production, pore size, sun exposure, ageing and past acne. Improvements are usually gradual and depend on skin type.",
    signs: ["Enlarged or visible pores", "Rough or bumpy surface", "Dull appearance", "Fine lines or uneven areas"],
    causes: ["Oily skin and blocked pores", "Sun damage", "Natural ageing", "Past acne", "Dehydration or harsh products"],
    assessment,
    options: ["Chemical peels, after assessment", "Hydration and rejuvenation treatments, where suitable", "Skincare routine guidance", "Other clinic treatments for suitable skin"],
    faqs: [
      { q: "Can pores be made smaller?", a: "Pores cannot be removed, but their appearance may improve with suitable care. Results vary." },
      { q: "How many sessions are needed?", a: "This depends on your skin and the treatment chosen. Your doctor will discuss a plan with you." },
    ],
  },
  {
    slug: "other-skin-concerns",
    image: otherImg,
    imageAlt: "Dermatologist examining a patient's facial skin with a magnifying lamp",
    title: "Other Skin Concerns",
    intro: "Not every skin concern fits a single category. If something about your skin is bothering you, a consultation is a good place to start.",
    understanding: "Concerns such as dullness, sensitivity, early signs of ageing, dark circles or changes in your skin can have many causes. Assessment helps decide whether treatment, skincare changes or a referral is most appropriate.",
    signs: ["Dull or tired-looking skin", "Sensitivity or irritation", "Early fine lines", "Any new or changing skin concern"],
    causes: ["Lifestyle and sleep", "Sun exposure", "Products that do not suit your skin", "Natural ageing", "Underlying health factors"],
    assessment,
    options: ["Personalised skincare guidance", "Clinic treatments, where suitable", "Referral or tests when needed", "Follow-up to review progress"],
    faqs: [
      { q: "What if I'm not sure what my concern is?", a: "That is fine. Describe what you notice and the doctor will assess it during the consultation." },
      { q: "Do I need treatment for every concern?", a: "Not always. Sometimes guidance and simple routine changes are the most suitable first step." },
    ],
  },
];

export const getSkinConcern = (slug: string) => skinConcerns.find((c) => c.slug === slug);
