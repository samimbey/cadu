import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, LayoutGrid, Calculator, Info, Lock, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Marketplace", page: "Marketplace", icon: LayoutGrid },
  { label: "Calculators", page: "Calculators", icon: Calculator },
  { label: "About", page: "About", icon: Info },
  { label: "Privacy", page: "Privacy", icon: Lock },
  { label: "Update Preferences", page: "Onboarding", icon: Settings },
];

export default function NavMenu() {
  const [open, setOpen] = useState(false);

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
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <span className="text-xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>
                  cadu
                </span>
                <button onClick={() => setOpen(false)} className="p-1 rounded-md hover:bg-secondary transition-colors">
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              <nav className="flex-1 p-4 space-y-1">
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
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}