import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { DollarSign, Calendar, TrendingDown } from "lucide-react";
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine
} from "recharts";

function formatCurrency(val) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);
}

function calcMonthly(principal, annualRate, months) {
  const r = annualRate / 100 / 12;
  if (r === 0) return principal / months;
  return principal * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

const APR_SCENARIOS = [
  { label: "0%", value: 0, color: "hsl(160,60%,45%)" },
  { label: "6%", value: 6, color: "hsl(200,70%,50%)" },
  { label: "12%", value: 12, color: "hsl(224,56%,42%)" },
  { label: "18%", value: 18, color: "hsl(240,50%,55%)" },
  { label: "27%", value: 27, color: "hsl(25,90%,55%)" },
  { label: "36%", value: 36, color: "hsl(0,75%,55%)" },
];

export default function APRImpactCalc() {
  const [amount, setAmount] = useState(10000);
  const [term, setTerm] = useState(36);
  const [selectedAPR, setSelectedAPR] = useState(12);

  const chartData = useMemo(() => {
    return APR_SCENARIOS.map(({ label, value }) => {
      const monthly = calcMonthly(amount, value, term);
      const total = monthly * term;
      const interest = total - amount;
      return { apr: label, monthly: Math.round(monthly), total: Math.round(total), interest: Math.round(interest) };
    });
  }, [amount, term]);

  const selectedData = useMemo(() => {
    const monthly = calcMonthly(amount, selectedAPR, term);
    const total = monthly * term;
    return { monthly, total, interest: total - amount };
  }, [amount, selectedAPR, term]);

  // Savings vs highest APR
  const highestTotal = calcMonthly(amount, 36, term) * term;
  const savings = highestTotal - selectedData.total;

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-7">
          {/* Loan Amount */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <DollarSign className="w-4 h-4 text-primary" /> Loan Amount
              </Label>
              <span className="text-lg font-semibold text-primary">{formatCurrency(amount)}</span>
            </div>
            <Slider value={[amount]} onValueChange={([v]) => setAmount(v)} min={500} max={50000} step={500} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$500</span><span>$50,000</span>
            </div>
          </div>

          {/* Term */}
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

          {/* Select APR to focus */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Your APR</Label>
            <div className="grid grid-cols-3 gap-2">
              {APR_SCENARIOS.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setSelectedAPR(s.value)}
                  className={`py-2 px-3 rounded-lg border-2 text-sm font-medium transition-all ${
                    selectedAPR === s.value
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary/40 text-foreground"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Select the APR you expect to receive</p>
          </div>

          {/* Spotlight result */}
          <div className="bg-primary rounded-xl p-5 text-primary-foreground space-y-3">
            <p className="text-sm opacity-80">At {selectedAPR}% APR</p>
            <div className="flex justify-between">
              <div>
                <p className="text-xs opacity-60">Monthly</p>
                <p className="text-2xl font-semibold">{formatCurrency(selectedData.monthly)}</p>
              </div>
              <div className="text-right">
                <p className="text-xs opacity-60">Total Interest</p>
                <p className="text-2xl font-semibold">{formatCurrency(selectedData.interest)}</p>
              </div>
            </div>
            {selectedAPR < 36 && savings > 0 && (
              <div className="border-t border-white/20 pt-3 flex items-center gap-2">
                <TrendingDown className="w-4 h-4 opacity-80" />
                <p className="text-sm opacity-90">
                  You save <strong>{formatCurrency(savings)}</strong> vs. 36% APR
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">Total Interest by APR</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220,30%,92%)" />
                <XAxis dataKey="apr" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} axisLine={false} tickLine={false} width={40} />
                <Tooltip formatter={(v, name) => [formatCurrency(v), name === "interest" ? "Interest Paid" : "Monthly"]} />
                <Line type="monotone" dataKey="interest" stroke="hsl(224,56%,42%)" strokeWidth={2.5} dot={{ r: 4, fill: "hsl(224,56%,42%)" }} name="interest" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">Monthly Payment by APR</p>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220,30%,92%)" />
                <XAxis dataKey="apr" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => `$${v}`} axisLine={false} tickLine={false} width={45} />
                <Tooltip formatter={(v) => [formatCurrency(v), "Monthly Payment"]} />
                <Line type="monotone" dataKey="monthly" stroke="hsl(213,60%,55%)" strokeWidth={2.5} dot={{ r: 4, fill: "hsl(213,60%,55%)" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-xs text-muted-foreground font-medium">APR</th>
                  <th className="text-right py-2 text-xs text-muted-foreground font-medium">Monthly</th>
                  <th className="text-right py-2 text-xs text-muted-foreground font-medium">Interest Paid</th>
                </tr>
              </thead>
              <tbody>
                {chartData.map((row) => (
                  <tr
                    key={row.apr}
                    className={`border-b border-border/50 transition-colors ${
                      row.apr === `${selectedAPR}%` ? "bg-secondary font-semibold" : ""
                    }`}
                  >
                    <td className="py-2 text-foreground">{row.apr}</td>
                    <td className="py-2 text-right">{formatCurrency(row.monthly)}</td>
                    <td className="py-2 text-right">{formatCurrency(row.interest)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}