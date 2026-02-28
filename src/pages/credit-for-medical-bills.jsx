import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, DollarSign, Clock, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";
import RelatedPages from "@/components/RelatedPages";

const faqs = [
  {
    q: "What credit options are available for medical bills?",
    a: "The main options are medical credit cards (CareCredit, Alphaeon), personal loans (LendingClub, Prosper), and healthcare-specific installment lenders (Sunbit, AccessOne, Cherry). Each has different rates, terms, and eligibility requirements.",
  },
  {
    q: "Is CareCredit the best credit option for medical bills?",
    a: "CareCredit is one of the most widely accepted medical credit cards, but it's not always the best option. Personal loans often offer lower interest rates for longer repayment periods. Use Cadu to compare all options side by side.",
  },
  {
    q: "Can I use a regular credit card for medical bills?",
    a: "Yes, but regular credit cards typically carry higher APRs (15–30%+) compared to medical-specific financing. Medical credit cards and personal loans often offer better rates and 0% promotional periods.",
  },
  {
    q: "What happens if I can't pay my medical bill?",
    a: "Medical debt can be sent to collections after 180+ days. Before that happens, contact your provider's billing department — most offer hardship plans, charity care, or will accept a reduced lump sum.",
  },
  {
    q: "Does medical debt affect my credit score?",
    a: "As of 2023, medical debt under $500 is no longer included in credit reports by the major bureaus. However, larger unpaid medical debts that are sent to collections can still impact your score.",
  },
];

const options = [
  {
    title: "Medical credit cards",
    pros: ["Widely accepted at providers", "0% APR promotional periods", "Instant approval at point of care"],
    cons: ["Deferred interest can backfire", "High ongoing APR after promo period", "Limited to healthcare purchases"],
  },
  {
    title: "Personal loans",
    pros: ["Fixed interest rates", "Can borrow larger amounts", "Use for any medical expense"],
    cons: ["May require good credit for best rates", "Not specific to healthcare", "Longer application process"],
  },
  {
    title: "Healthcare installment lenders",
    pros: ["High approval rates", "Designed for medical costs", "Soft credit checks common"],
    cons: ["Smaller loan limits", "Not available everywhere", "Rates vary widely"],
  },
];

export default function CreditForMedicalBills() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Credit for Medical Bills — Compare Your Options | Cadu</title>
        <meta name="description" content="Compare credit options for medical bills including medical credit cards, personal loans, and healthcare lenders. Find the best way to pay your medical bills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/credit-for-medical-bills" />
        <meta property="og:title" content="Credit for Medical Bills — Compare Your Options | Cadu" />
        <meta property="og:description" content="Compare credit options for medical bills. Learn about medical credit cards, personal loans, and healthcare lenders to find the best fit for your situation." />
        <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <meta property="og:site_name" content="Cadu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Credit for Medical Bills — Compare Your Options | Cadu" />
        <meta name="twitter:description" content="Compare credit options for medical bills including cards, loans, and healthcare lenders." />
        <meta name="twitter:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cadu.health" },
            { "@type": "ListItem", "position": 2, "name": "Credit for Medical Bills", "item": "https://cadu.health/credit-for-medical-bills" }
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
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-20 text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Credit for Medical Bills</p>
          <h1 className="text-5xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Find the right credit option<br />for your medical bills
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Medical credit cards, personal loans, and healthcare lenders all work differently. Compare your options and find the best fit for your situation.
          </p>
          <Link to={createPageUrl("Onboarding") + "?procedure=general_medical"}>
            <Button className="px-10 py-6 text-base rounded-lg">
              Compare My Options <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.section>

        {/* Options comparison */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="py-16 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-10" style={{ fontFamily: "Georgia, serif" }}>Credit options for medical bills compared</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {options.map(({ title, pros, cons }) => (
              <div key={title} className="border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4 text-lg">{title}</h3>
                <div className="space-y-2 mb-4">
                  {pros.map(pro => (
                    <div key={pro} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{pro}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {cons.map(con => (
                    <div key={con} className="flex items-start gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tips */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="py-16 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-10" style={{ fontFamily: "Georgia, serif" }}>Tips for choosing the right option</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {[
              { icon: DollarSign, title: "Check for 0% APR first", desc: "If you can pay off the balance within the promotional period, a 0% APR medical credit card is often the cheapest option." },
              { icon: Clock, title: "Consider repayment timeline", desc: "For larger bills you need 3+ years to repay, a personal loan with a fixed rate is usually better than a credit card." },
              { icon: Shield, title: "Negotiate before financing", desc: "Always ask your provider for a discount or payment plan before applying for credit — many providers accept less than the full bill." },
              { icon: Star, title: "Compare APR, not just payments", desc: "A lower monthly payment isn't always better. Compare the total interest paid across the life of the loan." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="py-16 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-10" style={{ fontFamily: "Georgia, serif" }}>Frequently asked questions</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border border-border rounded-xl p-6">
                <p className="font-semibold text-foreground mb-2">{q}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Disclaimer */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="py-8 border-t border-border">
          <div className="flex gap-3 p-4 bg-muted rounded-xl text-sm text-muted-foreground">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>Cadu is a comparison marketplace, not a lender or financial advisor. Information provided is for educational purposes. Always review loan terms before committing.</p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="py-16 border-t border-border">
          <div className="bg-secondary rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>See your personalized options</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Takes 2 minutes. No impact on your credit score.</p>
            <Link to={createPageUrl("Onboarding") + "?procedure=general_medical"}>
              <Button className="px-10 py-6 text-base">Compare My Credit Options</Button>
            </Link>
          </div>
        </motion.section>

        <RelatedPages currentPage="credit-for-medical-bills" />
      </main>
    </div>
  );
}