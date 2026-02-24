import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const steps = [
  { id: 1, name: "Amount" },
  { id: 2, name: "Credit" },
  { id: 3, name: "Procedure" },
  { id: 4, name: "Details" },
];

export default function ProgressSteps({ currentStep }) {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ 
                  scale: currentStep >= step.id ? 1 : 0.8,
                  backgroundColor: currentStep >= step.id ? "hsl(var(--primary))" : "hsl(var(--muted))"
                }}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                  currentStep >= step.id 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" 
                    : "bg-muted text-muted-foreground"
                )}
              >
                {currentStep > step.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-semibold">{step.id}</span>
                )}
              </motion.div>
              <span className={cn(
                "mt-2 text-xs font-medium transition-colors",
                currentStep >= step.id ? "text-primary" : "text-muted-foreground"
              )}>
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={cn(
                "w-12 sm:w-20 h-0.5 mx-2 transition-colors duration-300",
                currentStep > step.id ? "bg-primary" : "bg-muted"
              )} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}