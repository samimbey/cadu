import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Shield, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <meta name="google-site-verification" content="jwqga7txdvW8UANkw0P-VpZJA7tBfBMuYWOhBG13fiI" />
        <title>Cadu — Healthcare Finance Marketplace</title>
        <meta name="description" content="Compare healthcare financing options from top lenders. Find the best medical loans, payment plans, and 0% APR offers for dental, cosmetic, vision, and more." />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadunow.com" />
        <meta property="og:title" content="Cadu — Healthcare Finance Marketplace" />
        <meta property="og:description" content="Compare healthcare financing options from top lenders. Find the best medical loans, payment plans, and 0% APR offers for dental, cosmetic, vision, and more." />
        <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <meta property="og:site_name" content="Cadu" />
        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cadu — Healthcare Finance Marketplace" />
        <meta name="twitter:description" content="Compare healthcare financing options from top lenders. Find medical loans, payment plans, and 0% APR offers." />
        <meta name="twitter:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Cadu",
          "url": "https://cadunow.com",
          "description": "Healthcare Finance Marketplace — compare medical loans and payment plans from top lenders.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://cadunow.com/marketplace",
            "query-input": "required name=search_term_string"
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "Cadu",
          "url": "https://cadunow.com",
          "description": "Compare healthcare financing options from top lenders. Find the best medical loans, payment plans, and 0% APR offers.",
          "serviceType": "Healthcare Financing Marketplace",
          "areaServed": "US",
          "audience": { "@type": "Audience", "audienceType": "Patients seeking healthcare financing" }
        })}</script>
      </Helmet>
      {/* Header */}
      <header className="border-b border-border px-8 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-3xl tracking-wide" style={{ fontFamily: "'Proxima Nova', Helvetica, Arial, sans-serif", fontWeight: 600, color: "#2E4FA3", letterSpacing: "2px" }}>
            cadu
          </span>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to={createPageUrl("Marketplace")} className="hover:text-foreground transition-colors">Marketplace</Link>
            <Link to={createPageUrl("Calculators")} className="hover:text-foreground transition-colors">Calculators</Link>
            <Link to={createPageUrl("About")} className="hover:text-foreground transition-colors">About</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex items-center px-8">
        <div className="max-w-5xl mx-auto w-full py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1
                className="text-5xl sm:text-6xl font-normal text-foreground mb-6 leading-tight"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Healthcare in your hands
              </h1>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md">
                cadu helps compare and contrast options<br />
                to make healthcare affordable for you
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to={createPageUrl("Onboarding")}>
                  <Button className="px-10 py-6 text-base rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-normal">
                    Get Started
                  </Button>
                </Link>
                <Link to={createPageUrl("Calculators")} className="text-sm text-primary hover:underline flex items-center gap-1">
                  Financial Calculators →
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0 w-full max-w-sm lg:max-w-md"
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png"
                alt="Healthcare finance options"
                className="w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Browse by Procedure */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-16"
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">Browse by procedure</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Dental Financing", page: "DentalFinancing" },
                { label: "Cosmetic Surgery", page: "CosmeticFinancing" },
                { label: "Vision & LASIK", page: "VisionFinancing" },
                { label: "Fertility & IVF", page: "FertilityFinancing" },
                { label: "General Surgery", page: "GeneralSurgeryFinancing" },
              ].map(({ label, page }) => (
                <Link
                  key={page}
                  to={createPageUrl(page)}
                  className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-24 pt-12 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-10"
          >
            {[
              { icon: Users, stat: "250,000+", label: "Provider network" },
              { icon: Star, stat: "Top lenders", label: "Compared for you" },
              { icon: Shield, stat: "No impact", label: "On your credit score" },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} className="flex items-center gap-4">
                <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{stat}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-border px-8 py-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-muted-foreground">
            © 2026 Cadu · Healthcare Finance Marketplace
          </p>
        </div>
      </footer>
    </div>
  );
}