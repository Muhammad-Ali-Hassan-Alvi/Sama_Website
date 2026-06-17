export const serviceSlugs = [
  "digital-marketing",
  "web-development",
  "web-applications-development",
  "b2b-solutions",
] as const;
export const industrySlugs = ["retail", "healthcare", "fintech", "hospitality"] as const;
export const caseStudySlugs = ["noor-retail", "fleetpulse", "gulfpay"] as const;
export const careerSlugs = ["senior-react-dev", "growth-marketer", "arabic-copywriter"] as const;
export const teamMemberIds = ["layla", "omar", "sarah", "ahmed"] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];
export type IndustrySlug = (typeof industrySlugs)[number];
export type CaseStudySlug = (typeof caseStudySlugs)[number];
export type CareerSlug = (typeof careerSlugs)[number];
export type TeamMemberId = (typeof teamMemberIds)[number];

export const serviceImages: Record<ServiceSlug, string> = {
  "digital-marketing": "/images/digital-marketing.jpg",
  "web-development": "/images/daniel-korpai-pKRNxEguRgM-unsplash.jpg",
  "web-applications-development": "/images/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg",
  "b2b-solutions": "/images/team.jpg",
};

export const caseStudyImages: Record<CaseStudySlug, string> = {
  "noor-retail": "/images/premium_photo-1720287601300-cf423c3d6760.avif",
  fleetpulse: "/images/webdevelopment.jpg",
  gulfpay: "/images/analytics-dashboard.jpg",
};

export const openSourceProjects = [
  {
    id: "locale-ui",
    image: "/images/picture.avif",
    href: "https://github.com",
  },
  {
    id: "ship-kit",
    image: "/images/premium_photo-1720287601920-ee8c503af775.avif",
    href: "https://github.com",
  },
  {
    id: "motion-primitives",
    image: "/images/data-insights.jpg",
    href: "https://github.com",
  },
] as const;

export const serviceCardKeys: Record<
  ServiceSlug,
  { key: string; icon: "megaphone" | "code" | "layers" | "building" }
> = {
  "digital-marketing": { key: "marketing", icon: "megaphone" },
  "web-development": { key: "webdev", icon: "code" },
  "web-applications-development": { key: "webapps", icon: "layers" },
  "b2b-solutions": { key: "b2b", icon: "building" },
};

export const industryImages: Record<IndustrySlug, string> = {
  retail: "/images/digital-marketing.jpg",
  healthcare: "/images/collaboration.jpg",
  fintech: "/images/data-insights.jpg",
  hospitality: "/images/premium_photo-1720287601920-ee8c503af775.avif",
};

export const industryGradients = {
  retail: "from-[#F86B64]/15 to-[#FFEDED]",
  healthcare: "from-[#FFEDED] to-white",
  fintech: "from-[#F86B64]/10 to-[#FFEDED]",
  hospitality: "from-[#FFEDED] to-[#F86B64]/10",
} as const;

export const caseStudyMetrics = {
  "noor-retail": ["38% CPL drop", "2.4x CR", "6 weeks"],
  fleetpulse: ["6 week ship", "99.9% uptime", "i18n ready"],
  gulfpay: ["52% signups", "3 locales", "4 sprints"],
} as const;
