import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Star, TrendingUp, Minus, TrendingDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const creditOptions = [
  { 
    value: "excellent", 
    label: "Excellent", 
    range: "720+", 
    icon: Star,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 border-emerald-200 hover:border-emerald-400"
  },
  { 
    value: "good", 
    label: "Good", 
    range: "680-719", 
    icon: TrendingUp,
    color: "text-blue-500",
    bgColor: "bg-blue-50 border-blue-200 hover:border-blue-400"
  },
  { 
    value: "fair", 
    label: "Fair", 
    range: "620-679", 
    icon: Minus,
    color: "text-amber-500",
    bgColor: "bg-amber-50 border-amber-200 hover:border-amber-400"
  },
  { 
    value: "poor", 
    label: "Needs Work", 
    range: "Below 620", 
    icon: TrendingDown,
    color: "text-orange-500",
    bgColor: "bg-orange-50 border-orange-200 hover:border-orange-400"
  },
  { 
    value: "unknown", 
    label: "Not Sure", 
    range: "I don't know", 
    icon: HelpCircle,
    color: "text-slate-500",
    bgColor: "bg-slate-50 border-slate-200 hover:border-slate-400"
  },
];

export default function CreditStep({ data, onNext, onBack, onChange }) {
  const handleSelect = (value) => {
    onChange({ credit_score_range: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          What's your credit score?
        </h2>
        <p className="text-muted-foreground">
          This helps us find the best options for you
        </p>
      </div>

      <div className="space-y-3">
        {creditOptions.map((option, index) => {
          const Icon = option.icon;
          const isSelected = data.credit_score_range === option.value;
          
          return (
            <motion.button
              key={option.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleSelect(option.value)}
              className={cn(
                "w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 text-left",
                isSelected 
                  ? "border-primary bg-primary/5 shadow-lg" 
                  : option.bgColor
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center",
                isSelected ? "bg-primary text-primary-foreground" : "bg-background"
              )}>
                <Icon className={cn("w-6 h-6", isSelected ? "" : option.color)} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">{option.label}</p>
                <p className="text-sm text-muted-foreground">{option.range}</p>
              </div>
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                >
                  <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
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
          disabled={!data.credit_score_range}
          className="flex-1 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
        >
          Continue
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </motion.div>
  );
}