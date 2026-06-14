import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MotionInView } from "@/components/MotionInView";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  const { t } = useTranslation();

  return (
    <section className="section-shell">
      <div className="section-container">
        <MotionInView>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#e85d4c] via-[#ef7b55] to-[#f4a259] px-8 py-12 text-white shadow-2xl md:px-14 md:py-16">
            <div
              aria-hidden
              className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-16 start-1/4 h-48 w-48 rounded-full bg-[#1a8f8f]/30 blur-3xl"
            />
            <div className="relative max-w-2xl">
              <h2 className="text-balance text-3xl font-extrabold md:text-4xl">
                {t("cta.title")}
              </h2>
              <p className="mt-4 text-white/90">{t("cta.subtitle")}</p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="mt-8 border-white/30 bg-white text-foreground hover:bg-white/90"
              >
                <Link to="/contact">
                  {t("cta.button")}
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </MotionInView>
      </div>
    </section>
  );
}
