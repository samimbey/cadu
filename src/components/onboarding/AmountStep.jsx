import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { DollarSign, ArrowRight } from "lucide-react";

const presetAmounts = [1000, 2500, 5000, 10000, 25000, 50000];

export default function AmountStep({ data, onNext, onChange }) {
  const [amount, setAmount] = useState(data.desired_amount || 5000);

  const handleAmountChange = (value) => {
    setAmount(value);
    onChange({ desired_amount: value });
  };

  const handlePresetClick = (preset) => {
    handleAmountChange(preset);
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value.replace(/[^0-9]/g, '')) || 0;
    handleAmountChange(Math.min(value, 100000));
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
          How much do you need?
        </h2>
        <p className="text-muted-foreground">
          Select or enter the amount you'd like to finance
        </p>
      </div>

      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
            <Input
              type="text"
              value={amount.toLocaleString()}
              onChange={handleInputChange}
              className="text-3xl sm:text-4xl font-bold text-center pl-12 pr-4 py-6 h-auto bg-background border-2 border-primary/20 focus:border-primary rounded-xl w-full max-w-xs"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Slider
            value={[amount]}
            onValueChange={([value]) => handleAmountChange(value)}
            max={100000}
            min={500}
            step={100}
            className="py-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>$500</span>
            <span>$100,000</span>
          </div>
        </div>

        <div className="mt-6">
          <Label className="text-sm text-muted-foreground mb-3 block">Quick select:</Label>
          <div className="grid grid-cols-3 gap-2">
            {presetAmounts.map((preset) => (
              <Button
                key={preset}
                variant={amount === preset ? "default" : "outline"}
                size="sm"
                onClick={() => handlePresetClick(preset)}
                className="font-medium"
              >
                ${preset.toLocaleString()}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Button 
        onClick={onNext} 
        className="w-full py-6 text-lg font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
      >
        Continue
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </motion.div>
  );
}