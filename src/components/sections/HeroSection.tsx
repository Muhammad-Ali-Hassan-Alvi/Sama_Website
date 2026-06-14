import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { SiNextdotjs, SiNodedotjs, SiReact } from "react-icons/si";
import { MotionInView } from "@/components/MotionInView";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function AnimatedCounter({ target }: { target: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.round((1 - (1 - progress) ** 3) * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return <span className="tabular-nums">{value}</span>;
}

export function HeroSection() {
  const { t } = useTranslation();
  const headlines = t("hero.headlines", { returnObjects: true }) as Array<{
    top: string;
    bottom: string;
  }>;
  const cardItems = t("hero.cardItems", { returnObjects: true }) as string[];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % headlines.length);
        setVisible(true);
      }, 450);
    }, 4200);
    return () => clearInterval(timer);
  }, [headlines.length]);

  const phrase = headlines[index];

  return (
    <section className="relative overflow-x-hidden pb-12 pt-6 md:pb-20 md:pt-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 mesh-hero opacity-90" />
      <div
        aria-hidden
        className="hero-blob animate-float-soft absolute -start-24 top-10 h-72 w-72 rounded-full bg-[#f4a259]"
      />
      <div
        aria-hidden
        className="hero-blob absolute end-0 top-32 h-80 w-80 rounded-full bg-[#1a8f8f]/35"
      />
      <div
        aria-hidden
        className="hero-blob absolute bottom-0 start-1/3 h-64 w-64 rounded-full bg-[#e85d4c]/30"
      />

      <div className="section-container relative">
        <MotionInView className="overflow-visible">
          <Badge variant="secondary" className="hero-eyebrow mb-6 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            <span>{t("hero.eyebrow")}</span>
          </Badge>
        </MotionInView>

        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="min-w-0 overflow-visible pe-0 lg:pe-4">
            <h1
              aria-live="polite"
              className="hero-headline text-[clamp(2.25rem,5.5vw,4.5rem)] font-extrabold transition-[opacity,transform,filter] duration-500"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                filter: visible ? "none" : "blur(4px)",
              }}
            >
              <span className="hero-headline-top text-foreground">{phrase.top}</span>
              <span className="hero-headline-gradient">{phrase.bottom}</span>
            </h1>

            <MotionInView delay={0.1}>
              <p className="mt-6 max-w-xl text-base leading-[1.75] text-muted-foreground md:text-[1.125rem]">
                {t("hero.description")}
              </p>
            </MotionInView>

            <MotionInView delay={0.15} className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                <Link to="/contact">
                  {t("hero.primaryCta")}
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/80">
                <Link to="/case-studies">{t("hero.secondaryCta")}</Link>
              </Button>
            </MotionInView>

            <MotionInView delay={0.2} className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { value: 8, label: t("hero.statYears"), suffix: "" },
                { value: 120, label: t("hero.statProjects"), suffix: "+" },
                { value: 14, label: t("hero.statMarkets"), suffix: "+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="stat-pill surface-card rounded-2xl p-4 sm:p-5"
                >
                  <p className="text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
                    <AnimatedCounter target={stat.value} />
                    {stat.suffix}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </MotionInView>
          </div>

          <MotionInView direction="left" delay={0.1} className="min-w-0">
            <div className="relative lg:pe-2">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#e85d4c]/10 via-transparent to-[#1a8f8f]/10 blur-2xl"
              />
              <div className="relative flex flex-col gap-[10px]">
                <Card className="surface-card relative overflow-hidden border-white/80">
                  <CardContent className="p-0">
                    <div className="border-b bg-gradient-to-br from-[#fff7ef] via-white to-[#f0fdfa] p-6 md:p-7">
                      <p className="text-sm font-bold tracking-wide text-secondary">
                        {t("hero.cardTitle")}
                      </p>
                      <ul className="mt-5 space-y-3">
                        {cardItems.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-sm font-medium text-foreground/85"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                              <span className="h-2 w-2 rounded-full bg-primary" />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-3 gap-3 p-5 md:p-6">
                      {[
                        { Icon: SiReact, label: "React", color: "#61DAFB" },
                        { Icon: SiNodedotjs, label: "Node", color: "#68A063" },
                        { Icon: SiNextdotjs, label: "Next.js", color: "#1C1917" },
                      ].map(({ Icon, label, color }) => (
                        <div
                          key={label}
                          className="surface-card-hover flex flex-col items-center gap-2 rounded-xl border bg-[#faf7f2]/80 p-4 text-center"
                        >
                          <Icon style={{ color }} className="h-7 w-7" />
                          <span className="text-xs font-semibold">{label}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="hero-tagline-marquee hidden md:block">
                  <div className="hero-tagline-track">
                    <span className="hero-tagline-item">{t("hero.floatingTagline")}</span>
                    <span className="hero-tagline-item" aria-hidden>
                      {t("hero.floatingTagline")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </MotionInView>
        </div>
      </div>
    </section>
  );
}
