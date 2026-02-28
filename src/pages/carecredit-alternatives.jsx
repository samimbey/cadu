import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";
import RelatedPages from "@/components/RelatedPages";
import { useState } from "react";

const faqs = [
  { q: "Why would someone look for a CareCredit alternative?", a: "CareCredit may not be available at all providers, may have high deferred interest rates, or may not offer the best terms for a given credit profile. Alternatives may offer better rates or more flexible terms." },
  { q: "Are there medical financing options with no credit check?", a: "Some providers offer options with minimal credit requirements or soft checks only. Approval and terms still vary by lender." },
  { q: "Can I use a personal loan instead of CareCredit?", a: "Yes. Personal loans can be used for healthcare expenses and often offer fixed rates and longer repayment terms." },
  { q: "What is deferred interest and should I avoid it?", a: "Deferred interest means interest accrues during a promotional period and is added to your balance if not fully paid off. It can result in a large unexpected charge. Some alternatives avoid deferred interest entirely." },
  { q: "Does Cadu provide loans?", a: "No. Cadu is a comparison platform. We help you explore options but do not issue financing directly." },
];

const alternatives = [
  { name: "Medical financing lenders", desc: "Lenders that specialize in healthcare expenses, often with flexible approval criteria.", bestFor: "Procedures, dental, surgery" },
  { name: "Personal loans", desc: "Fixed-rate loans from banks or online lenders, usable for any medical expense.", bestFor: "Larger balances, predictable payments" },
  { name: "Installment financing programs", desc: "Buy-now-pay-later style plans with fixed monthly payments.", bestFor: "Planned procedures" },
  { name: "Provider payment plans", desc: "In-house plans offered directly by hospitals, clinics, or dental offices.", bestFor: "Smaller balances" },
  { name: "FSA / HSA funds", desc: "Tax-advantaged accounts for healthcare costs, if available through your employer.", bestFor: "Eligible medical expenses" },
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

export default function CarecreditAlternatives() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>CareCredit Alternatives | Compare Medical Financing Options | Cadu</title>
        <meta name="description" content="Looking for CareCredit alternatives? Compare medical financing options, payment plans, and lenders that may offer better rates or terms for your situation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/carecredit-alternatives" />
        <meta property="og:title" content="CareCredit Alternatives | Compare Medical Financing Options | Cadu" />
        <meta property="og:description" content="Looking for CareCredit alternatives? Compare medical financing options, payment plans, and lenders that may offer better rates or terms for your situation." />
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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            CareCredit Alternatives
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            CareCredit is one of the most recognized names in healthcare financing, but it is not the only option. Depending on your credit profile, the procedure you need, or the provider you are working with, other financing solutions may offer more flexibility, lower rates, or broader availability.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Cadu helps you compare CareCredit alternatives so you can make an informed decision about how to pay for your healthcare costs.
          </p>
          <Link to={createPageUrl("Onboarding")}>
            <Button className="px-8 py-5 text-base">
              Compare Options <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Why Consider a CareCredit Alternative?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            CareCredit works well for many people, but there are common reasons patients look for alternatives:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Your provider does not accept CareCredit",
              "You were not approved or received a low credit limit",
              "You want to avoid deferred interest charges",
              "You need a larger loan amount than CareCredit offers",
              "You prefer a personal loan with fixed monthly payments",
              "You are looking for a longer repayment period",
              "You want to compare multiple options before applying",
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>Common CareCredit Alternatives</h2>
          <div className="space-y-4">
            {alternatives.map(({ name, desc, bestFor }) => (
              <div key={name} className="border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-1">{name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{desc}</p>
                <p className="text-xs text-primary font-medium">Best for: {bestFor}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>How to Compare Your Options</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">When evaluating any financing option, consider the following:</p>
          <ul className="space-y-2 mb-6">
            {[
              "APR — look for true interest rates, not just promotional periods",
              "Deferred vs. simple interest — deferred interest can result in unexpected charges",
              "Loan limits — make sure the financing covers your full procedure cost",
              "Approval requirements — some options have more flexible criteria",
              "Repayment terms — longer terms mean lower payments but more interest over time",
              "Provider acceptance — confirm the financing works with your provider",
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">Cadu lets you compare multiple options side by side so you can see what is available before you apply.</p>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-8" style={{ fontFamily: "Georgia, serif" }}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(faq => <FAQ key={faq.q} {...faq} />)}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-16 pt-12 border-t border-border">
          <div className="bg-secondary rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-normal text-foreground mb-3" style={{ fontFamily: "Georgia, serif" }}>Compare CareCredit Alternatives</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Explore lenders and payment plans that may be a better fit for your situation.</p>
            <Link to={createPageUrl("Onboarding")}>
              <Button className="px-10 py-5 text-base">Check Available Options <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </motion.section>

        <p className="text-xs text-muted-foreground mt-12 pb-8 leading-relaxed">
          Cadu is a comparison platform and does not provide loans directly. We may receive compensation from partner lenders when users apply through our site. All financing terms are provided by the lender. CareCredit is a registered trademark of Synchrony Bank. Cadu is not affiliated with CareCredit or Synchrony Bank.
        </p>

        <RelatedPages currentPage="carecredit-alternatives" />
      </main>
    </div>
  );
}