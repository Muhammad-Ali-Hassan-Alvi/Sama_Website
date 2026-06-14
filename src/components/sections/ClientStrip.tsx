import { useTranslation } from "react-i18next";
import { MotionInView } from "@/components/MotionInView";
import { FaGoogle } from "react-icons/fa";
import { SiMeta, SiShopify, SiStripe } from "react-icons/si";

const logos = [
  { Icon: SiMeta, label: "Meta" },
  { Icon: FaGoogle, label: "Google" },
  { Icon: SiShopify, label: "Shopify" },
  { Icon: SiStripe, label: "Stripe" },
];

export function ClientStrip() {
  const { t } = useTranslation();

  return (
    <section className="border-y border-border/70 bg-white py-10">
      <div className="section-container">
        <MotionInView className="text-center">
          <h2 className="text-lg font-bold md:text-xl">{t("clients.title")}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            {t("clients.subtitle")}
          </p>
        </MotionInView>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {logos.map(({ Icon, label }, i) => (
            <MotionInView key={label} delay={i * 0.08}>
              <div className="flex items-center gap-2 rounded-full border bg-[#faf7f2] px-5 py-3 text-sm font-semibold text-foreground/70">
                <Icon className="h-5 w-5" />
                {label}
              </div>
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  );
}
