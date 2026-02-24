import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-8 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-3xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>
            cadu
          </span>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to={createPageUrl("Marketplace")} className="hover:text-foreground transition-colors">Marketplace</Link>
            <Link to={createPageUrl("Calculators")} className="hover:text-foreground transition-colors">Calculators</Link>
            <Link to={createPageUrl("About")} className="hover:text-foreground transition-colors">About</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex items-center px-8">
        <div className="max-w-5xl mx-auto w-full py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1
              className="text-5xl sm:text-6xl font-normal text-foreground mb-6 leading-tight"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Healthcare in your hands
            </h1>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md">
              cadu helps compare and contrast options<br />
              to make healthcare affordable for you
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to={createPageUrl("Onboarding")}>
                <Button className="px-10 py-6 text-base rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-normal">
                  Get Started
                </Button>
              </Link>
              <Link to={createPageUrl("Calculators")} className="text-sm text-primary hover:underline flex items-center gap-1">
                Financial Calculators →
              </Link>
            </div>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-24 pt-12 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-10"
          >
            {[
              { icon: Users, stat: "250,000+", label: "Provider network" },
              { icon: Star, stat: "8 lenders", label: "Compared for you" },
              { icon: Shield, stat: "No impact", label: "On your credit score" },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} className="flex items-center gap-4">
                <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{stat}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-border px-8 py-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-muted-foreground">
            © 2026 Cadu · Short for Caduceus · Healthcare Finance Marketplace
          </p>
        </div>
      </footer>
    </div>
  );
}