import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Clock, CreditCard, DollarSign } from "lucide-react";
import NavMenu from "@/components/marketplace/NavMenu";
import RelatedPages from "@/components/RelatedPages";

const faqs = [
  {
    q: "Can I finance general surgery costs?",
    a: "Yes. Many lenders on Cadu offer personal loans and medical payment plans specifically designed to cover surgical procedures, including pre-op testing, anesthesia, and post-op care.",
  },
  {
    q: "What surgeries are typically covered?",
    a: "Common covered procedures include hernia repair, gallbladder removal, appendectomy, joint replacement, spine surgery, and many other elective or semi-elective surgeries.",
  },
  {
    q: "How much can I borrow for surgery financing?",
    a: "Depending on your credit profile, you can typically borrow between $1,000 and $50,000 — enough to cover most outpatient and inpatient surgical procedures.",
  },
  {
    q: "Do I need good credit to qualify?",
    a: "Not necessarily. Some lenders on Cadu approve applicants with fair or even poor credit, and several use a soft credit check that won't affect your score.",
  },
  {
    q: "How quickly can I get funded?",
    a: "Many lenders offer instant decisions with funding in 1–3 business days, so you can move forward with scheduling your surgery quickly.",
  },
];

const benefits = [
  { icon: DollarSign, title: "Up to $50,000", description: "Borrow enough to cover surgery, anesthesia, and recovery costs" },
  { icon: Clock, title: "Fast approval", description: "Get a decision in minutes and funds within days" },
  { icon: CreditCard, title: "Soft credit check", description: "Check your options without impacting your credit score" },
  { icon: CheckCircle, title: "Fixed monthly payments", description: "Predictable payments with no surprise rate changes" },
];

export default function GeneralSurgeryFinancing() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>General Surgery Financing — Compare Payment Plans | Cadu</title>
        <meta name="description" content="Compare financing options for general surgery. Find low-rate medical loans and payment plans for hernia repair, joint replacement, spine surgery, and more." />
        <meta name="keywords" content="general surgery financing, surgery payment plans, medical loans for surgery, hernia repair financing, joint replacement financing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/general-surgery-financing" />
        <meta property="og:title" content="General Surgery Financing — Compare Payment Plans | Cadu" />
        <meta property="og:description" content="Compare financing options for general surgery. Find low-rate medical loans and payment plans for hernia repair, joint replacement, spine surgery, and more." />
        <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <meta property="og:site_name" content="Cadu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="General Surgery Financing — Compare Payment Plans | Cadu" />
        <meta name="twitter:description" content="Compare financing for general surgery. Find low-rate medical loans for hernia repair, joint replacement, spine surgery, and more." />
        <meta name="twitter:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cadu.health" },
            { "@type": "ListItem", "position": 2, "name": "General Surgery Financing", "item": "https://cadu.health/general-surgery-financing" }
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
          "name": "Cadu — General Surgery Financing",
          "url": "https://cadu.health/general-surgery-financing",
          "description": "Compare financing options for general surgery. Find low-rate medical loans and payment plans for hernia repair, joint replacement, spine surgery, and more.",
          "serviceType": "General Surgery Financing",
          "areaServed": "US"
        })}</script>
      </Helmet>

      <header className="sticky top-0 z-10 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="text-2xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>
            cadu
          </Link>
          <NavMenu />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>
            General Surgery Financing
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let cost delay necessary surgery. Compare medical loans and payment plans from top lenders — and get covered quickly.
          </p>
          <Link to={createPageUrl("Onboarding")}>
            <Button size="lg" className="px-10 py-6 text-base">Find My Options</Button>
          </Link>
        </motion.div>

        {/* Benefits */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid sm:grid-cols-2 gap-6 mb-16">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4 p-5 rounded-xl border border-border bg-card">
              <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">{title}</p>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Covered Procedures */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-16">
          <h2 className="text-2xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>Commonly Financed Surgeries</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Hernia repair", "Gallbladder removal", "Appendectomy",
              "Joint replacement (hip/knee)", "Spine & back surgery", "Rotator cuff repair",
              "Weight loss (bariatric) surgery", "Thyroid & parathyroid surgery",
              "Colon & colorectal surgery", "Carpal tunnel release",
            ].map((proc) => (
              <div key={proc} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {proc}
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-16">
          <h2 className="text-2xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-border pb-6">
                <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-center bg-secondary rounded-2xl p-10">
          <h2 className="text-2xl font-normal text-foreground mb-3" style={{ fontFamily: "Georgia, serif" }}>Ready to compare your options?</h2>
          <p className="text-muted-foreground mb-6">Answer a few quick questions and see personalized surgery financing offers.</p>
          <Link to={createPageUrl("Onboarding")}>
            <Button size="lg" className="px-10">Get Started — It's Free</Button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}