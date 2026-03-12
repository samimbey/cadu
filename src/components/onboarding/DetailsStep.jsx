import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowLeft, Search, DollarSign, Briefcase, Mail } from "lucide-react";

const employmentOptions = [
  { value: "employed_full_time", label: "Employed Full-Time" },
  { value: "employed_part_time", label: "Employed Part-Time" },
  { value: "self_employed", label: "Self-Employed" },
  { value: "retired", label: "Retired" },
  { value: "student", label: "Student" },
  { value: "unemployed", label: "Currently Unemployed" },
];

export default function DetailsStep({ data, onComplete, onBack, onChange, isLoading }) {
  const handleIncomeChange = (e) => {
    const value = parseInt(e.target.value.replace(/[^0-9]/g, '')) || 0;
    onChange({ annual_income: value });
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canComplete = data.employment_status && data.annual_income && isValidEmail(data.email || "");

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Almost there!
        </h2>
        <p className="text-muted-foreground">
          A few more details to personalize your options
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label className="text-base font-medium flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" />
            Employment Status
          </Label>
          <Select 
            value={data.employment_status || ""} 
            onValueChange={(value) => onChange({ employment_status: value })}
          >
            <SelectTrigger className="h-14 text-base rounded-xl">
              <SelectValue placeholder="Select your employment status" />
            </SelectTrigger>
            <SelectContent>
              {employmentOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-base font-medium flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            Email Address
          </Label>
          <Input
            type="email"
            value={data.email || ""}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="your@email.com"
            className="h-14 text-base rounded-xl"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-base font-medium flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-primary" />
            Annual Income (approximate)
          </Label>
          <div className="relative">
            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              value={data.annual_income ? data.annual_income.toLocaleString() : ""}
              onChange={handleIncomeChange}
              placeholder="Enter your annual income"
              className="h-14 text-base pl-12 rounded-xl"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            This won't affect your credit score. We use this to show relevant options.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-4 border border-secondary/20">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">🔒 Your information is secure.</span>{" "}
          We don't share your details with lenders until you choose to apply.
        </p>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        By clicking "Get My Financing Options," you agree that Cadu may share the information you provided with financial service providers who may contact you regarding financing options. Consent is not required to obtain credit.
      </p>

      <div className="flex gap-3">
        <Button 
          variant="outline"
          onClick={onBack} 
          className="flex-1 py-6 text-lg font-semibold rounded-xl"
          disabled={isLoading}
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back
        </Button>
        <Button 
          onClick={onComplete} 
          disabled={!canComplete || isLoading}
          className={`flex-1 py-6 text-lg font-semibold rounded-xl transition-all ${
            canComplete 
              ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40" 
              : "bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/30"
          }`}
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Finding Options...
            </>
          ) : (
            <>
              <Search className="mr-2 w-5 h-5" />
              Find My Options
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}