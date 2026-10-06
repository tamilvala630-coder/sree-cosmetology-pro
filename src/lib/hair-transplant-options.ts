import fueImage from "@/assets/treatments/fue-hair-transplant.jpg";
import hairlineImage from "@/assets/treatments/hairline-restoration.jpg";
import crownImage from "@/assets/treatments/crown-restoration.jpg";
import beardImage from "@/assets/treatments/beard-moustache-transplant.jpg";
import correctiveImage from "@/assets/treatments/corrective-hair-transplant.jpg";

export type HairTransplantOption = {
  slug: string;
  section: "hair-transplant";
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  overview: string;
  assessment: string[];
  planning: string[];
  faqs: { q: string; a: string }[];
};

export const hairTransplantOptions: HairTransplantOption[] = [
  {
    slug: "fue-hair-transplant",
    section: "hair-transplant",
    title: "FUE Hair Transplant",
    text: "Individual follicular units are moved from a suitable donor area to planned recipient areas after careful assessment.",
    image: fueImage,
    imageAlt: "Illustrative FUE donor-area planning consultation in a modern clinic",
    overview: "Follicular Unit Extraction (FUE) is a hair transplant method in which individual follicular units are taken from a suitable donor area and placed into carefully planned recipient sites. The plan depends on donor quality, the pattern of loss and long-term needs.",
    assessment: ["Donor-area density and hair characteristics", "Current hair-loss pattern and likely progression", "Scalp health and relevant medical history", "Realistic coverage priorities and expectations"],
    planning: ["A personalised graft and recipient-area plan", "Natural growth direction and distribution", "Procedure, recovery and aftercare guidance", "Long-term hair-loss management where appropriate"],
    faqs: [
      { q: "Is FUE suitable for everyone?", a: "No. Suitability depends on donor availability, hair-loss pattern, scalp health, medical history and realistic goals." },
      { q: "Will the result be the same for every patient?", a: "No. Growth, density, healing and the final appearance vary between individuals." },
    ],
  },
  {
    slug: "hairline-restoration",
    section: "hair-transplant",
    title: "Hairline Restoration",
    text: "Hairline planning considers facial proportions, existing loss and long-term expectations for an age-appropriate appearance.",
    image: hairlineImage,
    imageAlt: "Illustrative consultation showing careful planning of a natural front hairline",
    overview: "Hairline restoration focuses on creating a balanced, age-appropriate front hairline. Design is considered alongside facial proportions, existing hair, donor supply and the possibility of future hair loss.",
    assessment: ["Current hairline and temple recession", "Facial proportions and existing growth direction", "Donor-area quality and available supply", "Age, progression and long-term stability"],
    planning: ["A conservative, individual hairline design", "Irregular placement for a natural-looking edge", "Density priorities across the frontal area", "A plan that considers possible future loss"],
    faqs: [
      { q: "Can I choose any hairline shape?", a: "The design is discussed with you, but it should also suit your facial proportions, donor supply and likely future hair loss." },
      { q: "How is a natural-looking hairline planned?", a: "Direction, spacing, irregularity and the use of finer follicles at the front are considered during planning." },
    ],
  },
  {
    slug: "crown-restoration",
    section: "hair-transplant",
    title: "Crown Restoration",
    text: "Selected crown-area concerns can be assessed for graft placement, coverage priorities and donor availability.",
    image: crownImage,
    imageAlt: "Illustrative clinical examination of thinning in the crown area",
    overview: "Crown restoration may be considered for selected people with thinning at the vertex. Because the crown can require substantial donor hair, coverage priorities and the natural swirl pattern need careful planning.",
    assessment: ["Size and stability of the crown area", "Natural whorl and growth direction", "Donor density and available graft supply", "Frontal-area needs and overall priorities"],
    planning: ["Placement that follows the natural crown swirl", "Balanced use of the available donor supply", "Realistic discussion of achievable visual coverage", "Consideration of continuing hair loss"],
    faqs: [
      { q: "Why does the crown need careful graft planning?", a: "Its circular growth pattern and surface area can require many grafts, so donor supply and other priority areas must be balanced." },
      { q: "Can crown density match the original density?", a: "That cannot be promised. The achievable appearance depends on the area, donor supply and individual hair characteristics." },
    ],
  },
  {
    slug: "beard-moustache-transplant",
    section: "hair-transplant",
    title: "Beard & Moustache Transplant",
    text: "A consultation-led option for selected facial hair concerns, planned around growth direction and available donor hair.",
    image: beardImage,
    imageAlt: "Illustrative consultation assessing beard and moustache growth direction",
    overview: "A beard or moustache transplant may be considered for selected areas of sparse or uneven facial hair. Planning pays close attention to facial proportions, existing hair and the changing direction of facial-hair growth.",
    assessment: ["Pattern and cause of sparse facial hair", "Skin condition in the planned area", "Existing beard or moustache direction", "Suitability of the scalp donor area"],
    planning: ["Shape and coverage discussed before treatment", "Placement aligned with natural growth angles", "Conservative use of suitable donor follicles", "Clear recovery and grooming guidance"],
    faqs: [
      { q: "Can a transplant fill every beard gap?", a: "Suitability and achievable coverage vary. The clinic assesses the skin, existing facial hair and donor supply before recommending a plan." },
      { q: "Where does donor hair usually come from?", a: "Suitable follicles are commonly considered from the scalp donor area, subject to individual assessment." },
    ],
  },
  {
    slug: "corrective-hair-transplant",
    section: "hair-transplant",
    title: "Corrective Hair Transplant",
    text: "Previous procedures can be assessed individually to understand whether corrective planning may be appropriate.",
    image: correctiveImage,
    imageAlt: "Illustrative consultation reviewing a previous hairline and corrective planning options",
    overview: "Corrective hair transplantation involves assessing concerns after a previous procedure, such as hairline design, visible spacing or uneven distribution. What can be changed depends on the existing grafts, scarring and remaining donor supply.",
    assessment: ["The design, direction and distribution of existing grafts", "Any visible scarring or donor-area limitations", "Current and continuing natural hair loss", "Remaining donor supply and realistic priorities"],
    planning: ["Camouflage or redistribution where suitable", "A revised hairline plan when appropriate", "Careful protection of the remaining donor area", "Alternatives if another transplant is not advisable"],
    faqs: [
      { q: "Can every previous transplant be corrected?", a: "No. Options depend on the existing grafts, scarring, scalp condition and remaining donor supply." },
      { q: "Will correction require another procedure?", a: "Sometimes, but not always. The clinic first assesses whether surgery, another approach or no further treatment is the safer option." },
    ],
  },
];

export function getHairTransplantOption(slug: string) {
  return hairTransplantOptions.find((option) => option.slug === slug);
}