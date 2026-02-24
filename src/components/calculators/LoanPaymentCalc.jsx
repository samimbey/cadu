import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { motion } from "framer-motion";

function formatCurrency(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function LoanPaymentCalc() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(12);
  const [term, setTerm] = useState(36);

  const results = useMemo(() => {
    if (rate === 0) {
      const monthly = amount / term;
      return { monthly, totalPayment: amount, totalInterest: 0 };
    }
    const r = rate / 100 / 12;
    const monthly = (amount * r * Math.pow(1 + r, term)) / (Math.pow(1 + r, term) - 1);
    const totalPayment = monthly * term;
    const totalInterest = totalPayment - amount;
    return { monthly, totalPayment, totalInterest };
  }, [amount, rate, term]);

  const amortizationData = useMemo(() => {
    const r = rate / 100 / 12;
    let balance = amount;
    let cumulativeInterest = 0;
    const data = [];
    for (let i = 1; i <= term; i++) {
      const interestPayment = rate === 0 ? 0 : balance * r;
      const principalPayment = results.monthly - interestPayment;
      balance = Math.max(0, balance - principalPayment);
      cumulativeInterest += interestPayment;
      if (i % Math.ceil(term / 12) === 0 || i === term) {
        data.push({
          month: `Mo ${i}`,
          balance: Math.round(balance),
          interest: Math.round(cumulativeInterest),
        });
      }
    }
    return data;
  }, [amount, rate, term, results.monthly]);

  const principalPct = Math.round((amount / results.totalPayment) * 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="space-y-8 bg-white border border-border rounded-xl p-6">
        <h2 className="text-lg font-medium text-foreground">Loan Details</h2>

        <SliderField
          label="Loan Amount"
          value={amount}
          onChange={setAmount}
          min={500} max={100000} step={100}
          format={(v) => "$" + v.toLocaleString()}
          inputPrefix="$"
          onInputChange={(v) => setAmount(Math.min(100000, Math.max(500, parseInt(v) || 500)))}
        />

        <SliderField
          label="Annual Interest Rate (APR)"
          value={rate}
          onChange={setRate}
          min={0} max={40} step={0.1}
          format={(v) => v.toFixed(1) + "%"}
          inputSuffix="%"
          onInputChange={(v) => setRate(Math.min(40, Math.max(0, parseFloat(v) || 0)))}
        />

        <SliderField
          label="Loan Term (months)"
          value={term}
          onChange={setTerm}
          min={3} max={84} step={1}
          format={(v) => v + " mo"}
          onInputChange={(v) => setTerm(Math.min(84, Math.max(3, parseInt(v) || 3)))}
        />
      </div>

      {/* Results */}
      <div className="space-y-6">
        {/* Monthly Payment Hero */}
        <motion.div
          key={results.monthly}
          initial={{ scale: 0.97, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-primary rounded-xl p-6 text-primary-foreground"
        >
          <p className="text-sm text-primary-foreground/70 mb-1">Estimated Monthly Payment</p>
          <p className="text-5xl font-light" style={{ fontFamily: "Georgia, serif" }}>
            {formatCurrency(results.monthly)}
          </p>
          <div className="flex gap-4 mt-4 text-sm text-primary-foreground/70">
            <span>{term} months</span>
            <span>·</span>
            <span>{rate}% APR</span>
          </div>
        </motion.div>

        {/* Breakdown */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-border rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-1">Total Payment</p>
            <p className="text-xl font-semibold text-foreground">{formatCurrency(results.totalPayment)}</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-1">Total Interest</p>
            <p className="text-xl font-semibold text-destructive">{formatCurrency(results.totalInterest)}</p>
          </div>
        </div>

        {/* Principal vs Interest Bar */}
        <div className="border border-border rounded-lg p-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Principal {principalPct}%</span>
            <span>Interest {100 - principalPct}%</span>
          </div>
          <div className="flex h-3 rounded-full overflow-hidden">
            <div className="bg-primary transition-all" style={{ width: `${principalPct}%` }} />
            <div className="bg-destructive/50 flex-1" />
          </div>
        </div>

        {/* Amortization Chart */}
        <div className="border border-border rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-3">Remaining Balance Over Time</p>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={amortizationData}>
              <defs>
                <linearGradient id="balGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(224,56%,42%)" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="hsl(224,56%,42%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,30%,93%)" />
              <XAxis dataKey="month" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => "$" + (v / 1000).toFixed(0) + "k"} />
              <Tooltip formatter={(v) => formatCurrency(v)} />
              <Area type="monotone" dataKey="balance" stroke="hsl(224,56%,42%)" fill="url(#balGrad)" strokeWidth={2} name="Balance" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function SliderField({ label, value, onChange, min, max, step, format, inputPrefix, inputSuffix, onInputChange }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">{label}</Label>
        <div className="flex items-center border border-border rounded-md overflow-hidden">
          {inputPrefix && <span className="px-2 text-sm text-muted-foreground bg-muted">{inputPrefix}</span>}
          <input
            type="number"
            value={value}
            onChange={(e) => onInputChange(e.target.value)}
            className="w-24 px-2 py-1 text-sm text-right focus:outline-none focus:ring-1 focus:ring-primary"
          />
          {inputSuffix && <span className="px-2 text-sm text-muted-foreground bg-muted">{inputSuffix}</span>}
        </div>
      </div>
      <Slider value={[value]} onValueChange={([v]) => onChange(v)} min={min} max={max} step={step} />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}