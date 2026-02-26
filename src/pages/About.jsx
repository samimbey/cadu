import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NavMenu from "@/components/marketplace/NavMenu";
import { Helmet } from "react-helmet-async";

const stats = [
  {
    figure: "230%",
    description: "increase in patient out-of-pocket costs in the past decade",
    source: "MGMA",
    href: "https://www.mgma.com/data/data-stories/providing-cost-estimates-to-patients-to-improve-pa",
  },
  {
    figure: "44%",
    description: "of patients are unable to cover unexpected healthcare costs",
    source: "ABC News",
    href: "https://abcnews.go.com/US/10-americans-struggle-cover-400-emergency-expense-federal/story?id=63253846",
  },
  {
    figure: "77%",
    description: "of healthcare consumers say it's important to know costs before treatment",
    source: "HealthFirst Financial",
    href: "https://www.healthcaredive.com/news/most-patients-want-to-know-costs-financing-options-before-treatment/504765/",
  },
  {
    figure: "53%",
    description: "of patients want to discuss financing options before receiving care",
    source: "HealthFirst Financial",
    href: "https://www.healthcaredive.com/news/most-patients-want-to-know-costs-financing-options-before-treatment/504765/",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Cadu — Healthcare Finance Marketplace</title>
        <meta name="description" content="Learn about Cadu's mission to make healthcare affordable. We help patients compare medical financing options so you can focus on getting better, not worrying about bills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/about" />
        <meta property="og:title" content="About Cadu — Healthcare Finance Marketplace" />
        <meta property="og:description" content="Learn about Cadu's mission to make healthcare affordable. We help patients compare medical financing options so you can focus on getting better, not worrying about bills." />
        <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <meta property="og:site_name" content="Cadu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Cadu — Healthcare Finance Marketplace" />
        <meta name="twitter:description" content="Learn about Cadu's mission to make healthcare affordable for everyone." />
        <meta name="twitter:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
      </Helmet>
      {/* Header */}
      <header className="border-b border-border px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to={createPageUrl("Home")}>
            <span className="text-2xl tracking-wide cursor-pointer" style={{ fontFamily: "'Proxima Nova', Helvetica, Arial, sans-serif", fontWeight: 600, color: "#2E4FA3", letterSpacing: "2px" }}>
              cadu
            </span>
          </Link>
          <NavMenu />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">About Cadu</p>
          <h1 className="text-4xl sm:text-5xl font-normal text-foreground mb-8 leading-snug" style={{ fontFamily: "Georgia, serif" }}>
            Confident healthcare<br />starts with Cadu.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Cadu is an online consumer loan marketplace for medical expense borrowing needs. While other loan
            marketplaces push great borrowing options for mortgages, credit cards, and business loans, the one
            they've consistently left out has been the medical loan product.
          </p>
        </motion.div>

        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-t border-border pt-16 mb-20"
        >
          <h2 className="text-2xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Why we built Cadu
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            The past several years have seen dozens of great patient financing solutions introduced to the market —
            and Cadu is here to introduce them to you. We know there is a growing population of patients in need
            of medical loans, and that's why we've strived to be the niche marketplace for patient financing.
            Our mission is to alleviate the stress of large medical bills by giving you all the options available
            today and helping you make the right decision to fit your needs.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-border pt-16 mb-20"
        >
          <h2 className="text-2xl font-normal text-foreground mb-10" style={{ fontFamily: "Georgia, serif" }}>
            The numbers don't lie
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.08 }}
                className="border border-border rounded-xl p-6"
              >
                <p className="text-5xl font-light text-primary mb-3" style={{ fontFamily: "Georgia, serif" }}>
                  {stat.figure}
                </p>
                <p className="text-foreground text-sm leading-relaxed mb-3">{stat.description}</p>
                <a
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline"
                >
                  Source: {stat.source} →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-border pt-16 mb-20"
        >
          <h2 className="text-2xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Our mission
          </h2>
          <p className="text-xl text-foreground leading-relaxed max-w-2xl font-light" style={{ fontFamily: "Georgia, serif" }}>
            "It's our mission to provide you with all the tools and resources you need to make an informed
            decision about how to pay for an upcoming or outstanding medical expense."
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-secondary border border-border rounded-xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <p className="font-medium text-foreground text-lg mb-1">The healthy choice starts with Cadu.</p>
            <p className="text-sm text-muted-foreground">Compare financing options matched to your needs — no impact on your credit.</p>
          </div>
          <Link to={createPageUrl("Onboarding")} className="flex-shrink-0">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </main>

      <footer className="border-t border-border px-6 py-5 mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 items-center">
            <p className="text-xs text-muted-foreground">© 2026 Cadu · Healthcare Finance Marketplace</p>
            <Link to={createPageUrl("Privacy")} className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}