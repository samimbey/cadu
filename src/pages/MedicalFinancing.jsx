import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";
import { useState } from "react";

const faqs = [
  { q: "Does medical financing affect my credit?", a: "Some financing options require a credit check, while others may not. Requirements depend on the lender." },
  { q: "Can I finance surgery or dental work?", a: "Yes. Many financing programs are designed specifically for medical and dental procedures." },
  { q: "What if I have bad credit?", a: "Some lenders offer options for a wide range of credit profiles, but approval is not guaranteed." },
  { q: "Is medical financing better than using a credit card?", a: "It depends. Financing programs may offer structured payments, but terms vary." },
  { q: "Does Cadu provide loans?", a: "No. Cadu is a comparison platform that helps you explore financing options. We do not issue loans directly." },
];

const comparisonOptions = [
  { option: "Medical financing lender", bestFor: "Procedures, surgery, dental", terms: "Monthly payments" },
  { option: "Personal loan", bestFor: "Larger bills", terms: "Fixed payments" },
  { option: "Provider payment plan", bestFor: "Smaller balances", terms: "Short-term" },
  { option: "Installment financing", bestFor: "Planned procedures", terms: "Flexible terms" },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl p-6 cursor-pointer" onClick={() => setOpen(o => !o)}>
      <div className="flex items-center justify-between gap-4">
        <p className="font-semibold text-foreground">{q}</p>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
      </div>
      {open && <p className="text-muted-foreground text-sm leading-relaxed mt-3">{a}</p>}
    </div>
  );
}

