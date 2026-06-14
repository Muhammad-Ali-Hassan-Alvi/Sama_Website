import { Outlet } from "react-router-dom";
import { FloatingWhatsApp, Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CursorFollower } from "@/components/layout/CursorFollower";
import { useLocale } from "@/hooks/useLocale";

export function Layout() {
  useLocale();

  return (
    <div className="relative min-h-screen">
      <CursorFollower />
      <div className="grain-overlay pointer-events-none fixed inset-0 z-[1]" />
      <Header />
      <main className="relative z-[2]">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
