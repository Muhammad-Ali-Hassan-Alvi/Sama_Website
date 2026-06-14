import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { ServiceDetailPage } from "@/pages/ServiceDetailPage";
import { IndustryDetailPage } from "@/pages/IndustryDetailPage";
import { CaseStudyDetailPage } from "@/pages/CaseStudyDetailPage";
import { IndustriesPage, CaseStudiesPage } from "@/pages/WorkPages";
import {
  CareersPage,
  TeamPage,
  PricingPage,
  FAQPage,
  TestimonialsPage,
} from "@/pages/CompanyPages";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="industries/:slug" element={<IndustryDetailPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="case-studies/:slug" element={<CaseStudyDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
