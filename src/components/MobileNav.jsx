import { Link, useLocation } from "react-router-dom";
import { Home, LayoutGrid, Calculator, BookOpen } from "lucide-react";
import { createPageUrl } from "@/utils";

const tabs = [
  { label: "Home", icon: Home, to: "/" },
  { label: "Marketplace", icon: LayoutGrid, to: createPageUrl("Marketplace") },
  { label: "Calculators", icon: Calculator, to: createPageUrl("Calculators") },
  { label: "Blog", icon: BookOpen, to: "/Blog" },
];

export default function MobileNav() {
  const { pathname } = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden border-t border-border bg-white"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {tabs.map(({ label, icon: Icon, to }) => {
        const active = pathname === to || (to !== "/" && pathname.startsWith(to));
        return (
          <Link
            key={label}
            to={to}
            replace
            className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 select-none text-xs transition-colors active:opacity-70 ${
              active ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}