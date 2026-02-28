import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";

const faqs = [
  {
    q: "Why would someone look for a CareCredit alternative?",
    a: "CareCredit has deferred interest, which can result in a large retroactive charge if the balance is not paid in full by the end of the promotional period. Some people prefer financing with straightforward terms.",
  },
  {
    q: "Are there alternatives that don't require a credit check?",
    a: "Some providers offer financing without a hard credit pull. Requirements vary by lender.",
  },
  {
    q: "Can I use alternatives for the same procedures as CareCredit?",
    a: "Yes. Most alternatives cover similar procedures including dental, vision, cosmetic, and general medical care.",
  },
  {
    q: "Does Cadu offer CareCredit?",
    a: "Cadu is a comparison platform. We help you compare financing options including alternatives to CareCredit so you can choose what works best.",
  },
  {
    q: "Does Cadu provide loans?",
    a: "No. Cadu is a comparison platform that helps you explore financing options. We do not issue loans directly.",
  },
];

const alternatives = [
  {
    name: "Cherry",
    desc: "Installment financing with true 0% APR options — no deferred interest.",
    pros: ["True 0% APR plans", "No deferred interest", "Fast approval"],
    cons: ["Not accepted at all providers"],
  },
  {
    name: "Sunbit",
    desc: "High approval rates with a transparent installment structure.",
    pros: ["~90% approval rate", "No deferred interest", "Available at many providers"],
    cons: ["Not available everywhere"],
  },
  {
    name: "LendingClub Patient Solutions",
    desc: "Personal loans and medical financing with fixed repayment terms.",
    pros: ["Fixed monthly payments", "Longer repayment terms", "No deferred interest"],
    cons: ["Credit check required"],
  },
  {
    name: "Personal Loans",
    desc: "A standard personal loan can fund medical expenses with predictable terms.",
    pros: ["Fixed payments", "No provider restrictions", "Wide availability"],
    cons: ["Requires credit check", "May take longer to fund"],
  },
];

export default function CarecreditAlternatives() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>CareCredit Alternatives | Compare Medical Financing Options | Cadu</title>
        <meta name="description" content="Looking for CareCredit alternatives? Compare medical financing options with no deferred interest, flexible terms, and fast approval. Find the best option for your situation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/carecredit-alternatives" />
        <meta property="og:title" content="CareCredit Alternatives | Compare Medical Financing Options | Cadu" />
        <meta property="og:description" content="Looking for CareCredit alternatives? Compare medical financing options with no deferred interest, flexible terms, and fast approval." />
        <meta property="og:site_name" content="Cadu" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cadu.health" },
            { "@type": "ListItem", "position": 2, "name": "CareCredit Alternatives", "item": "https://cadu.health/carecredit-alternatives" }
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
            CareCredit Alternatives
          </h1>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            CareCredit is one of the most well-known medical credit programs, but it is not the only option. Many patients are looking for alternatives that offer clearer terms, no deferred interest, or better rates for their situation.
          </p>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Cadu helps you compare CareCredit alternatives so you can find the financing option that fits your needs.
          </p>
          <Link to={createPageUrl("Onboarding")}>
            <Button className="px-10 py-6 text-base rounded-lg">
              Compare Options <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.section>

        {/* Why Look for Alternatives */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>Why Consider CareCredit Alternatives?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">
            CareCredit can be a useful tool, but there are a few aspects that lead people to look for other options:
          </p>
          <div className="space-y-4 max-w-2xl mb-6">
            {[
              { label: "Deferred interest", desc: "If you don't pay off the balance in full before the promotional period ends, interest is charged retroactively on the original amount." },
              { label: "Credit card structure", desc: "CareCredit is a revolving credit card, which may not suit those looking for a fixed repayment schedule." },
              { label: "Provider acceptance", desc: "CareCredit is not accepted everywhere, so availability varies by location." },
            ].map(({ label, desc }) => (
              <div key={label} className="flex gap-4 p-4 border border-border rounded-xl">
                <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">{label}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Alternatives */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Top CareCredit Alternatives</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            Below are financing options that patients commonly consider as alternatives to CareCredit.
          </p>
          <div className="space-y-6">
            {alternatives.map(({ name, desc, pros, cons }) => (
              <div key={name} className="border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
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

        {/* How to Choose */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>How to Choose the Right Option</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">When comparing financing options, consider:</p>
          <ul className="space-y-2 mb-6">
            {[
              "Whether the option has deferred interest or true 0% APR",
              "Total cost of borrowing including fees",
              "Monthly payment amounts and repayment length",
              "Approval requirements and credit impact",
              "Whether it is accepted at your provider",
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Cadu allows you to compare multiple options side by side so you can make an informed choice.
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
            <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Explore Your Options</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Compare CareCredit alternatives and find the best financing plan for your healthcare needs.</p>
            <Link to={createPageUrl("Onboarding")}>
              <Button className="px-10 py-6 text-base">Check Available Options</Button>
            </Link>
          </div>
        </motion.section>

        {/* Disclaimer */}
        <div className="py-8 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Cadu is a comparison platform and does not provide loans directly. We may receive compensation from partner lenders when users apply through our site. All financing terms are provided by the lender. CareCredit is a registered trademark of Synchrony Bank. Cadu is not affiliated with CareCredit or Synchrony Bank.
          </p>
        </div>

      </main>
    </div>
  );
}