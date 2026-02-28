import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";

const faqs = [
  {
    q: "What should I do first if I can't pay my medical bill?",
    a: "Contact the hospital or provider's billing department as soon as possible. Many providers have financial assistance programs or can set up a payment plan before sending the account to collections.",
  },
  {
    q: "Can hospitals send unpaid bills to collections?",
    a: "Yes. Unpaid medical bills can be sent to collections and may affect your credit. Addressing the bill early gives you more options.",
  },
  {
    q: "What is hospital financial assistance?",
    a: "Many hospitals offer charity care or financial assistance programs for patients who cannot afford their bills. Eligibility is based on income and other factors.",
  },
  {
    q: "Can I negotiate a medical bill?",
    a: "Yes. Medical bills are often negotiable. You can ask the provider to reduce the balance, set up a payment plan, or apply for financial assistance.",
  },
  {
    q: "Is medical financing an option for existing bills?",
    a: "Yes. Some financing options can be used to pay existing medical bills, not just planned procedures. Terms vary by lender.",
  },
  {
    q: "Does Cadu provide loans?",
    a: "No. Cadu is a comparison platform that helps you explore financing options. We do not issue loans directly.",
  },
];

const steps = [
  {
    step: "1",
    title: "Review the bill for errors",
    desc: "Medical billing errors are common. Request an itemized bill and check for duplicate charges, incorrect codes, or services you did not receive.",
  },
  {
    step: "2",
    title: "Contact the billing department",
    desc: "Call the provider's billing office to discuss your situation. Ask about financial assistance programs, hardship plans, or reduced settlement offers.",
  },
  {
    step: "3",
    title: "Ask about payment plans",
    desc: "Many hospitals and clinics offer payment plans that allow you to pay over time, sometimes with no interest. Ask specifically about interest-free options.",
  },
  {
    step: "4",
    title: "Apply for financial assistance",
    desc: "Hospitals that receive federal funding are required to have charity care programs. Income-based assistance may be available even if you have insurance.",
  },
  {
    step: "5",
    title: "Explore financing options",
    desc: "If the bill is large and a payment plan is not available, medical financing may allow you to spread the cost over a longer period with fixed monthly payments.",
  },
];

export default function CantAffordMedicalBill() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Can't Afford My Medical Bill | Options & Resources | Cadu</title>
        <meta name="description" content="Can't afford your medical bill? Learn your options including payment plans, financial assistance, negotiation, and financing to manage healthcare costs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/cant-afford-medical-bill" />
        <meta property="og:title" content="Can't Afford My Medical Bill | Options & Resources | Cadu" />
        <meta property="og:description" content="Can't afford your medical bill? Learn your options including payment plans, financial assistance, negotiation, and financing to manage healthcare costs." />
        <meta property="og:site_name" content="Cadu" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cadu.health" },
            { "@type": "ListItem", "position": 2, "name": "Can't Afford Medical Bill", "item": "https://cadu.health/cant-afford-medical-bill" }
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
            Can't Afford Your Medical Bill?
          </h1>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Receiving a large medical bill can feel overwhelming. Whether it is from an emergency, a planned procedure, or an unexpected diagnosis, many people struggle to pay medical bills.
          </p>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            There are several options available that can help. Understanding your choices early gives you the best chance of resolving the bill without it becoming a larger financial problem.
          </p>
          <Link to={createPageUrl("Onboarding")}>
            <Button className="px-10 py-6 text-base rounded-lg">
              Explore Financing Options <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.section>

        {/* Alert box */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="py-8 border-t border-border">
          <div className="flex gap-4 p-5 bg-amber-50 border border-amber-200 rounded-xl max-w-3xl">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Act early.</strong> Addressing a medical bill promptly gives you more options. Waiting can lead to the account being sent to collections, which may affect your credit.
            </p>
          </div>
        </motion.section>

        {/* Steps */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>What to Do If You Can't Afford a Medical Bill</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            These steps can help you address a medical bill you cannot afford.
          </p>
          <div className="space-y-4">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-5 border border-border rounded-xl p-6">
                <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {step}
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Financial Assistance */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>Types of Help Available</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Charity Care", desc: "Income-based free or reduced-cost care from hospitals. Available at most nonprofit hospitals." },
              { title: "Payment Plans", desc: "Arrangements to pay the balance over time, often with no interest if set up through the provider." },
              { title: "Bill Negotiation", desc: "Many providers will reduce a bill if you ask. Uninsured patients may qualify for a reduced rate." },
              { title: "Medical Financing", desc: "Lenders that specialize in healthcare costs can provide loans to cover what you owe." },
              { title: "Government Assistance", desc: "Medicaid and other programs may help cover costs depending on your income and state." },
              { title: "Nonprofit Organizations", desc: "Some nonprofits offer grants or assistance for specific medical conditions or procedures." },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-border rounded-xl p-5">
                <p className="font-semibold text-foreground mb-2">{title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* When Financing Helps */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>When Medical Financing Can Help</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">Medical financing may be a good option if:</p>
          <ul className="space-y-2 mb-6 max-w-2xl">
            {[
              "The bill is too large to pay through a provider payment plan",
              "You need a longer repayment term with fixed monthly payments",
              "Financial assistance programs do not cover the full balance",
              "You want to consolidate multiple medical bills into one payment",
              "You want to preserve your cash flow and pay over time",
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            Cadu helps you compare financing options from multiple lenders so you can find a solution that fits your situation.
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
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Compare lenders and payment plans that may help you manage your medical bill.</p>
            <Link to={createPageUrl("Onboarding")}>
              <Button className="px-10 py-6 text-base">Check Available Options</Button>
            </Link>
          </div>
        </motion.section>

        {/* Disclaimer */}
        <div className="py-8 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Cadu is a comparison platform and does not provide loans directly. We may receive compensation from partner lenders when users apply through our site. All financing terms are provided by the lender. This page is for informational purposes only and does not constitute financial, legal, or medical advice.
          </p>
        </div>

      </main>
    </div>
  );
}