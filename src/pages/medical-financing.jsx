import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";

const faqs = [
  {
    q: "Does medical financing affect my credit?",
    a: "Some financing options require a credit check, while others may not. Requirements depend on the lender.",
  },
  {
    q: "Can I finance surgery or dental work?",
    a: "Yes. Many financing programs are designed specifically for medical and dental procedures.",
  },
  {
    q: "What if I have bad credit?",
    a: "Some lenders offer options for a wide range of credit profiles, but approval is not guaranteed.",
  },
  {
    q: "Is medical financing better than using a credit card?",
    a: "It depends. Financing programs may offer structured payments, but terms vary.",
  },
  {
    q: "Does Cadu provide loans?",
    a: "No. Cadu is a comparison platform that helps you explore financing options. We do not issue loans directly.",
  },
];

const financingTypes = [
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
];

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
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cadu.health" },
            { "@type": "ListItem", "position": 2, "name": "Medical Financing", "item": "https://cadu.health/medical-financing" }
          ]
        })}</script>
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

      <main className="max-w-5xl mx-auto px-6">

        {/* Hero */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-20 max-w-3xl">
          <h1 className="text-5xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Medical Financing Options
          </h1>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Medical financing allows patients to pay for healthcare costs over time instead of paying the full amount upfront. Many people face high deductibles, unexpected bills, or procedures that are not fully covered by insurance. Cadu helps you compare medical financing options so you can choose the best way to pay for the care you need.
          </p>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Whether you are planning a procedure, dealing with a large bill, or looking for flexible payment options, there are several financing solutions available.
          </p>
          <Link to={createPageUrl("Onboarding")}>
            <Button className="px-10 py-6 text-base rounded-lg">
              Check Available Options <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.section>

        {/* What is Medical Financing */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>What is Medical Financing?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">
            Medical financing refers to payment options that allow patients to spread healthcare costs over time. Instead of paying the full amount upfront, financing can help make treatment more affordable through monthly payments.
          </p>
          <p className="text-muted-foreground mb-4 font-medium">Common situations where medical financing is used include:</p>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
            {["Surgery or hospital bills", "Dental procedures", "Fertility treatment", "Cosmetic procedures", "Emergency care", "Out-of-network costs", "High deductible plans"].map(item => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 leading-relaxed max-w-3xl">
            Depending on the situation, patients may use personal loans, credit-based financing, payment plans, or provider financing programs.
          </p>
        </motion.section>

        {/* Types of Financing */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Types of Medical Financing Options</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            There is no single solution for everyone. Different financing options work better for different situations.
          </p>
          <div className="space-y-6">
            {financingTypes.map(({ title, desc, pros, cons }) => (
              <div key={title} className="border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{desc}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Pros</p>
                    <ul className="space-y-1">
                      {pros.map(p => <li key={p} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">+</span>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Cons</p>
                    <ul className="space-y-1">
                      {cons.map(c => <li key={c} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-muted-foreground mt-0.5">−</span>{c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Compare Options Table */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-8" style={{ fontFamily: "Georgia, serif" }}>Compare Medical Financing Options</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">Below are common types of financing patients use to pay for healthcare costs.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Option</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Best For</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Typical Terms</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Apply</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Medical financing lender", "Procedures, surgery, dental", "Monthly payments"],
                  ["Personal loan", "Larger bills", "Fixed payments"],
                  ["Provider payment plan", "Smaller balances", "Short-term"],
                  ["Installment financing", "Planned procedures", "Flexible terms"],
                ].map(([opt, bestFor, terms]) => (
                  <tr key={opt} className="hover:bg-muted/30">
                    <td className="px-4 py-3 text-foreground">{opt}</td>
                    <td className="px-4 py-3 text-muted-foreground">{bestFor}</td>
                    <td className="px-4 py-3 text-muted-foreground">{terms}</td>
                    <td className="px-4 py-3">
                      <Link to={createPageUrl("Onboarding")}>
                        <Button size="sm" variant="outline">Check Options</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* How to Choose */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>How to Choose the Right Financing Option</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">Before choosing a financing option, consider:</p>
          <ul className="space-y-2 mb-6">
            {["Total cost including interest", "Monthly payment amount", "Approval requirements", "Repayment length", "Fees or penalties"].map(item => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            It can help to compare multiple options before applying. Cadu allows you to explore different financing solutions so you can decide what works best for your situation.
          </p>
        </motion.section>

        {/* When It Makes Sense */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.42 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>When Medical Financing Makes Sense</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">Medical financing may be helpful if:</p>
          <ul className="space-y-2 mb-6">
            {[
              "You need treatment now but cannot pay upfront",
              "Insurance does not cover the full cost",
              "You have a high deductible",
              "You want predictable monthly payments",
              "You are facing an unexpected bill",
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Financing can help patients get the care they need without delaying treatment due to cost.
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-10" style={{ fontFamily: "Georgia, serif" }}>Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-border rounded-xl p-6">
                <p className="font-semibold text-foreground mb-2">{q}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="py-16 border-t border-border">
          <div className="bg-secondary rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Explore Financing Options</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Compare lenders and payment plans to find the best option for your situation.</p>
            <Link to={createPageUrl("Onboarding")}>
              <Button className="px-10 py-6 text-base">Check Available Options</Button>
            </Link>
          </div>
        </motion.section>

        {/* Disclaimer */}
        <div className="py-8 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Cadu is a comparison platform and does not provide loans directly. We may receive compensation from partner lenders when users apply through our site. All financing terms are provided by the lender.
          </p>
        </div>

      </main>
    </div>
  );
}