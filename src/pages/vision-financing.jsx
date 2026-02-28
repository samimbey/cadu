import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Star, Shield, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";

const faqs = [
  {
    q: "Can I finance LASIK with bad credit?",
    a: "Yes. CareCredit, Sunbit, and Scratchpay all offer options for applicants with fair or poor credit. Rates may be higher, but approval is accessible.",
  },
  {
    q: "What vision procedures can be financed?",
    a: "LASIK, PRK, cataract surgery, glasses, contacts, eye exams, and other corrective procedures are all eligible at participating providers.",
  },
  {
    q: "Is 0% APR available for vision financing?",
    a: "Yes. CareCredit and Cherry offer 0% promotional APR for 6–24 months at many vision care providers and LASIK centers.",
  },
  {
    q: "How do I find a provider that accepts these plans?",
    a: "CareCredit has the largest network with over 250,000 providers including many optical offices. Cherry and Scratchpay also have growing provider networks.",
  },
];

const benefits = [
  { icon: DollarSign, title: "0% APR offers", desc: "Interest-free plans at LASIK & vision centers" },
  { icon: Clock, title: "Instant approval", desc: "Fast decisions for glasses, contacts & surgery" },
  { icon: Shield, title: "No hard inquiry", desc: "Compare options without affecting your score" },
  { icon: Star, title: "Broad coverage", desc: "LASIK, cataracts, glasses & more" },
];

export default function VisionFinancing() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/vision-financing" />
        <meta property="og:title" content="Vision & LASIK Financing — Compare Eye Care Payment Plans | Cadu" />
        <meta property="og:description" content="Compare LASIK financing and vision care payment plans. Find 0% APR options for laser eye surgery, cataract surgery, glasses, and contacts." />
        <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <meta property="og:site_name" content="Cadu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vision & LASIK Financing — Compare Eye Care Payment Plans | Cadu" />
        <meta name="twitter:description" content="Compare vision care financing. Find 0% APR plans for LASIK, glasses, and eye surgery." />
        <meta name="twitter:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cadu.health" },
            { "@type": "ListItem", "position": 2, "name": "Vision & LASIK Financing", "item": "https://cadu.health/vision-financing" }
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
          "name": "Cadu — Vision & LASIK Financing",
          "url": "https://cadu.health/vision-financing",
          "description": "Compare vision care financing options. Find 0% APR plans and low-rate loans for LASIK, glasses, contacts, and eye surgery.",
          "serviceType": "Vision Care Financing",
          "areaServed": "US"
        })}</script>
        <title>Vision & LASIK Financing — Compare Eye Care Payment Plans | Cadu</title>
        <meta name="description" content="Compare LASIK financing and vision care payment plans. Find 0% APR options for laser eye surgery, cataract surgery, glasses, and contacts. Apply with no credit impact." />
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
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Vision & LASIK Financing</p>
          <h1 className="text-5xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            See clearly without<br />the financial stress
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Compare vision care financing options including LASIK payment plans, 0% APR offers, and bad-credit solutions from the top lenders.
          </p>
          <Link to={createPageUrl("Onboarding") + "?procedure=vision"}>
            <Button className="px-10 py-6 text-base rounded-lg">
              Find Vision Financing Options <ArrowRight className="w-4 h-4 ml-2" />
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

        {/* Procedures */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="py-16 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>Vision procedures we cover</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {["LASIK surgery", "PRK laser eye surgery", "Cataract surgery", "Glaucoma treatment", "Prescription glasses & frames", "Contact lenses", "Retinal treatments", "Eyelid surgery"].map(proc => (
              <div key={proc} className="flex items-center gap-3 p-4 border border-border rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{proc}</span>
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
            <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Ready to see the world clearly?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Takes 2 minutes. No impact on your credit score.</p>
            <Link to={createPageUrl("Onboarding") + "?procedure=vision"}>
              <Button className="px-10 py-6 text-base">Get My Vision Financing Options</Button>
            </Link>
          </div>
        </motion.section>

      </main>
    </div>
  );
}