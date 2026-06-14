import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/useLocale";
import { localeLabels, supportedLocales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type NavItem =
  | { key: string; to: string; children?: undefined }
  | { key: string; to: string; children: Array<{ key: string; to: string }> };

const navItems: NavItem[] = [
  { key: "home", to: "/" },
  {
    key: "services",
    to: "/services",
    children: [
      { key: "services", to: "/services" },
      { key: "pricing", to: "/pricing" },
    ],
  },
  {
    key: "work",
    to: "/case-studies",
    children: [
      { key: "caseStudies", to: "/case-studies" },
      { key: "testimonials", to: "/testimonials" },
    ],
  },
  { key: "industries", to: "/industries" },
  {
    key: "about",
    to: "/about",
    children: [
      { key: "about", to: "/about" },
      { key: "team", to: "/team" },
      { key: "careers", to: "/careers" },
      { key: "faq", to: "/faq" },
    ],
  },
  { key: "contact", to: "/contact" },
];

export function Header() {
  const { t } = useTranslation();
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-[#faf7f2]/90 backdrop-blur-xl">
      <div className="section-container flex h-[4.75rem] items-center justify-between gap-4">
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e85d4c] to-[#f4a259] text-lg font-extrabold text-white shadow-lg shadow-[#e85d4c]/20 transition group-hover:scale-[1.03]">
            S
          </span>
          <div className="leading-tight">
            <p className="text-[15px] font-bold tracking-tight">{t("brand.name")}</p>
            <p className="text-[11px] font-medium text-muted-foreground">{t("brand.short")}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition hover:bg-white/90",
                      isActive ? "bg-white text-primary shadow-sm" : "text-foreground/75",
                    )
                  }
                >
                  {t(`nav.${item.key}`)}
                  <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                </NavLink>
                {activeDropdown === item.key ? (
                  <div className="absolute start-0 top-full z-50 pt-2">
                    <div className="nav-dropdown min-w-[190px] overflow-hidden rounded-2xl border bg-white p-1.5 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-foreground/80 transition hover:bg-muted hover:text-primary"
                        >
                          {t(`nav.${child.key}`)}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <NavLink
                key={item.key}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-3.5 py-2 text-sm font-medium transition hover:bg-white/90",
                    isActive ? "bg-white text-primary shadow-sm" : "text-foreground/75",
                  )
                }
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <Button
              variant="outline"
              size="sm"
              className="bg-white/80"
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen((v) => !v);
              }}
              aria-label="Change language"
              aria-expanded={langOpen}
            >
              <Globe />
              {localeLabels[locale]}
            </Button>
            {langOpen ? (
              <div className="absolute end-0 top-full z-50 pt-2">
                <div
                  className="nav-dropdown min-w-[148px] overflow-hidden rounded-xl border bg-white p-1 shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {supportedLocales.map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => {
                        setLocale(code as Locale);
                        setLangOpen(false);
                      }}
                      className={cn(
                        "flex w-full rounded-lg px-3 py-2 text-start text-sm transition hover:bg-muted",
                        locale === code && "bg-primary/10 font-semibold text-primary",
                      )}
                    >
                      {localeLabels[code]}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <Button asChild className="shadow-md shadow-primary/15">
            <Link to="/contact">{t("nav.cta")}</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="max-h-[80vh] overflow-y-auto border-t bg-white px-4 py-4 xl:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.flatMap((item) =>
              item.children
                ? item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "rounded-xl px-4 py-3 text-sm font-medium",
                          isActive ? "bg-primary/10 text-primary" : "text-foreground/80",
                        )
                      }
                    >
                      {t(`nav.${child.key}`)}
                    </NavLink>
                  ))
                : [
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "rounded-xl px-4 py-3 text-sm font-medium",
                          isActive ? "bg-primary/10 text-primary" : "text-foreground/80",
                        )
                      }
                    >
                      {t(`nav.${item.key}`)}
                    </NavLink>,
                  ],
            )}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t pt-4">
            <Button
              variant="outline"
              onClick={() => {
                setLocale(locale === "en" ? "ar" : "en");
                setOpen(false);
              }}
            >
              <Globe />
              {locale === "en" ? "العربية" : "English"}
            </Button>
            <Button asChild>
              <Link to="/contact" onClick={() => setOpen(false)}>
                {t("nav.cta")}
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/97141234567"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 end-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition hover:scale-105"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
