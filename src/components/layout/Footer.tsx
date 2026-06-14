import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const companyLinks = [
  { key: "about", to: "/about" },
  { key: "team", to: "/team" },
  { key: "careers", to: "/careers" },
  { key: "faq", to: "/faq" },
] as const;

const quickLinks = [
  { key: "services", to: "/services" },
  { key: "industries", to: "/industries" },
  { key: "caseStudies", to: "/case-studies" },
  { key: "pricing", to: "/pricing" },
  { key: "contact", to: "/contact" },
] as const;

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-white">
      <div className="section-container grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e85d4c] to-[#f4a259] text-lg font-extrabold text-white">
              S
            </span>
            <p className="text-lg font-bold">{t("brand.name")}</p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {t("footer.description")}
          </p>
          <div className="mt-5 flex gap-2.5">
            {[FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-[#faf7f2] text-foreground/65 transition hover:border-primary/30 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-foreground/50">
            {t("footer.quickLinks")}
          </p>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map(({ key, to }) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground transition hover:text-primary">
                  {t(`nav.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-foreground/50">
            {t("footer.company")}
          </p>
          <ul className="space-y-2.5 text-sm">
            {companyLinks.map(({ key, to }) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground transition hover:text-primary">
                  {t(`nav.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-foreground/50">
            {t("footer.contact")}
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {t("footer.email")}
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              {t("footer.phone")}
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f4a259]" />
              {t("footer.location")}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t py-5 text-center text-xs text-muted-foreground">
        © {year} {t("brand.name")}. {t("footer.rights")}
      </div>
    </footer>
  );
}
