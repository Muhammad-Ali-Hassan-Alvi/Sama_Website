import { useTranslation } from "react-i18next";
import { PageHero } from "@/components/sections/PageHero";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { MotionInView } from "@/components/MotionInView";
import { CtaBanner } from "@/components/sections/CtaBanner";

export function AboutPage() {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true }) as string[];

  return (
    <>
      <PageHero
        title={t("about.title")}
        subtitle={t("about.subtitle")}
        breadcrumbs={[{ label: t("nav.about") }]}
      />
      <section className="section-shell">
        <div className="section-container grid gap-10 lg:grid-cols-2">
          <MotionInView>
            <p className="text-lg leading-[1.8] text-muted-foreground">{t("about.story")}</p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: "12", label: t("about.stats.team") },
                { value: "9", label: t("about.stats.countries") },
                { value: "94%", label: t("about.stats.retention") },
              ].map((stat) => (
                <div key={stat.label} className="stat-pill surface-card rounded-xl p-4 text-center">
                  <p className="text-xl font-extrabold text-primary">{stat.value}</p>
                  <p className="mt-1 text-[10px] leading-snug text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </MotionInView>
          <MotionInView delay={0.1}>
            <div className="surface-card rounded-2xl p-8">
              <h2 className="text-xl font-bold">{t("about.missionTitle")}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{t("about.mission")}</p>
              <h3 className="mt-8 text-lg font-bold">{t("about.valuesTitle")}</h3>
              <ul className="mt-4 space-y-3">
                {values.map((value) => (
                  <li key={value} className="flex gap-3 text-sm text-foreground/85">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </MotionInView>
        </div>
      </section>
      <WhyUsSection />
      <CtaBanner />
    </>
  );
}
