import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { RadialBarChart, RadialBar, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, XCircle, Info } from "lucide-react";

function formatCurrency(n) {
  return "$" + Math.round(n).toLocaleString();
}

const DTI_THRESHOLDS = [
  { max: 28, label: "Excellent", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200", icon: CheckCircle, iconColor: "text-emerald-500" },
  { max: 36, label: "Good", color: "text-primary", bg: "bg-blue-50 border-blue-200", icon: CheckCircle, iconColor: "text-primary" },
  { max: 43, label: "Fair", color: "text-amber-600", bg: "bg-amber-50 border-amber-200", icon: AlertCircle, iconColor: "text-amber-500" },
  { max: 100, label: "High Risk", color: "text-red-600", bg: "bg-red-50 border-red-200", icon: XCircle, iconColor: "text-red-500" },
];

export default function AffordabilityCalc() {
  const [annualIncome, setAnnualIncome] = useState(60000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [desiredPayment, setDesiredPayment] = useState(300);
  const [rate, setRate] = useState(12);
  const [term, setTerm] = useState(36);

  const results = useMemo(() => {
    const monthlyIncome = annualIncome / 12;
    const totalMonthlyDebt = monthlyDebts + desiredPayment;
    const dtiRatio = (totalMonthlyDebt / monthlyIncome) * 100;

    // Max affordable payment = 43% DTI max minus existing debts
    const maxAffordablePayment = Math.max(0, monthlyIncome * 0.43 - monthlyDebts);

    // Reverse calc: how much can they borrow at desired payment?
    const r = rate / 100 / 12;
    let maxLoanAmount;
    if (rate === 0) {
      maxLoanAmount = desiredPayment * term;
    } else {
      maxLoanAmount = desiredPayment * (Math.pow(1 + r, term) - 1) / (r * Math.pow(1 + r, term));
    }

    // Max loan at max affordable payment
    let maxBorrowable;
    if (rate === 0) {
      maxBorrowable = maxAffordablePayment * term;
    } else {
      maxBorrowable = maxAffordablePayment * (Math.pow(1 + r, term) - 1) / (r * Math.pow(1 + r, term));
    }

    const threshold = DTI_THRESHOLDS.find(t => dtiRatio <= t.max) || DTI_THRESHOLDS[3];

    return { monthlyIncome, dtiRatio, maxAffordablePayment, maxLoanAmount, maxBorrowable, threshold };
  }, [annualIncome, monthlyDebts, desiredPayment, rate, term]);

  const StatusIcon = results.threshold.icon;
  const dtiDisplay = Math.min(100, results.dtiRatio).toFixed(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="space-y-7 bg-white border border-border rounded-xl p-6">
        <h2 className="text-lg font-medium text-foreground">Your Financial Profile</h2>

        <SliderField
          label="Annual Income (before tax)"
          value={annualIncome}
          onChange={setAnnualIncome}
          min={10000} max={300000} step={1000}
          format={(v) => "$" + (v / 1000).toFixed(0) + "k"}
          display={"$" + annualIncome.toLocaleString()}
        />

        <SliderField
          label="Existing Monthly Debt Payments"
          value={monthlyDebts}
          onChange={setMonthlyDebts}
          min={0} max={5000} step={50}
          format={(v) => "$" + v.toLocaleString()}
          display={"$" + monthlyDebts.toLocaleString() + "/mo"}
        />

        <SliderField
          label="Desired Monthly Payment"
          value={desiredPayment}
          onChange={setDesiredPayment}
          min={50} max={3000} step={25}
          format={(v) => "$" + v}
          display={"$" + desiredPayment.toLocaleString() + "/mo"}
        />

        <SliderField
          label="Expected APR"
          value={rate}
          onChange={setRate}
          min={0} max={36} step={0.5}
          format={(v) => v + "%"}
          display={rate + "%"}
        />

        <SliderField
          label="Loan Term"
          value={term}
          onChange={setTerm}
          min={6} max={84} step={6}
          format={(v) => v + " mo"}
          display={term + " months"}
        />
      </div>

      {/* Results */}
      <div className="space-y-5">
        {/* DTI Status */}
        <motion.div
          key={results.threshold.label}
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`border rounded-xl p-5 ${results.threshold.bg}`}
        >
          <div className="flex items-start gap-3">
            <StatusIcon className={`w-6 h-6 mt-0.5 flex-shrink-0 ${results.threshold.iconColor}`} />
            <div>
              <p className={`font-semibold text-lg ${results.threshold.color}`}>
                Debt-to-Income: {results.threshold.label}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Your DTI ratio would be <strong>{dtiDisplay}%</strong> — lenders typically prefer under 43%.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Numbers */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Monthly Income</p>
            <p className="text-2xl font-semibold text-foreground">{formatCurrency(results.monthlyIncome)}</p>
          </div>
          <div className="border border-border rounded-xl p-4">
            <p className="text-xs text-muted-foreground mb-1">Max Affordable Payment</p>
            <p className="text-2xl font-semibold text-foreground">{formatCurrency(results.maxAffordablePayment)}</p>
          </div>
        </div>

        {/* Loan Amount Estimate */}
        <div className="bg-primary rounded-xl p-5 text-primary-foreground">
          <p className="text-sm text-primary-foreground/70 mb-1">You could borrow up to</p>
          <p className="text-5xl font-light mb-3" style={{ fontFamily: "Georgia, serif" }}>
            {formatCurrency(results.maxBorrowable)}
          </p>
          <p className="text-sm text-primary-foreground/70">
            At {rate}% APR over {term} months with your desired {formatCurrency(desiredPayment)}/mo payment
          </p>
        </div>

        {/* DTI Breakdown Bar */}
        <div className="border border-border rounded-xl p-4 space-y-3">
          <p className="text-sm font-medium text-foreground">Income Allocation</p>
          <div className="space-y-2">
            {[
              { label: "Existing debts", value: (monthlyDebts / results.monthlyIncome) * 100, color: "bg-muted-foreground/40" },
              { label: "New payment", value: (desiredPayment / results.monthlyIncome) * 100, color: "bg-primary" },
              { label: "Remaining income", value: Math.max(0, 100 - (results.dtiRatio)), color: "bg-emerald-400/40" },
            ].map((bar) => (
              <div key={bar.label} className="flex items-center gap-3 text-xs">
                <span className="w-28 text-muted-foreground">{bar.label}</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${bar.color}`}
                    style={{ width: `${Math.min(100, bar.value)}%` }}
                  />
                </div>
                <span className="w-10 text-right font-medium">{Math.min(100, bar.value).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-2 text-xs text-muted-foreground">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <p>Lenders typically look for a DTI below 43%. Some healthcare lenders may have more flexible requirements.</p>
        </div>
      </div>
    </div>
  );
}

function SliderField({ label, value, onChange, min, max, step, format, display }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">{label}</Label>
        <span className="text-sm font-semibold text-primary">{display}</span>
      </div>
      <Slider value={[value]} onValueChange={([v]) => onChange(v)} min={min} max={max} step={step} />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}