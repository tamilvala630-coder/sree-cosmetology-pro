import hairResult1 from "@/assets/clinic/hair-result-1.png.asset.json";
import hairResult2 from "@/assets/clinic/hair-result-2.png.asset.json";
import hairResult3 from "@/assets/clinic/hair-result-3.png.asset.json";
import hairResult4 from "@/assets/clinic/hair-result-4.png.asset.json";
import skinResult1 from "@/assets/clinic/skin-result-1.png.asset.json";
import clinicBranding from "@/assets/clinic/clinic-branding.png.asset.json";
import clinicSignage from "@/assets/clinic/clinic-signage.png.asset.json";
import clinicServicesWall from "@/assets/clinic/clinic-services-wall.png.asset.json";
import clinicReception from "@/assets/clinic/clinic-reception.png.asset.json";
import clinicDoctor from "@/assets/clinic/clinic-doctor.png.asset.json";

export const treatmentResults = [
  { src: hairResult1.url, alt: "Hair transplant treatment journey showing stages before, during and after treatment", caption: "Hair transplant journey 1", type: "Hair restoration" },
  { src: hairResult2.url, alt: "Hair transplant treatment journey with pre-treatment, procedure and follow-up photographs", caption: "Hair transplant journey 2", type: "Hair restoration" },
  { src: hairResult3.url, alt: "Hair restoration journey showing treatment stages and follow-up growth", caption: "Hair transplant journey 3", type: "Hair restoration" },
  { src: hairResult4.url, alt: "Hair transplant planning, procedure and follow-up result photographs", caption: "Hair transplant journey 4", type: "Hair restoration" },
  { src: skinResult1.url, alt: "Skin care treatment journey showing acne and skin texture changes", caption: "Skin care journey", type: "Skin care" },
] as const;

export const clinicGallery = [
  { src: clinicBranding.url, alt: "Sree Cosmetology Hair and Skin Clinic branding", caption: "Clinic branding" },
  { src: clinicSignage.url, alt: "Sree Cosmetology clinic feature wall and signage", caption: "Clinic signage" },
  { src: clinicServicesWall.url, alt: "Clinic interior wall displaying available hair, skin, laser and permanent makeup services", caption: "Services area" },
  { src: clinicReception.url, alt: "Reception and waiting area inside Sree Cosmetology in Rajahmundry", caption: "Reception and waiting area" },
] as const;

export const clinicDoctorPhoto = clinicDoctor.url;