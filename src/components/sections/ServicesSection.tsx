import { Megaphone, MonitorSmartphone, Server } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MotionInView } from "@/components/MotionInView";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const serviceKeys = [
  { key: "marketing", slug: "digital-marketing", Icon: Megaphone },
  { key: "mern", slug: "mern-stack", Icon: Server },
  { key: "nextjs", slug: "nextjs", Icon: MonitorSmartphone },
] as const;

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

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {serviceKeys.map(({ key, slug, Icon }, i) => {
            const points = t(`services.items.${key}.points`, {
              returnObjects: true,
            }) as string[];

            return (
              <MotionInView key={key} delay={i * 0.1}>
                <Card className="surface-card surface-card-hover group h-full overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-[#e85d4c] via-[#f4a259] to-[#1a8f8f] opacity-0 transition group-hover:opacity-100" />
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{t(`services.items.${key}.title`)}</CardTitle>
                    <CardDescription>{t(`services.items.${key}.description`)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="ghost" className="mt-6 px-0 text-primary hover:bg-transparent">
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
            <Button asChild variant="outline" className="bg-white">
              <Link to="/services">{t("services.viewAll")}</Link>
            </Button>
          </MotionInView>
        ) : null}
      </div>
    </section>
  );
}
