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
    q: "Can I get dental financing with bad credit?",
    a: "Some lenders on Cadu accept applicants with fair or poor credit, including AccessOne (no credit check required) and Sunbit (soft credit check). Your options and rates will vary based on your individual profile.",
  },
  {
    q: "What dental procedures can be financed?",
    a: "Most procedures qualify — implants, crowns, braces, orthodontics, veneers, root canals, extractions, and cosmetic dentistry. CareCredit and Cherry are accepted at the widest range of dental offices.",
  },
  {
    q: "Is there 0% APR dental financing?",
    a: "Yes. CareCredit, Cherry, and Alphaeon all offer 0% promotional APR plans for 6–24 months at participating providers. Cherry offers true 0% with no deferred interest.",
  },
  {
    q: "How quickly can I get a decision?",
    a: "Most lenders provide decisions within minutes — many within 30 seconds. Funding or card activation timelines vary by lender.",
  },
];

const benefits = [
  { icon: DollarSign, title: "0% APR options", desc: "Promotional interest-free plans at thousands of dental offices" },
  { icon: Clock, title: "Fast decisions", desc: "Many lenders provide decisions in seconds, not days" },
  { icon: Shield, title: "No credit impact", desc: "Soft credit checks only — comparing won't hurt your score" },
  { icon: Star, title: "Top-rated lenders", desc: "Only vetted, highly-rated dental financing providers" },
];

export default function DentalFinancing() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/dental-financing" />
        <meta property="og:title" content="Dental Financing — Compare Payment Plans & Loans | Cadu" />
        <meta property="og:description" content="Compare dental financing options including 0% APR plans, bad credit dental loans, and instant approval options for implants, braces, crowns & more." />
        <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <meta property="og:site_name" content="Cadu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dental Financing — Compare Payment Plans & Loans | Cadu" />
        <meta name="twitter:description" content="Compare dental financing options. Find 0% APR plans for implants, braces, crowns & more." />
        <meta name="twitter:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cadu.health" },
            { "@type": "ListItem", "position": 2, "name": "Dental Financing", "item": "https://cadu.health/dental-financing" }
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
          "name": "Cadu — Dental Financing",
          "url": "https://cadu.health/dental-financing",
          "description": "Compare dental financing options and payment plans from top lenders. Find 0% APR offers for crowns, implants, braces, and more.",
          "serviceType": "Dental Financing",
          "areaServed": "US"
        })}</script>
        <title>Dental Financing — Compare Payment Plans & Loans | Cadu</title>
        <meta name="description" content="Compare dental financing options including 0% APR payment plans, bad credit dental loans, and instant approval options. Find the best dental payment plan for implants, braces, crowns & more." />
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
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Dental Financing</p>
          <h1 className="text-5xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Affordable dental care<br />starts here
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Compare dental payment plans and loans from top lenders. Find 0% APR offers and flexible options — all in one place.
          </p>
          <Link to={createPageUrl("Onboarding") + "?procedure=dental"}>
            <Button className="px-10 py-6 text-base rounded-lg">
              Find My Dental Financing <ArrowRight className="w-4 h-4 ml-2" />
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
            <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Ready to find your plan?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Takes 2 minutes. No impact on your credit score.</p>
            <Link to={createPageUrl("Onboarding") + "?procedure=dental"}>
              <Button className="px-10 py-6 text-base">Get My Dental Financing Options</Button>
            </Link>
          </div>
        </motion.section>

        {/* Featured blog post */}
        <div className="py-8 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">From the blog</p>
          <Link
            to="/Blog?post=clearchoice-dental-implants-cost-2026-financing-guide"
            className="flex items-center justify-between p-5 border border-border rounded-xl hover:border-primary hover:bg-secondary transition-colors group"
          >
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Clear Choice Dental Implants Cost 2026: A Complete Financing Guide</p>
              <p className="text-xs text-muted-foreground mt-1">Discover the real costs of ClearChoice dental implants and learn how to secure the best monthly payment plan.</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
          </Link>
        </div>

        <p className="text-xs text-muted-foreground py-8 border-t border-border">Cadu operates an informational marketplace and is not a lender, creditor, or financial advisor. Cadu does not originate loans or make credit decisions. If you choose to submit information, it may be shared with independent third-party financial service providers who may contact you. Cadu may receive compensation from providers when users click links or obtain financing. All credit decisions are made solely by the applicable provider. Displayed rates and terms are approximate and subject to change. Consent to communications is not required to obtain financing.</p>

        <RelatedPages currentPage="dental-financing" />
      </main>
    </div>
  );
}