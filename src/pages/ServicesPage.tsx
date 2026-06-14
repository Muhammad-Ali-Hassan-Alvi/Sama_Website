import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export function ServicesPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        title={t("servicesPage.title")}
        subtitle={t("servicesPage.subtitle")}
        breadcrumbs={[{ label: t("nav.services") }]}
      />
      <ServicesSection showAllLink={false} />
      <ProcessSection />
      <CtaBanner />
    </>
  );
}
