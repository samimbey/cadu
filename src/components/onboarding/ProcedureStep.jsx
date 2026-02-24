import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Smile, Sparkles, Eye, Baby, Scale, Heart, Ear, Stethoscope, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const procedureOptions = [
  { value: "dental", label: "Dental", icon: Smile, color: "bg-sky-100 text-sky-600" },
  { value: "cosmetic", label: "Cosmetic", icon: Sparkles, color: "bg-pink-100 text-pink-600" },
  { value: "vision", label: "Vision/LASIK", icon: Eye, color: "bg-violet-100 text-violet-600" },
  { value: "fertility", label: "Fertility", icon: Baby, color: "bg-rose-100 text-rose-600" },
  { value: "bariatric", label: "Weight Loss", icon: Scale, color: "bg-emerald-100 text-emerald-600" },
  { value: "veterinary", label: "Veterinary", icon: Heart, color: "bg-amber-100 text-amber-600" },
  { value: "hearing", label: "Hearing", icon: Ear, color: "bg-indigo-100 text-indigo-600" },
  { value: "general_medical", label: "General Medical", icon: Stethoscope, color: "bg-teal-100 text-teal-600" },
  { value: "other", label: "Other", icon: MoreHorizontal, color: "bg-slate-100 text-slate-600" },
];

export default function ProcedureStep({ data, onNext, onBack, onChange }) {
  const handleSelect = (value) => {
    onChange({ procedure_type: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="text-center space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
          What type of procedure?
        </h2>
        <p className="text-muted-foreground font-light">
          Select the category that best fits your needs
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {procedureOptions.map((option, index) => {
          const Icon = option.icon;
          const isSelected = data.procedure_type === option.value;
          
          return (
            <motion.button
              key={option.value}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleSelect(option.value)}
              className={cn(
                "p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 text-center",
                isSelected 
                  ? "border-primary bg-primary/5 shadow-lg scale-105" 
                  : "border-border hover:border-primary/50 hover:bg-muted/50"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                isSelected ? "bg-primary text-primary-foreground" : option.color
              )}>
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-foreground">{option.label}</p>
            </motion.button>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button 
          variant="outline"
          onClick={onBack} 
          className="flex-1 py-6 text-lg font-semibold rounded-xl"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back
        </Button>
        <Button 
          onClick={onNext} 
          disabled={!data.procedure_type}
          className="flex-1 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
        >
          Continue
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </motion.div>
  );
}