import { Building2, Code2, Layers, Megaphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MotionInView } from "@/components/MotionInView";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCardKeys, serviceImages, serviceSlugs } from "@/content/siteData";

const iconMap = {
  megaphone: Megaphone,
  code: Code2,
  layers: Layers,
  building: Building2,
} as const;

export function ServicesSection({ showAllLink = true }: { showAllLink?: boolean }) {
  const { t } = useTranslation();

  return (
    <section className="section-shell">
      <div className="section-container">
        <SectionHeader
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {serviceSlugs.map((slug, i) => {
            const { key, icon } = serviceCardKeys[slug];
            const Icon = iconMap[icon];
            const points = t(`services.items.${key}.points`, {
              returnObjects: true,
            }) as string[];

            return (
              <MotionInView key={slug} delay={i * 0.1}>
                <Card className="surface-card surface-card-hover group h-full overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={serviceImages[slug]}
                      alt={t(`services.items.${key}.title`)}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                    <div className="absolute bottom-4 start-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFEDED]/90 text-[#F86B64] shadow-sm backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{t(`services.items.${key}.title`)}</CardTitle>
                    <CardDescription>{t(`services.items.${key}.description`)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F86B64]" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="ghost" className="mt-6 px-0 text-[#F86B64] hover:bg-transparent">
                      <Link to={`/services/${slug}`}>{t("services.learnMore")} →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </MotionInView>
            );
          })}
        </div>

        {showAllLink ? (
          <MotionInView className="mt-10">
            <Button asChild variant="outline" className="border-[#FFEDED] bg-white hover:bg-[#FFEDED]/50">
              <Link to="/services">{t("services.viewAll")}</Link>
            </Button>
          </MotionInView>
        ) : null}
      </div>
    </section>
  );
}
