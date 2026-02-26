import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, LayoutGrid, Home, Info, Lock, Settings, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const marketplaceNavItems = [
  { label: "Marketplace", page: "Marketplace", icon: LayoutGrid },
  { label: "About", page: "About", icon: Info },
  { label: "Privacy", page: "Privacy", icon: Lock },
  { label: "Update Preferences", page: "Onboarding", icon: Settings },
];

const defaultNavItems = [
  { label: "Home", page: "Home", icon: Home },
  { label: "About", page: "About", icon: Info },
  { label: "Privacy", page: "Privacy", icon: Lock },
  { label: "Get Started", page: "Onboarding", icon: Settings },
];

const procedureLinks = [
  { label: "Dental Financing", page: "DentalFinancing" },
  { label: "Cosmetic Surgery", page: "CosmeticFinancing" },
  { label: "Vision & LASIK", page: "VisionFinancing" },
  { label: "Fertility & IVF", page: "FertilityFinancing" },
  { label: "General Surgery", page: "GeneralSurgeryFinancing" },
];

export default function NavMenu({ isMarketplace = false }) {
  const [open, setOpen] = useState(false);
  const [proceduresOpen, setProceduresOpen] = useState(false);
  const navItems = isMarketplace ? marketplaceNavItems : defaultNavItems;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-md hover:bg-secondary transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5 text-foreground" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/30 z-50"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 h-full w-64 shadow-xl z-[100] flex flex-col"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <span className="text-xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>
                  cadu
                </span>
                <button onClick={() => setOpen(false)} className="p-1 rounded-md hover:bg-secondary transition-colors">
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navItems.map(({ label, page, icon: Icon }) => (
                  <Link
                    key={page}
                    to={createPageUrl(page)}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    {label}
                  </Link>
                ))}

                {/* Procedure sub-links */}
                <div className="pt-2 border-t border-border mt-2">
                  <button
                    onClick={() => setProceduresOpen(p => !p)}
                    className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
                  >
                    <span>By Procedure</span>
                    {proceduresOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {proceduresOpen && (
                    <div className="mt-1 space-y-0.5 pl-3">
                      {procedureLinks.map(({ label, page }) => (
                        <Link
                          key={page}
                          to={createPageUrl(page)}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}