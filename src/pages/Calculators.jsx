import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, DollarSign, TrendingUp, Scale } from "lucide-react";
import LoanPaymentCalc from "@/components/calculators/LoanPaymentCalc";
import AffordabilityCalc from "@/components/calculators/AffordabilityCalc";
import APRImpactCalc from "@/components/calculators/APRImpactCalc";

const tabs = [
  {
    id: "loan",
    label: "Loan Payment",
    icon: Calculator,
    description: "Estimate your monthly payment",
  },
  {
    id: "affordability",
    label: "Affordability",
    icon: DollarSign,
    description: "Find out how much you can borrow",
  },
  {
    id: "apr",
    label: "APR Impact",
    icon: TrendingUp,
    description: "See how APR affects total cost",
  },
];

export default function Calculators() {
  const [activeTab, setActiveTab] = useState("loan");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to={createPageUrl("Home")}>
            <span className="text-2xl font-light tracking-tight text-primary cursor-pointer" style={{ fontFamily: "Georgia, serif" }}>
              cadu
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to={createPageUrl("Marketplace")} className="hover:text-foreground transition-colors">
              Marketplace
            </Link>
            <Link to={createPageUrl("Calculators")} className="text-foreground font-medium">
              Calculators
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-normal text-foreground mb-2" style={{ fontFamily: "Georgia, serif" }}>
            Financial Calculators
          </h1>
          <p className="text-muted-foreground">
            Understand the real cost of financing before you apply.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 p-4 rounded-lg border text-left transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border hover:border-primary/40 hover:bg-secondary/50"
                }`}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                <div>
                  <p className={`font-medium text-sm ${isActive ? "text-primary-foreground" : "text-foreground"}`}>
                    {tab.label}
                  </p>
                  <p className={`text-xs mt-0.5 ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {tab.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Calculator Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "loan" && <LoanPaymentCalc />}
            {activeTab === "affordability" && <AffordabilityCalc />}
            {activeTab === "apr" && <APRImpactCalc />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-border px-6 py-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-muted-foreground">
            These calculators are for illustrative purposes only and do not constitute financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}