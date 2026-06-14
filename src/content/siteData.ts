export const serviceSlugs = ["digital-marketing", "mern-stack", "nextjs"] as const;
export const industrySlugs = ["retail", "healthcare", "fintech", "hospitality"] as const;
export const caseStudySlugs = ["noor-retail", "fleetpulse", "gulfpay"] as const;
export const careerSlugs = ["senior-react-dev", "growth-marketer", "arabic-copywriter"] as const;
export const teamMemberIds = ["layla", "omar", "sarah", "ahmed"] as const;
export const pricingPlanIds = ["starter", "growth", "enterprise"] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];
export type IndustrySlug = (typeof industrySlugs)[number];
export type CaseStudySlug = (typeof caseStudySlugs)[number];
export type CareerSlug = (typeof careerSlugs)[number];
export type TeamMemberId = (typeof teamMemberIds)[number];
export type PricingPlanId = (typeof pricingPlanIds)[number];

export const serviceIcons = {
  "digital-marketing": "Megaphone",
  "mern-stack": "Server",
  nextjs: "MonitorSmartphone",
} as const;

export const industryGradients = {
  retail: "from-[#e85d4c]/20 to-[#f4a259]/10",
  healthcare: "from-[#1a8f8f]/20 to-[#7dd3c0]/10",
  fintech: "from-[#6366f1]/15 to-[#a5b4fc]/10",
  hospitality: "from-[#f59e0b]/15 to-[#fcd34d]/10",
} as const;

export const caseStudyMetrics = {
  "noor-retail": ["38%", "2.4x", "6 weeks"],
  fleetpulse: ["6 weeks", "99.9%", "AR/EN"],
  gulfpay: ["52%", "RTL", "4 sprints"],
} as const;
