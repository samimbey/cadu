import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { createPageUrl } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Shield, DollarSign, Star, Users, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

import ProgressSteps from "@/components/onboarding/ProgressSteps";
import AmountStep from "@/components/onboarding/AmountStep";
import CreditStep from "@/components/onboarding/CreditStep";
import ProcedureStep from "@/components/onboarding/ProcedureStep";
import DetailsStep from "@/components/onboarding/DetailsStep";

const trustPoints = [
  { icon: Shield, text: "256-bit SSL encryption" },
  { icon: DollarSign, text: "No impact on credit score" },
  { icon: Users, text: "250,000+ provider network" },
  { icon: Star, text: "Top lenders compared for you" },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    desired_amount: 5000,
    credit_score_range: "",
    procedure_type: "",
    employment_status: "",
    annual_income: null,
    email: "",
  });

  const updateFormData = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleComplete = async () => {
    setIsLoading(true);
    try {
      await base44.entities.UserProfile.create({
        ...formData,
        onboarding_completed: true,
        saved_options: [],
      });
      navigate(
        createPageUrl("Marketplace") +
          `?amount=${formData.desired_amount}&credit=${formData.credit_score_range}&procedure=${formData.procedure_type}`
      );
    } catch (error) {
      console.error("Error saving profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <AmountStep data={formData} onChange={updateFormData} onNext={() => setCurrentStep(2)} />;
      case 2:
        return <CreditStep data={formData} onChange={updateFormData} onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />;
      case 3:
        return <ProcedureStep data={formData} onChange={updateFormData} onNext={() => setCurrentStep(4)} onBack={() => setCurrentStep(2)} />;
      case 4:
        return <DetailsStep data={formData} onChange={updateFormData} onComplete={handleComplete} onBack={() => setCurrentStep(3)} isLoading={isLoading} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex">
      <Helmet>
        <title>Find Healthcare Financing — Cadu</title>
        <meta name="description" content="Answer a few quick questions to get personalized healthcare financing options matched to your credit profile and procedure type. No impact on your credit score." />
      </Helmet>

      {/* Left Panel — branding (desktop only) */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10">
          <span className="text-3xl font-light tracking-tight text-white" style={{ fontFamily: "Georgia, serif" }}>
            cadu
          </span>
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-normal text-white mb-4 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              Healthcare in your hands
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Compare top lenders and find the financing plan that fits your life — in minutes.
            </p>

            <div className="space-y-4">
              {trustPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative z-10">
          <p className="text-white/50 text-xs">© 2026 Cadu · Healthcare Finance Marketplace</p>
        </div>
      </div>

      {/* Right Panel — form */}
      <div className="flex-1 flex flex-col min-h-screen bg-white">
        {/* Mobile header */}
        <header className="lg:hidden py-6 px-4 flex justify-center">
          <Link to={createPageUrl("Home")} className="text-2xl font-light tracking-tight text-primary hover:opacity-70 transition-opacity" style={{ fontFamily: "Georgia, serif" }}>
            cadu
          </Link>
        </header>

        {/* Desktop top spacing */}
        <div className="hidden lg:block h-12" />

        <main className="flex-1 px-4 lg:px-12 pb-24 lg:pb-12 flex flex-col justify-center">
          <div className="max-w-lg w-full mx-auto lg:mx-0">
            <ProgressSteps currentStep={currentStep} />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* Trust Badges — mobile only */}
        <footer className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent pt-8 pb-4 px-4">
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>256-bit SSL</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              <span>No Impact on Credit</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}