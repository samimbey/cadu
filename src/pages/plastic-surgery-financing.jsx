import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Star, Shield, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";
import RelatedPages from "@/components/RelatedPages";

const faqs = [
  {
    q: "What is the difference between plastic surgery and cosmetic surgery financing?",
    a: "Plastic surgery financing covers both reconstructive procedures (often partially covered by insurance) and elective cosmetic procedures. Lenders like CareCredit, Alphaeon, and personal loan providers cover both categories.",
  },
  {
    q: "Can I finance reconstructive plastic surgery?",
    a: "Yes. If your procedure is medically necessary (e.g., post-mastectomy reconstruction, burn repair, cleft palate), insurance may cover part of it. Financing can cover remaining out-of-pocket costs.",
  },
  {
    q: "How much can I borrow for plastic surgery?",
    a: "Most lenders offer $1,000–$65,000 depending on your credit profile. Alphaeon Credit and CareCredit are popular for higher-cost procedures like full body contouring or mommy makeovers.",
  },
  {
    q: "Is 0% APR available for plastic surgery?",
    a: "Yes. CareCredit and Alphaeon Credit both offer 0% promotional APR plans for 6–24 months at participating plastic surgery practices.",
  },
  {
    q: "Will applying hurt my credit score?",
    a: "Comparing options on Cadu uses a soft credit check with no impact on your score. A hard inquiry only happens when you formally apply directly with a lender.",
  },
];

const benefits = [
  { icon: DollarSign, title: "Up to $65,000", desc: "High-limit financing for major procedures" },
  { icon: Clock, title: "Instant decisions", desc: "Get approved in minutes" },
  { icon: Shield, title: "Soft check only", desc: "No impact on your credit score" },
  { icon: Star, title: "Top lenders", desc: "CareCredit, Alphaeon, Cherry & more" },
];

export default function PlasticSurgeryFinancing() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Plastic Surgery Financing — Compare Payment Plans | Cadu</title>
        <meta name="description" content="Compare plastic surgery financing from top lenders. Find 0% APR plans and low-rate loans for reconstructive and cosmetic plastic surgery procedures." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/plastic-surgery-financing" />
        <meta property="og:title" content="Plastic Surgery Financing — Compare Payment Plans | Cadu" />
        <meta property="og:description" content="Compare plastic surgery financing from top lenders. Find 0% APR plans and low-rate loans for reconstructive and cosmetic plastic surgery procedures." />
        <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <meta property="og:site_name" content="Cadu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plastic Surgery Financing — Compare Payment Plans | Cadu" />
        <meta name="twitter:description" content="Compare plastic surgery financing. Find 0% APR plans and low-rate loans." />
        <meta name="twitter:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cadu.health" },
            { "@type": "ListItem", "position": 2, "name": "Plastic Surgery Financing", "item": "https://cadu.health/plastic-surgery-financing" }
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
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "Cadu — Plastic Surgery Financing",
          "url": "https://cadu.health/plastic-surgery-financing",
          "description": "Compare plastic surgery financing options. Find low-rate loans and 0% APR plans for reconstructive and cosmetic plastic surgery.",
          "serviceType": "Plastic Surgery Financing",
          "areaServed": "US"
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
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Plastic Surgery Financing</p>
          <h1 className="text-5xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Finance your plastic<br />surgery with confidence
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Compare payment plans and personal loans for plastic and reconstructive surgery. Flexible terms, high approval rates, and 0% APR offers from top lenders.
          </p>
          <Link to={createPageUrl("Onboarding") + "?procedure=cosmetic"}>
            <Button className="px-10 py-6 text-base rounded-lg">
              Find My Financing Options <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.section>

        {/* Benefits */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="py-16 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-10 text-center" style={{ fontFamily: "Georgia, serif" }}>Why compare with Cadu</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-border rounded-xl p-6">
                <Icon className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground mb-1">{title}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
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

        {/* CTA */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="py-16 border-t border-border">
          <div className="bg-secondary rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Ready to get started?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Takes 2 minutes. No impact on your credit score.</p>
            <Link to={createPageUrl("Onboarding") + "?procedure=cosmetic"}>
              <Button className="px-10 py-6 text-base">Get My Plastic Surgery Financing Options</Button>
            </Link>
          </div>
        </motion.section>

        <p className="text-xs text-muted-foreground py-8 border-t border-border">Cadu operates an informational marketplace and is not a lender, creditor, or financial advisor. Cadu does not originate loans or make credit decisions. If you choose to submit information, it may be shared with independent third-party financial service providers who may contact you. Cadu may receive compensation from providers when users click links or obtain financing. All credit decisions are made solely by the applicable provider. Displayed rates and terms are approximate and subject to change. Consent to communications is not required to obtain financing.</p>
        <RelatedPages currentPage="plastic-surgery-financing" />
      </main>
    </div>
  );
}