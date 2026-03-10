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
    q: "How much does orthodontic treatment cost?",
    a: "Traditional braces typically cost $3,000–$7,000. Clear aligners like Invisalign range from $3,000–$8,000. Lingual braces and other advanced options can cost $8,000–$13,000 or more.",
  },
  {
    q: "Can I finance braces or Invisalign with bad credit?",
    a: "Yes. CareCredit, Sunbit, and Cherry offer orthodontic financing options with high approval rates, even for applicants with fair or limited credit history.",
  },
  {
    q: "Is 0% APR available for orthodontic treatment?",
    a: "Yes. CareCredit and many orthodontic offices offer in-house 0% interest payment plans for 12–24 months. Comparing options on Cadu helps you find the best available offer.",
  },
  {
    q: "Can adults finance orthodontic treatment?",
    a: "Absolutely. Adult orthodontic treatment is increasingly common and all major financing options are available regardless of age.",
  },
  {
    q: "Does insurance cover orthodontics?",
    a: "Some dental insurance plans include orthodontic benefits up to a lifetime maximum (often $1,000–$2,000). Financing can cover any remaining balance after insurance.",
  },
];

const benefits = [
  { icon: DollarSign, title: "Low monthly payments", desc: "Break down the cost of braces or Invisalign" },
  { icon: Clock, title: "Instant approval", desc: "Get a decision in minutes" },
  { icon: Shield, title: "No credit impact", desc: "Compare without a hard inquiry" },
  { icon: Star, title: "0% APR options", desc: "Interest-free plans at many orthodontists" },
];

export default function OrthodonticFinancing() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Orthodontic Financing — Compare Braces & Invisalign Payment Plans | Cadu</title>
        <meta name="description" content="Compare orthodontic financing for braces, Invisalign, and clear aligners. Find 0% APR payment plans and low-rate loans. Bad credit options available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/orthodontic-financing" />
        <meta property="og:title" content="Orthodontic Financing — Compare Braces & Invisalign Payment Plans | Cadu" />
        <meta property="og:description" content="Compare orthodontic financing for braces and Invisalign. Find 0% APR plans and low-rate loans for orthodontic treatment." />
        <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <meta property="og:site_name" content="Cadu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orthodontic Financing — Compare Braces & Invisalign Payment Plans | Cadu" />
        <meta name="twitter:description" content="Compare orthodontic financing for braces and Invisalign. Find 0% APR plans." />
        <meta name="twitter:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cadu.health" },
            { "@type": "ListItem", "position": 2, "name": "Orthodontic Financing", "item": "https://cadu.health/orthodontic-financing" }
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
          "name": "Cadu — Orthodontic Financing",
          "url": "https://cadu.health/orthodontic-financing",
          "description": "Compare orthodontic financing options. Find 0% APR payment plans and low-rate loans for braces, Invisalign, and clear aligners.",
          "serviceType": "Orthodontic Financing",
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
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Orthodontic Financing</p>
          <h1 className="text-5xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Finance braces or Invisalign<br />with flexible payments
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Compare orthodontic payment plans from top lenders. Find 0% APR options, low monthly payments, and fast approvals for braces, clear aligners, and retainers.
          </p>
          <Link to={createPageUrl("Onboarding") + "?procedure=dental"}>
            <Button className="px-10 py-6 text-base rounded-lg">
              Find My Orthodontic Financing <ArrowRight className="w-4 h-4 ml-2" />
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
            <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Ready for a straighter smile?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Takes 2 minutes. No impact on your credit score.</p>
            <Link to={createPageUrl("Onboarding") + "?procedure=dental"}>
              <Button className="px-10 py-6 text-base">Get My Orthodontic Financing Options</Button>
            </Link>
          </div>
        </motion.section>

        <p className="text-xs text-muted-foreground py-8 border-t border-border">Cadu is a comparison platform that helps you explore financing options. We do not issue loans directly and do not provide financial advice. All information is for general informational purposes only. Please consult a licensed financial advisor before making any financial decision.</p>
        <RelatedPages currentPage="orthodontic-financing" />
      </main>
    </div>
  );
}