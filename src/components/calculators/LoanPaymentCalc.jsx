import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { DollarSign, Percent, Calendar } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

function formatCurrency(val) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);
}

export default function LoanPaymentCalc() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(12);
  const [term, setTerm] = useState(36);

  const results = useMemo(() => {
    const r = rate / 100 / 12;
    const n = term;
    if (r === 0) return { monthly: amount / n, total: amount, interest: 0 };
    const monthly = amount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    const interest = total - amount;
    return { monthly, total, interest };
  }, [amount, rate, term]);

  const pieData = [
    { name: "Principal", value: amount },
    { name: "Interest", value: Math.round(results.interest) },
  ];

  const COLORS = ["hsl(224,56%,42%)", "hsl(213,60%,72%)"];

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="space-y-7">
          {/* Loan Amount */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <DollarSign className="w-4 h-4 text-primary" /> Loan Amount
              </Label>
              <span className="text-lg font-semibold text-primary">{formatCurrency(amount)}</span>
            </div>
            <Slider value={[amount]} onValueChange={([v]) => setAmount(v)} min={500} max={75000} step={500} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$500</span><span>$75,000</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Percent className="w-4 h-4 text-primary" /> Interest Rate (APR)
              </Label>
              <span className="text-lg font-semibold text-primary">{rate}%</span>
            </div>
            <Slider value={[rate]} onValueChange={([v]) => setRate(v)} min={0} max={36} step={0.5} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span><span>36%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Calendar className="w-4 h-4 text-primary" /> Loan Term
              </Label>
              <span className="text-lg font-semibold text-primary">{term} months</span>
            </div>
            <Slider value={[term]} onValueChange={([v]) => setTerm(v)} min={6} max={84} step={6} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>6 mo</span><span>84 mo</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-4">
          <div className="bg-primary rounded-xl p-6 text-primary-foreground text-center">
            <p className="text-sm opacity-80 mb-1">Estimated Monthly Payment</p>
            <p className="text-5xl font-light" style={{ fontFamily: "Georgia, serif" }}>
              {formatCurrency(results.monthly)}
            </p>
            <p className="text-xs opacity-60 mt-1">per month for {term} months</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary rounded-xl p-4 text-center border border-border">
              <p className="text-xs text-muted-foreground mb-1">Total Repaid</p>
              <p className="text-xl font-semibold text-foreground">{formatCurrency(results.total)}</p>
            </div>
            <div className="bg-secondary rounded-xl p-4 text-center border border-border">
              <p className="text-xs text-muted-foreground mb-1">Total Interest</p>
              <p className="text-xl font-semibold text-foreground">{formatCurrency(results.interest)}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <ResponsiveContainer width="100%" height={140}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} dataKey="value" paddingAngle={2}>
                  {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                </Pie>
                <Tooltip formatter={(v) => formatCurrency(v)} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 text-sm flex-shrink-0">
              {pieData.map((d, i) => (
                <div key={d.name} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: COLORS[i] }} />
                  <span className="text-muted-foreground">{d.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}