import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { DollarSign, Percent, Calendar, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from "recharts";

function formatCurrency(val) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);
}

export default function AffordabilityCalc() {
  const [income, setIncome] = useState(60000);
  const [maxPayment, setMaxPayment] = useState(300);
  const [rate, setRate] = useState(12);
  const [term, setTerm] = useState(36);

  const results = useMemo(() => {
    const r = rate / 100 / 12;
    const n = term;
    let maxLoan;
    if (r === 0) {
      maxLoan = maxPayment * n;
    } else {
      maxLoan = maxPayment * (1 - Math.pow(1 + r, -n)) / r;
    }

    const monthlyIncome = income / 12;
    const debtToIncomeRatio = (maxPayment / monthlyIncome) * 100;

    const scenarios = [6, 12, 24, 36, 48, 60].map((months) => {
      let loan;
      if (r === 0) {
        loan = maxPayment * months;
      } else {
        loan = maxPayment * (1 - Math.pow(1 + r, -months)) / r;
      }
      return { term: `${months}mo`, amount: Math.round(loan) };
    });

    return { maxLoan, debtToIncomeRatio, scenarios, monthlyIncome };
  }, [income, maxPayment, rate, term]);

  const dtiColor =
    results.debtToIncomeRatio <= 20 ? "text-emerald-600" :
    results.debtToIncomeRatio <= 36 ? "text-amber-500" : "text-red-500";

  const dtiLabel =
    results.debtToIncomeRatio <= 20 ? "Excellent" :
    results.debtToIncomeRatio <= 36 ? "Manageable" : "High — reconsider";

  const DtiIcon = results.debtToIncomeRatio <= 36 ? CheckCircle : AlertCircle;

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-7">
          {/* Annual Income */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <DollarSign className="w-4 h-4 text-primary" /> Annual Income
              </Label>
              <span className="text-lg font-semibold text-primary">{formatCurrency(income)}</span>
            </div>
            <Slider value={[income]} onValueChange={([v]) => setIncome(v)} min={20000} max={250000} step={1000} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$20k</span><span>$250k</span>
            </div>
          </div>

          {/* Max Monthly Payment */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <TrendingUp className="w-4 h-4 text-primary" /> Max Monthly Payment
              </Label>
              <span className="text-lg font-semibold text-primary">{formatCurrency(maxPayment)}</span>
            </div>
            <Slider value={[maxPayment]} onValueChange={([v]) => setMaxPayment(v)} min={50} max={2000} step={25} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$50</span><span>$2,000</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Percent className="w-4 h-4 text-primary" /> Estimated APR
              </Label>
              <span className="text-lg font-semibold text-primary">{rate}%</span>
            </div>
            <Slider value={[rate]} onValueChange={([v]) => setRate(v)} min={0} max={36} step={0.5} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0%</span><span>36%</span>
            </div>
          </div>

          {/* Term */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Calendar className="w-4 h-4 text-primary" /> Desired Term
              </Label>
              <span className="text-lg font-semibold text-primary">{term} months</span>
            </div>
            <Slider value={[term]} onValueChange={([v]) => setTerm(v)} min={6} max={60} step={6} />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>6 mo</span><span>60 mo</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-primary rounded-xl p-6 text-primary-foreground text-center">
            <p className="text-sm opacity-80 mb-1">You can afford to borrow up to</p>
            <p className="text-5xl font-light" style={{ fontFamily: "Georgia, serif" }}>
              {formatCurrency(results.maxLoan)}
            </p>
            <p className="text-xs opacity-60 mt-1">at {rate}% APR over {term} months</p>
          </div>

          <div className={`flex items-center gap-3 p-4 rounded-xl border ${
            results.debtToIncomeRatio <= 20 ? "bg-emerald-50 border-emerald-200" :
            results.debtToIncomeRatio <= 36 ? "bg-amber-50 border-amber-200" :
            "bg-red-50 border-red-200"
          }`}>
            <DtiIcon className={`w-5 h-5 flex-shrink-0 ${dtiColor}`} />
            <div>
              <p className="text-sm font-medium text-foreground">
                Debt-to-income: <span className={dtiColor}>{results.debtToIncomeRatio.toFixed(1)}% — {dtiLabel}</span>
              </p>
              <p className="text-xs text-muted-foreground">Lenders typically prefer below 36%</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">Borrowing power by term</p>
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={results.scenarios} barSize={28}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(220,30%,92%)" />
                <XAxis dataKey="term" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip formatter={(v) => formatCurrency(v)} cursor={{ fill: "hsl(220,30%,96%)" }} />
                <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                  {results.scenarios.map((_, i) => (
                    <Cell
                      key={i}
                      fill={results.scenarios[i].term === `${term}mo`
                        ? "hsl(224,56%,42%)"
                        : "hsl(213,60%,72%)"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}