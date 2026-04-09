import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const tabRoots = ["/", "/Marketplace", "/Calculators", "/Blog"];

export default function BackButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Show only if we're NOT on a tab root
  const isRoot = tabRoots.some(
    (root) => pathname === root || (root !== "/" && pathname === root)
  );
  if (isRoot) return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors select-none md:hidden"
    >
      <ChevronLeft className="w-4 h-4" />
      Back
    </button>
  );
}