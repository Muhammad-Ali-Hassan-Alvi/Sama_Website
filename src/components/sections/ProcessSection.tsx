import { useTranslation } from "react-i18next";
import { MotionInView } from "@/components/MotionInView";
import { Badge } from "@/components/ui/badge";

const steps = ["discover", "design", "launch"] as const;

export function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="section-shell">
      <div className="section-container">
        <MotionInView className="text-center">
          <Badge>{t("process.eyebrow")}</Badge>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
            {t("process.title")}
          </h2>
        </MotionInView>

        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute start-[16%] end-[16%] top-8 hidden h-0.5 bg-gradient-to-r from-[#e85d4c] via-[#f4a259] to-[#1a8f8f] md:block"
          />
          {steps.map((step, i) => (
            <MotionInView key={step} delay={i * 0.12}>
              <div className="relative rounded-2xl border bg-white p-6 text-center shadow-sm">
                <span className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold">{t(`process.steps.${step}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(`process.steps.${step}.description`)}
                </p>
              </div>
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  );
}
