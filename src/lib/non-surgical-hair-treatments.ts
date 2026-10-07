import prpImage from "@/assets/treatments/prp-hair-treatment.jpg";
import gfcImage from "@/assets/treatments/gfc-hair-treatment.jpg";
import assessmentImage from "@/assets/concerns/scalp-conditions.jpg";
import managementImage from "@/assets/treatments/medical-hair-loss-management.jpg";
import scalpTreatmentImage from "@/assets/treatments/scalp-treatments.jpg";

export type NonSurgicalHairTreatment = {
  slug: string;
  section: "hair-care";
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  overview: string;
  assessment: string[];
  discussion: string[];
  faqs: { q: string; a: string }[];
};

export const nonSurgicalHairTreatments: NonSurgicalHairTreatment[] = [
  {
    slug: "prp-hair-treatment",
    section: "hair-care",
    title: "PRP",
    text: "Suitability is assessed individually, with clear discussion of the process and realistic expectations.",
    image: prpImage,
    imageAlt: "Illustrative PRP scalp treatment in a modern hair clinic",
    overview: "Platelet-rich plasma (PRP) is prepared from a small sample of the patient's own blood and may be considered as supportive care for selected hair-loss concerns. It is not suitable for every cause of hair loss, so assessment comes first.",
    assessment: ["The pattern and likely cause of hair loss", "Scalp health and relevant medical history", "Current medicines and general suitability", "Whether another treatment approach is more appropriate"],
    discussion: ["How PRP is prepared and administered", "The proposed number and spacing of sessions", "Possible discomfort, aftercare and limitations", "Realistic expectations based on the individual concern"],
    faqs: [
      { q: "Is PRP suitable for every type of hair loss?", a: "No. Suitability depends on the cause, pattern and stage of hair loss, as well as medical and scalp factors." },
      { q: "Does PRP guarantee new hair growth?", a: "No treatment response can be guaranteed. Individual response varies, and the clinic should discuss realistic expectations after assessment." },
    ],
  },
  {
    slug: "gfc-hair-treatment",
    section: "hair-care",
    title: "GFC",
    text: "Suitability is assessed individually, with clear discussion of the process and realistic expectations.",
    image: gfcImage,
    imageAlt: "Illustrative preparation for GFC hair treatment in a professional clinic",
    overview: "Growth Factor Concentrate (GFC) is prepared from a patient's own blood using a specialised process. It may be discussed as supportive care for selected hair concerns after the cause and pattern of hair loss have been assessed.",
    assessment: ["Hair-loss pattern, duration and progression", "Scalp condition and donor hair characteristics", "Relevant health history and current treatments", "Whether GFC has a suitable role in the wider care plan"],
    discussion: ["How the concentrate is prepared and used", "The proposed treatment schedule", "Aftercare and possible temporary effects", "Expected limitations and individual variability"],
    faqs: [
      { q: "How is GFC different from PRP?", a: "Both are prepared from a patient's blood, but the preparation processes differ. The clinic can explain which, if either, may be appropriate after assessment." },
      { q: "How many GFC sessions are needed?", a: "There is no single schedule for everyone. Any proposed plan should reflect the concern, clinical assessment and response." },
    ],
  },
  {
    slug: "hair-scalp-assessment",
    section: "hair-care",
    title: "Hair & Scalp Assessment",
    text: "Suitability is assessed individually, with clear discussion of the process and realistic expectations.",
    image: assessmentImage,
    imageAlt: "Illustrative close scalp assessment with a magnifying examination device",
    overview: "A hair and scalp assessment helps the clinical team understand the pattern of shedding, thinning or scalp symptoms before discussing treatment. It may include history-taking, visual examination and closer assessment of the scalp and hair.",
    assessment: ["When the concern began and how it has changed", "Hair-loss distribution and visible scalp findings", "Hair-care practices, health history and family history", "Whether further medical evaluation may be appropriate"],
    discussion: ["The likely factors contributing to the concern", "Whether treatment or monitoring may be suitable", "Scalp and hair-care guidance", "When referral or additional tests may be advised"],
    faqs: [
      { q: "Should assessment happen before choosing treatment?", a: "Yes. Different causes can look similar, and treatment should be selected only after the concern has been considered carefully." },
      { q: "Does an assessment always lead to a procedure?", a: "No. The next step may be guidance, monitoring, medical care, a procedure or referral, depending on the findings." },
    ],
  },
  {
    slug: "medical-hair-loss-management",
    section: "hair-care",
    title: "Medical Hair Loss Management",
    text: "Suitability is assessed individually, with clear discussion of the process and realistic expectations.",
    image: managementImage,
    imageAlt: "Illustrative consultation for a personalised medical hair-loss management plan",
    overview: "Some hair-loss concerns may be managed without surgery. A medical management plan is selected according to the likely cause, progression, health history and individual suitability, with appropriate review over time.",
    assessment: ["The type and progression of hair loss", "Relevant health conditions and current medicines", "Scalp findings and previous treatments", "Individual goals, tolerance and suitability"],
    discussion: ["Appropriate non-surgical options", "How and when progress may be reviewed", "Possible limitations and precautions", "Whether supportive procedures have a role"],
    faqs: [
      { q: "Can every hair-loss concern be managed medically?", a: "No. The appropriate approach depends on the cause and stage of hair loss, and some concerns may need another form of care." },
      { q: "When will progress be reviewed?", a: "Review timing varies with the concern and plan. The clinic should explain an appropriate follow-up schedule during consultation." },
    ],
  },
  {
    slug: "scalp-treatments",
    section: "hair-care",
    title: "Scalp Treatments",
    text: "Suitability is assessed individually, with clear discussion of the process and realistic expectations.",
    image: scalpTreatmentImage,
    imageAlt: "Illustrative professional scalp treatment in a clean clinical setting",
    overview: "Scalp-focused care may be considered for selected concerns involving flaking, oiliness, buildup, irritation or scalp condition. The right approach depends on identifying the concern rather than selecting a treatment by appearance alone.",
    assessment: ["Visible scalp condition and symptoms", "Duration, triggers and hair-care routine", "Previous products or treatments used", "Whether medical review or referral is needed"],
    discussion: ["Suitable scalp-care options and their purpose", "Home-care guidance where appropriate", "Precautions and signs that need review", "A follow-up plan based on the concern"],
    faqs: [
      { q: "Are scalp treatments the same for dandruff and hair fall?", a: "No. These concerns can have different causes, and one treatment should not be assumed to address both." },
      { q: "Can scalp treatment replace medical assessment?", a: "No. Persistent, painful or worsening scalp symptoms should be assessed so that an appropriate next step can be discussed." },
    ],
  },
];

export function getNonSurgicalHairTreatment(slug: string) {
  return nonSurgicalHairTreatments.find((treatment) => treatment.slug === slug);
}