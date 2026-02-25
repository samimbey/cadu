import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Star, Shield, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";

const faqs = [
  {
    q: "Can I finance cosmetic surgery with bad credit?",
    a: "Yes. Options like Sunbit and AccessOne have high approval rates and minimal credit requirements. PatientFi and Cherry also offer soft credit checks with competitive rates for fair credit.",
  },
  {
    q: "What cosmetic procedures can be financed?",
    a: "Most elective procedures qualify — rhinoplasty, breast augmentation, liposuction, tummy tucks, facelifts, Botox, fillers, laser treatments, and more.",
  },
  {
    q: "How much can I borrow for cosmetic surgery?",
    a: "Depending on the lender and your credit, you can typically borrow from $500 up to $65,000. Alphaeon offers no stated upper limit for qualified applicants.",
  },
  {
    q: "Will applying affect my credit score?",
    a: "Comparing options on Cadu uses a soft credit check — no impact on your score. Hard inquiries only happen when you formally apply directly with a lender.",
  },
];

const benefits = [
  { icon: DollarSign, title: "Up to $65,000", desc: "High-limit financing for major cosmetic procedures" },
  { icon: Clock, title: "Instant decisions", desc: "Apply and get approved in minutes" },
  { icon: Shield, title: "Soft check only", desc: "Compare without affecting your credit score" },
  { icon: Star, title: "Top lenders", desc: "CareCredit, Alphaeon, Cherry & more" },
];

export default function CosmeticFinancing() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Cosmetic Surgery Financing — Compare Payment Plans | Cadu</title>
        <meta name="description" content="Compare cosmetic surgery financing and payment plans. Find 0% APR loans for rhinoplasty, breast augmentation, liposuction, and more. Bad credit options available." />
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
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Cosmetic Surgery Financing</p>
          <h1 className="text-5xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Finance your cosmetic<br />procedure today
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Compare payment plans and personal loans for cosmetic surgery. Flexible terms, high approval rates, and 0% APR offers from the top lenders.
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

        {/* Procedures */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="py-16 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>Procedures we cover</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {["Rhinoplasty (nose job)", "Breast augmentation", "Liposuction", "Tummy tuck (abdominoplasty)", "Facelift & neck lift", "Botox & dermal fillers", "Laser skin resurfacing", "Eyelid surgery (blepharoplasty)"].map(proc => (
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
            <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Ready to get started?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Takes 2 minutes. No impact on your credit score.</p>
            <Link to={createPageUrl("Onboarding") + "?procedure=cosmetic"}>
              <Button className="px-10 py-6 text-base">Get My Cosmetic Financing Options</Button>
            </Link>
          </div>
        </motion.section>

      </main>

      <footer className="border-t border-border px-6 py-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-muted-foreground">© 2026 Cadu · Healthcare Finance Marketplace</p>
        </div>
      </footer>
    </div>
  );
}