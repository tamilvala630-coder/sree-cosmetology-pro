export type HairCondition = {
  slug: string;
  title: string;
  intro: string;
  understanding: string;
  signs: string[];
  causes: string[];
  assessment: string[];
  options: string[];
  faqs: { q: string; a: string }[];
};

const commonAssessment = [
  "A detailed conversation about your hair history, family history, health, medicines and lifestyle",
  "Examination of the scalp and the pattern, density and quality of the hair",
  "Discussion of whether any tests or a referral may be useful before treatment is planned",
  "A clear explanation of the options that may suit you, along with realistic expectations",
];

export const hairConditions: HairCondition[] = [
  {
    slug: "male-pattern-hair-loss",
    title: "Male Pattern Hair Loss",
    intro: "Male pattern hair loss is a common, gradual type of thinning that usually affects the hairline and crown. Understanding its stage and progression helps guide sensible next steps.",
    understanding: "Male pattern hair loss (androgenetic alopecia) is commonly linked to genetics and the way hair follicles respond to certain hormones. Over time, affected follicles may produce finer, shorter hair. Its pace and pattern differ from person to person, so an individual assessment matters.",
    signs: ["Receding hairline, often at the temples", "Thinning at the crown", "Hair becoming finer over time", "Scalp more visible under bright light"],
    causes: ["Genetic tendency and family history", "Hormonal sensitivity of hair follicles", "Age-related progression", "Other factors such as stress or nutrition may add to hair fall"],
    assessment: commonAssessment,
    options: ["Medical hair loss management, where suitable", "PRP or GFC therapy, after assessment", "Scalp care guidance", "Hair transplantation for suitable candidates with a stable donor area"],
    faqs: [
      { q: "Can male pattern hair loss be stopped?", a: "Results vary. Some treatments may help slow progression or improve density in suitable people. A consultation helps set realistic expectations." },
      { q: "Do I need a hair transplant?", a: "Not necessarily. Many people start with non-surgical options. Transplant suitability depends on donor area, stage and stability of hair loss." },
    ],
  },
  {
    slug: "female-pattern-hair-loss",
    title: "Female Pattern Hair Loss",
    intro: "Female pattern hair loss usually appears as gradual thinning over the top of the scalp, often with a widening parting, while the front hairline is commonly preserved.",
    understanding: "Female pattern hair loss can be influenced by genetics, hormones and life stages such as pregnancy or menopause. Because several conditions can look similar, a careful assessment helps distinguish it from other causes of hair fall.",
    signs: ["Widening central parting", "Reduced volume over the top of the scalp", "Thinner ponytail", "Hair becoming finer"],
    causes: ["Genetic tendency", "Hormonal changes, including after pregnancy or around menopause", "Thyroid or other health factors", "Nutritional deficiencies or stress that may add to hair fall"],
    assessment: commonAssessment,
    options: ["Medical hair loss management, where suitable", "PRP or GFC therapy, after assessment", "Scalp care and lifestyle guidance", "Referral for tests if a health cause is suspected"],
    faqs: [
      { q: "Is female hair loss always hormonal?", a: "Not always. Thyroid, nutrition, stress and other factors may contribute. An assessment helps identify likely causes." },
      { q: "Will treatment work for everyone?", a: "Response differs between individuals. Your doctor will discuss what may be reasonable to expect in your case." },
    ],
  },
  {
    slug: "excessive-hair-fall",
    title: "Excessive Hair Fall",
    intro: "Losing some hair every day is normal. When shedding suddenly increases or continues for weeks, it is worth understanding what may be behind it.",
    understanding: "Increased shedding can follow illness, fever, stress, dietary changes, childbirth or certain medicines. It may be temporary, but it can also overlap with other hair loss conditions, so an assessment helps clarify the picture.",
    signs: ["More hair than usual on the pillow, comb or shower drain", "Hair coming out easily when washing", "Overall reduction in volume", "Shedding that continues for several weeks"],
    causes: ["Recent illness, fever or surgery", "Emotional or physical stress", "Nutritional deficiencies", "Hormonal or thyroid changes", "Some medicines"],
    assessment: commonAssessment,
    options: ["Identifying and addressing possible triggers", "Medical management where appropriate", "PRP or GFC therapy, after assessment", "Scalp care guidance"],
    faqs: [
      { q: "Is sudden hair fall permanent?", a: "Many types of increased shedding settle once the trigger is addressed, but this varies. An assessment helps rule out other causes." },
      { q: "When should I seek a consultation?", a: "If hair fall is sudden, heavy, patchy or lasts more than a few weeks, a consultation is recommended." },
    ],
  },
  {
    slug: "thinning-hair",
    title: "Thinning Hair",
    intro: "Thinning hair often develops slowly, with reduced density or finer strands. Identifying the reason is the first step towards choosing a suitable approach.",
    understanding: "Hair can thin for several reasons, including pattern hair loss, ongoing shedding, nutritional factors or scalp conditions. The pattern and pace of thinning give useful clues during assessment.",
    signs: ["Reduced overall volume", "Finer, weaker strands", "Scalp more visible in certain areas", "Hair not growing as long as before"],
    causes: ["Pattern hair loss", "Prolonged shedding", "Nutritional or thyroid factors", "Scalp inflammation", "Styling habits that stress the hair"],
    assessment: commonAssessment,
    options: ["Medical hair loss management, where suitable", "PRP or GFC therapy, after assessment", "Scalp treatments", "Hair care and lifestyle guidance"],
    faqs: [
      { q: "Can thinning hair become thicker again?", a: "Some people see improvement with suitable treatment, but outcomes vary. Your doctor will explain what may be realistic." },
      { q: "How long before I notice a change?", a: "Hair grows slowly, so changes are usually assessed over several months rather than weeks." },
    ],
  },
  {
    slug: "receding-hairline",
    title: "Receding Hairline",
    intro: "A receding hairline is a gradual backward movement of the hairline, often at the temples. Assessing how far and how fast it is changing helps guide options.",
    understanding: "A mature hairline can shift slightly with age, while ongoing recession may be part of pattern hair loss. Understanding the difference helps decide whether monitoring, medical care or restoration may be appropriate.",
    signs: ["Hairline moving back at the temples", "An M-shaped hairline", "Finer hair along the front", "Forehead appearing larger over time"],
    causes: ["Genetic pattern hair loss", "Age-related hairline maturation", "Traction from tight hairstyles", "Other scalp or health factors"],
    assessment: commonAssessment,
    options: ["Medical hair loss management, where suitable", "PRP or GFC therapy, after assessment", "Hairline restoration (hair transplant) for suitable candidates", "Guidance on hairstyles that reduce traction"],
    faqs: [
      { q: "Can a receding hairline be restored?", a: "In suitable candidates, hairline restoration may be considered. Suitability depends on donor hair, stability of hair loss and expectations." },
      { q: "Is a slight change in my hairline normal?", a: "Some maturation of the hairline can be normal with age. A consultation can help tell this apart from progressive hair loss." },
    ],
  },
  {
    slug: "scalp-conditions",
    title: "Scalp Conditions",
    intro: "A healthy scalp supports healthy-looking hair. Itching, flaking, redness or patches can have different causes and benefit from proper assessment.",
    understanding: "Scalp conditions range from dandruff and seborrhoeic dermatitis to inflammation, infections and patchy hair loss. Some may contribute to hair fall, so treating the scalp is often part of overall hair care.",
    signs: ["Itching or irritation", "Flaking or scaling", "Redness or tenderness", "Oily or very dry scalp", "Patchy hair loss"],
    causes: ["Dandruff or seborrhoeic dermatitis", "Fungal or bacterial infections", "Inflammatory skin conditions", "Reactions to hair products", "Autoimmune causes such as alopecia areata"],
    assessment: commonAssessment,
    options: ["Medical treatment of the underlying scalp condition", "Scalp treatments, where suitable", "Guidance on hair and scalp care products", "Referral or tests when needed"],
    faqs: [
      { q: "Can scalp problems cause hair fall?", a: "Some scalp conditions can contribute to hair fall. Treating the scalp may help, depending on the cause." },
      { q: "Should I stop using hair products?", a: "Not necessarily. Your doctor can advise which products to continue or avoid based on your scalp." },
    ],
  },
];

export const getHairCondition = (slug: string) => hairConditions.find((c) => c.slug === slug);
