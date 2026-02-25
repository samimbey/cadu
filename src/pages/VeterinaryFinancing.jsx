import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Star, Shield, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";

const faqs = [
  {
    q: "What vet financing options are available for bad credit?",
    a: "Scratchpay and Sunbit have high approval rates regardless of credit history. CareCredit is also widely accepted and approves many applicants with fair credit.",
  },
  {
    q: "Which lenders are accepted at veterinary offices?",
    a: "CareCredit has the widest network with 250,000+ providers including many vets. Scratchpay and Cherry are also popular at veterinary practices.",
  },
  {
    q: "Can I get emergency vet financing same-day?",
    a: "Yes. Scratchpay, Sunbit, and CareCredit all offer instant decisions. You can apply in under a minute at the vet's office and get immediate access to funds.",
  },
  {
    q: "How much can I borrow for vet bills?",
    a: "Most lenders cover $200–$10,000 for veterinary expenses. CareCredit can go higher. The amount depends on your credit profile and the lender.",
  },
];

const benefits = [
  { icon: DollarSign, title: "Emergency ready", desc: "Instant approvals for urgent vet bills" },
  { icon: Clock, title: "Apply in 1 minute", desc: "Quick applications at the vet's office" },
  { icon: Shield, title: "No credit impact", desc: "Soft credit checks when comparing" },
  { icon: Star, title: "Vet-specific lenders", desc: "Scratchpay, CareCredit & more" },
];

export default function VeterinaryFinancing() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Veterinary Financing — Compare Vet Payment Plans | Cadu</title>
        <meta name="description" content="Compare veterinary financing options for emergency and planned vet bills. Find instant-approval payment plans accepted at thousands of vet offices. Bad credit options available." />
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
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Veterinary Financing</p>
          <h1 className="text-5xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Vet bills shouldn't mean<br />choosing between care
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Compare vet financing and payment plans. Get instant approval for emergency or planned procedures — with options for every credit type.
          </p>
          <Link to={createPageUrl("Onboarding") + "?procedure=veterinary"}>
            <Button className="px-10 py-6 text-base rounded-lg">
              Find Vet Financing Options <ArrowRight className="w-4 h-4 ml-2" />
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
          <h2 className="text-2xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>Vet expenses we cover</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {["Emergency surgery", "Cancer treatment", "Orthopedic procedures", "Dental cleanings & extractions", "Diagnostics & imaging", "Specialist consultations", "Chronic illness management", "Preventive care & vaccines"].map(proc => (
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
            <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Your pet deserves the best care</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Find a payment plan in under 2 minutes. No impact on your credit.</p>
            <Link to={createPageUrl("Onboarding") + "?procedure=veterinary"}>
              <Button className="px-10 py-6 text-base">Get My Vet Financing Options</Button>
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