export default function MedicalFinancing() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Medical Financing Options | Compare Payment Plans for Healthcare | Cadu</title>
        <meta name="description" content="Compare medical financing options, payment plans, and lenders. Explore ways to pay for healthcare costs without paying the full amount upfront." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/medical-financing" />
        <meta property="og:title" content="Medical Financing Options | Compare Payment Plans for Healthcare | Cadu" />
        <meta property="og:description" content="Compare medical financing options, payment plans, and lenders. Explore ways to pay for healthcare costs without paying the full amount upfront." />
        <meta property="og:site_name" content="Cadu" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": { "@type": "Answer", "text": a }
          }))
        })}</script>
      </Helmet>

      <header className="border-b border-border px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to={createPageUrl("Home")}>
            <span className="text-2xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>cadu</span>
          </Link>
          <NavMenu />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">

        {/* H1 + Intro */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Medical Financing Options
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Medical financing allows patients to pay for healthcare costs over time instead of paying the full amount upfront. Many people face high deductibles, unexpected bills, or procedures that are not fully covered by insurance. Cadu helps you compare medical financing options so you can choose the best way to pay for the care you need.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Whether you are planning a procedure, dealing with a large bill, or looking for flexible payment options, there are several financing solutions available.
          </p>
          <Link to={createPageUrl("Onboarding")}>
            <Button className="px-8 py-5 text-base">
              Check Available Options <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* What is Medical Financing */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>What is Medical Financing?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Medical financing refers to payment options that allow patients to spread healthcare costs over time. Instead of paying the full amount upfront, financing can help make treatment more affordable through monthly payments.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">Common situations where medical financing is used include:</p>
          <ul className="space-y-2 mb-4">
            {["Surgery or hospital bills", "Dental procedures", "Fertility treatment", "Cosmetic procedures", "Emergency care", "Out-of-network costs", "High deductible plans"].map(item => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Depending on the situation, patients may use personal loans, credit-based financing, payment plans, or provider financing programs.
          </p>
        </motion.section>

        {/* Types of Medical Financing */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Types of Medical Financing Options</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">There is no single solution for everyone. Different financing options work better for different situations.</p>

          {[
            {
              title: "Payment Plans Through the Provider",
              desc: "Many hospitals, dental offices, and clinics offer payment plans directly.",
              pros: ["May have low or no interest", "No third-party lender required"],
              cons: ["Not always available", "May require upfront payment", "Short repayment periods"],
            },
            {
              title: "Medical Credit Programs",
              desc: "Some lenders specialize in financing healthcare expenses.",
              pros: ["Designed for medical costs", "Fast approval in many cases", "Flexible payment terms"],
              cons: ["Interest rates vary", "Approval depends on credit"],
            },
            {
              title: "Personal Loans for Medical Expenses",
              desc: "Some patients use personal loans to pay for treatment.",
              pros: ["Fixed monthly payments", "Can cover large amounts", "Often longer repayment terms"],
              cons: ["Credit check required", "Interest rates vary"],
            },
            {
              title: "Buy Now, Pay Later / Installment Financing",
              desc: "Some financing providers offer installment plans with fixed payments.",
              pros: ["Predictable monthly cost", "Quick application process", "Often no collateral required"],
              cons: ["Not available for all procedures", "May have fees or interest"],
            },
          ].map(({ title, desc, pros, cons }) => (
            <div key={title} className="mb-8 border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{desc}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Pros</p>
                  <ul className="space-y-1">
                    {pros.map(p => <li key={p} className="text-sm text-muted-foreground flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />{p}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Cons</p>
                  <ul className="space-y-1">
                    {cons.map(c => <li key={c} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>{c}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </motion.section>

        {/* Comparison Table */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Compare Medical Financing Options</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Below are common types of financing patients use to pay for healthcare costs.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left px-4 py-3 text-foreground font-semibold">Option</th>
                  <th className="text-left px-4 py-3 text-foreground font-semibold">Best For</th>
                  <th className="text-left px-4 py-3 text-foreground font-semibold">Typical Terms</th>
                  <th className="text-left px-4 py-3 text-foreground font-semibold">Apply</th>
                </tr>
              </thead>
              <tbody>
                {comparisonOptions.map((row, i) => (
                  <tr key={row.option} className={i % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                    <td className="px-4 py-3 text-foreground">{row.option}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.bestFor}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.terms}</td>
                    <td className="px-4 py-3">
                      <Link to={createPageUrl("Onboarding")} className="text-primary hover:underline font-medium">Check Options</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* How to Choose */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>How to Choose the Right Financing Option</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Before choosing a financing option, consider:</p>
          <ul className="space-y-2 mb-6">
            {["Total cost including interest", "Monthly payment amount", "Approval requirements", "Repayment length", "Fees or penalties"].map(item => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-2">It can help to compare multiple options before applying.</p>
          <p className="text-muted-foreground leading-relaxed">Cadu allows you to explore different financing solutions so you can decide what works best for your situation.</p>
        </motion.section>

        {/* When it makes sense */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>When Medical Financing Makes Sense</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Medical financing may be helpful if:</p>
          <ul className="space-y-2 mb-6">
            {["You need treatment now but cannot pay upfront", "Insurance does not cover the full cost", "You have a high deductible", "You want predictable monthly payments", "You are facing an unexpected bill"].map(item => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">Financing can help patients get the care they need without delaying treatment due to cost.</p>
        </motion.section>

        {/* FAQ */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-8" style={{ fontFamily: "Georgia, serif" }}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(faq => <FAQ key={faq.q} {...faq} />)}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-16 pt-12 border-t border-border">
          <div className="bg-secondary rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-normal text-foreground mb-3" style={{ fontFamily: "Georgia, serif" }}>Explore Financing Options</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Compare lenders and payment plans to find the best option for your situation.</p>
            <Link to={createPageUrl("Onboarding")}>
              <Button className="px-10 py-5 text-base">Check Available Options <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </motion.section>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground mt-12 pb-8 leading-relaxed">
          Cadu is a comparison platform and does not provide loans directly. We may receive compensation from partner lenders when users apply through our site. All financing terms are provided by the lender.
        </p>

      </main>
    </div>
  );
}