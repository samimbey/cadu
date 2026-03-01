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
    q: "How much does IVF cost and can I finance it?",
    a: "A single IVF cycle typically costs $12,000–$25,000. Yes, lenders like LendingClub and Prosper offer personal loans up to $40,000–$50,000 specifically suited for fertility treatment costs.",
  },
  {
    q: "What fertility treatments can be financed?",
    a: "IVF, IUI, egg freezing, embryo storage, surrogacy costs, donor eggs/sperm, and fertility medications are all eligible through personal loans from our lending partners.",
  },
  {
    q: "Are fertility loans available for bad credit?",
    a: "Some options are available for fair credit. Prosper and LendingClub consider multiple factors beyond credit score. For poor credit, a co-signer may improve your options.",
  },
  {
    q: "Is fertility financing tax deductible?",
    a: "Fertility treatment costs may qualify as a medical expense deduction on your taxes. Consult a tax professional for guidance specific to your situation.",
  },
];

const benefits = [
  { icon: DollarSign, title: "Up to $50,000", desc: "High-limit loans to cover full IVF cycles" },
  { icon: Clock, title: "Fast decisions", desc: "Get approved within minutes" },
  { icon: Shield, title: "No credit impact", desc: "Compare without a hard inquiry" },
  { icon: Star, title: "Fixed rates", desc: "Predictable monthly payments" },
];

export default function FertilityFinancing() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/fertility-financing" />
        <meta property="og:title" content="Fertility Financing & IVF Loans — Compare Payment Plans | Cadu" />
        <meta property="og:description" content="Compare fertility financing options and IVF loans. Find personal loans up to $50,000 for IVF, IUI, egg freezing, and other fertility treatments." />
        <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <meta property="og:site_name" content="Cadu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fertility Financing & IVF Loans — Compare Payment Plans | Cadu" />
        <meta name="twitter:description" content="Compare IVF and fertility financing. Find low-rate loans for IVF, egg freezing, and surrogacy." />
        <meta name="twitter:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cadu.health" },
            { "@type": "ListItem", "position": 2, "name": "Fertility & IVF Financing", "item": "https://cadu.health/fertility-financing" }
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
          "name": "Cadu — Fertility & IVF Financing",
          "url": "https://cadu.health/fertility-financing",
          "description": "Compare IVF and fertility treatment financing. Find low-rate loans and payment plans for IVF, egg freezing, surrogacy, and more.",
          "serviceType": "Fertility Financing",
          "areaServed": "US"
        })}</script>
        <title>Fertility Financing & IVF Loans — Compare Payment Plans | Cadu</title>
        <meta name="description" content="Compare fertility financing options and IVF loans. Find personal loans up to $50,000 for IVF, IUI, egg freezing, and other fertility treatments. Check rates without affecting your credit." />
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
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Fertility Financing</p>
          <h1 className="text-5xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Start your family without<br />the financial burden
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Compare fertility financing and IVF loans from top lenders. Find affordable monthly payments for IVF, IUI, egg freezing, and more.
          </p>
          <Link to={createPageUrl("Onboarding") + "?procedure=fertility"}>
            <Button className="px-10 py-6 text-base rounded-lg">
              Find Fertility Financing Options <ArrowRight className="w-4 h-4 ml-2" />
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
            <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Your family planning journey starts here</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Takes 2 minutes. No impact on your credit score.</p>
            <Link to={createPageUrl("Onboarding") + "?procedure=fertility"}>
              <Button className="px-10 py-6 text-base">Get My Fertility Financing Options</Button>
            </Link>
          </div>
        </motion.section>

        <p className="text-xs text-muted-foreground py-8 border-t border-border">Cadu is a comparison platform that helps you explore financing options. We do not issue loans directly.</p>
        <RelatedPages currentPage="fertility-financing" />
      </main>
    </div>
  );
}