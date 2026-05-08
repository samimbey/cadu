import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, DollarSign, TrendingUp, BarChart2, ArrowRight } from "lucide-react";
import NavMenu from "@/components/marketplace/NavMenu";
import { Helmet } from "react-helmet-async";

import LoanPaymentCalc from "@/components/calculators/LoanPaymentCalc";
import AffordabilityCalc from "@/components/calculators/AffordabilityCalc";
import APRImpactCalc from "@/components/calculators/APRImpactCalc";

const tabs = [
  {
    id: "loan",
    label: "Loan Payment",
    icon: Calculator,
    description: "Estimate your monthly payment",
    component: LoanPaymentCalc,
  },
  {
    id: "affordability",
    label: "Affordability",
    icon: DollarSign,
    description: "How much can you borrow?",
    component: AffordabilityCalc,
  },
  {
    id: "apr",
    label: "APR Impact",
    icon: BarChart2,
    description: "Compare total cost by rate",
    component: APRImpactCalc,
  },
];

export default function Calculators() {
  const [activeTab, setActiveTab] = useState("loan");

  const ActiveComponent = tabs.find((t) => t.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Healthcare Finance Calculators — Cadu</title>
        <meta name="description" content="Use free healthcare finance calculators to estimate monthly payments, check affordability, and compare APR impact before applying for a medical loan." />
      </Helmet>
      {/* Header */}
      <header className="border-b border-border px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to={createPageUrl("Home")}>
            <span className="text-2xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>
              cadu
            </span>
          </Link>
          <NavMenu />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-normal text-foreground mb-3" style={{ fontFamily: "Georgia, serif" }}>
            Financial Calculators
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Understand the real cost of healthcare financing before you apply. Explore your options with interactive tools.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-md"
                    : "border-border hover:border-primary/40 bg-white text-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                <p className={`font-medium text-sm ${isActive ? "" : ""}`}>{tab.label}</p>
                <p className={`text-xs mt-0.5 ${isActive ? "opacity-75" : "text-muted-foreground"}`}>
                  {tab.description}
                </p>
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
            className="bg-white border border-border rounded-2xl p-6 sm:p-10 shadow-sm"
          >
            {ActiveComponent && <ActiveComponent />}
          </motion.div>
        </AnimatePresence>

        {/* Explain My Bill link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          Have a bill you don't understand?{" "}
          <Link to={createPageUrl("ExplainMyBill")} className="text-primary hover:underline font-medium">
            Explain My Bill →
          </Link>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-6 bg-secondary rounded-xl border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <p className="font-medium text-foreground">Ready to see your real options?</p>
            <p className="text-sm text-muted-foreground">Compare actual lenders matched to your profile — no credit impact.</p>
          </div>
          <Link to={createPageUrl("Onboarding")}>
            <button className="flex-shrink-0 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
              Find My Options
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}