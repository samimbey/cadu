import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, LineChart, Line } from "recharts";
import { motion } from "framer-motion";
import { Plus, Trash2, TrendingUp } from "lucide-react";

const PALETTE = [
  "hsl(224,56%,42%)",
  "hsl(213,60%,55%)",
  "hsl(0,72%,55%)",
  "hsl(35,90%,52%)",
  "hsl(160,60%,40%)",
];

function formatCurrency(n) {
  return "$" + Math.round(n).toLocaleString();
}

function calcMonthly(amount, rate, term) {
  if (rate === 0) return amount / term;
  const r = rate / 100 / 12;
  return (amount * r * Math.pow(1 + r, term)) / (Math.pow(1 + r, term) - 1);
}

export default function APRImpactCalc() {
  const [amount, setAmount] = useState(10000);
  const [term, setTerm] = useState(36);
  const [aprs, setAprs] = useState([0, 9.99, 19.99, 26.99]);

  const addAPR = () => {
    if (aprs.length < 5) setAprs([...aprs, 15]);
  };

  const updateAPR = (index, value) => {
    const next = [...aprs];
    next[index] = value;
    setAprs(next);
  };

  const removeAPR = (index) => {
    if (aprs.length > 2) setAprs(aprs.filter((_, i) => i !== index));
  };

  const rows = useMemo(() => {
    return aprs.map((apr, i) => {
      const monthly = calcMonthly(amount, apr, term);
      const total = monthly * term;
      const interest = total - amount;
      return {
        apr,
        monthly,
        total,
        interest,
        name: apr === 0 ? "0% Promo" : `${apr}% APR`,
        color: PALETTE[i % PALETTE.length],
      };
    }).sort((a, b) => a.apr - b.apr);
  }, [amount, term, aprs]);

  const barData = rows.map(r => ({
    name: r.name,
    Principal: Math.round(amount),
    Interest: Math.round(r.interest),
  }));

  const lineData = useMemo(() => {
    const points = [];
    for (let mo = 6; mo <= term; mo += Math.max(1, Math.floor(term / 8))) {
      const point = { month: `Mo ${mo}` };
      rows.forEach(r => {
        point[r.name] = Math.round(calcMonthly(amount, r.apr, mo) * mo);
      });
      points.push(point);
    }
    return points;
  }, [rows, amount, term]);

  const cheapest = rows[0];
  const mostExpensive = rows[rows.length - 1];
  const savings = mostExpensive.interest - cheapest.interest;

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-border rounded-xl p-6">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-lg font-medium text-foreground">Base Loan Settings</h2>
          <SliderField
            label="Loan Amount"
            value={amount}
            onChange={setAmount}
            min={500} max={100000} step={500}
            format={(v) => "$" + (v / 1000).toFixed(0) + "k"}
            display={"$" + amount.toLocaleString()}
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

        {/* APR List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-foreground">Compare APRs</h2>
            {aprs.length < 5 && (
              <Button variant="outline" size="sm" onClick={addAPR}>
                <Plus className="w-3.5 h-3.5 mr-1" />
                Add
              </Button>
            )}
          </div>
          <div className="space-y-2">
            {aprs.map((apr, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: PALETTE[i % PALETTE.length] }}
                />
                <input
                  type="number"
                  min={0} max={40} step={0.1}
                  value={apr}
                  onChange={(e) => updateAPR(i, parseFloat(e.target.value) || 0)}
                  className="flex-1 border border-border rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">%</span>
                <button onClick={() => removeAPR(i)} className="text-muted-foreground hover:text-destructive transition-colors" disabled={aprs.length <= 2}>
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">Enter any APR to compare (0% = promo offer)</p>
        </div>
      </div>

      {/* Savings Callout */}
      {savings > 0 && (
        <motion.div
          key={savings}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary text-primary-foreground rounded-xl p-5 flex items-center gap-4"
        >
          <TrendingUp className="w-8 h-8 flex-shrink-0 text-primary-foreground/70" />
          <div>
            <p className="font-semibold text-lg">You could save {formatCurrency(savings)}</p>
            <p className="text-sm text-primary-foreground/70">
              By choosing {cheapest.name} over {mostExpensive.name} on a {formatCurrency(amount)} loan over {term} months.
            </p>
          </div>
        </motion.div>
      )}

      {/* Comparison Table */}
      <div className="bg-white border border-border rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="font-medium text-foreground">Side-by-Side Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/40">
              <tr>
                <th className="text-left px-4 py-3 text-muted-foreground font-medium">APR</th>
                <th className="text-right px-4 py-3 text-muted-foreground font-medium">Monthly</th>
                <th className="text-right px-4 py-3 text-muted-foreground font-medium">Total Paid</th>
                <th className="text-right px-4 py-3 text-muted-foreground font-medium">Total Interest</th>
                <th className="text-right px-4 py-3 text-muted-foreground font-medium">vs. Lowest</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.apr}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`border-t border-border ${i === 0 ? "bg-emerald-50/50" : ""}`}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: row.color }} />
                      <span className="font-medium">{row.name}</span>
                      {i === 0 && <Badge className="bg-emerald-100 text-emerald-700 text-xs border-emerald-200">Best</Badge>}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold">{formatCurrency(row.monthly)}</td>
                  <td className="px-4 py-3 text-right">{formatCurrency(row.total)}</td>
                  <td className="px-4 py-3 text-right text-muted-foreground">{formatCurrency(row.interest)}</td>
                  <td className="px-4 py-3 text-right">
                    {i === 0 ? (
                      <span className="text-emerald-600 font-medium">—</span>
                    ) : (
                      <span className="text-destructive font-medium">+{formatCurrency(row.interest - cheapest.interest)}</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-border rounded-xl p-5">
          <p className="text-sm font-medium text-foreground mb-4">Principal vs. Interest by APR</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData} barSize={32}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,30%,93%)" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => "$" + (v / 1000).toFixed(0) + "k"} />
              <Tooltip formatter={(v) => formatCurrency(v)} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="Principal" stackId="a" fill="hsl(224,56%,42%)" radius={[0, 0, 4, 4]} />
              <Bar dataKey="Interest" stackId="a" fill="hsl(0,72%,70%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border border-border rounded-xl p-5">
          <p className="text-sm font-medium text-foreground mb-4">Total Cost by Term Length</p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,30%,93%)" />
              <XAxis dataKey="month" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => "$" + (v / 1000).toFixed(0) + "k"} />
              <Tooltip formatter={(v) => formatCurrency(v)} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              {rows.map((row, i) => (
                <Line key={row.name} type="monotone" dataKey={row.name} stroke={row.color} strokeWidth={2} dot={false} />
              ))}
            </LineChart>
          </ResponsiveContainer>
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