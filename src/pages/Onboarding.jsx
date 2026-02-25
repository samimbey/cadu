import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { createPageUrl } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Shield, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";

import ProgressSteps from "@/components/onboarding/ProgressSteps";
import AmountStep from "@/components/onboarding/AmountStep";
import CreditStep from "@/components/onboarding/CreditStep";
import ProcedureStep from "@/components/onboarding/ProcedureStep";
import DetailsStep from "@/components/onboarding/DetailsStep";

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
      // Save profile
      await base44.entities.UserProfile.create({
        ...formData,
        onboarding_completed: true,
        saved_options: [],
      });
      
      // Navigate to marketplace with query params
      navigate(createPageUrl("Marketplace") + 
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
        return (
          <AmountStep
            data={formData}
            onChange={updateFormData}
            onNext={() => setCurrentStep(2)}
          />
        );
      case 2:
        return (
          <CreditStep
            data={formData}
            onChange={updateFormData}
            onNext={() => setCurrentStep(3)}
            onBack={() => setCurrentStep(1)}
          />
        );
      case 3:
        return (
          <ProcedureStep
            data={formData}
            onChange={updateFormData}
            onNext={() => setCurrentStep(4)}
            onBack={() => setCurrentStep(2)}
          />
        );
      case 4:
        return (
          <DetailsStep
            data={formData}
            onChange={updateFormData}
            onComplete={handleComplete}
            onBack={() => setCurrentStep(3)}
            isLoading={isLoading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="max-w-2xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>
              cadu
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-12">
        <div className="max-w-lg mx-auto">
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

      {/* Trust Badges */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent pt-8 pb-4 px-4">
        <div className="max-w-lg mx-auto flex items-center justify-center gap-6 text-xs text-muted-foreground">
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
  );
}