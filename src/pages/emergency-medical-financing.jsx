import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, DollarSign, Clock, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";
import RelatedPages from "@/components/RelatedPages";

const faqs = [
  {
    q: "Can I get financing for an emergency room visit?",
    a: "Yes. Personal loans and medical credit cards can be used to cover ER bills, ambulance fees, and follow-up care costs after an emergency visit.",
  },
  {
    q: "What if I have bad credit and need emergency medical financing?",
    a: "Options like Sunbit, Scratchpay, and AccessOne specialize in high-approval medical financing. Some have no minimum credit score requirement.",
  },
  {
    q: "How quickly can I get funded for a medical emergency?",
    a: "Many personal loan lenders offer same-day or next-business-day funding once approved. Medical credit cards like CareCredit can be used immediately upon approval.",
  },
  {
    q: "Should I negotiate my emergency bill or finance it?",
    a: "Both strategies can work together. First, ask the hospital for an itemized bill and negotiate a lower amount. Then finance the reduced balance to make it manageable over time.",
  },
  {
    q: "What about hospital payment plans?",
    a: "Many hospitals offer 0% interest in-house payment plans. Cadu also connects you with third-party lenders that may offer better rates and longer terms than hospital plans.",
  },
];

const steps = [
  { step: "1", title: "Request an itemized bill", desc: "Ask your provider for a detailed breakdown of all charges. Errors are common and can be disputed." },
  { step: "2", title: "Negotiate or apply for charity care", desc: "Hospitals must offer financial assistance programs. Ask about income-based discounts before financing." },
  { step: "3", title: "Compare financing options", desc: "Use Cadu to compare lenders side-by-side — rates, terms, and monthly payments — with no credit impact." },
  { step: "4", title: "Apply and get funded fast", desc: "Many lenders approve and fund within 1 business day so you can resolve your bill quickly." },
];

export default function EmergencyMedicalFinancing() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Emergency Medical Financing — Cover Unexpected Bills Fast | Cadu</title>
        <meta name="description" content="Need financing for an emergency medical bill? Compare fast personal loans and medical credit options to cover ER visits, ambulance fees, and urgent care costs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/emergency-medical-financing" />
        <meta property="og:title" content="Emergency Medical Financing — Cover Unexpected Bills Fast | Cadu" />
        <meta property="og:description" content="Compare fast financing options for emergency medical bills. Get funded quickly to cover ER visits, ambulance fees, and urgent care costs." />
        <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <meta property="og:site_name" content="Cadu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emergency Medical Financing — Cover Unexpected Bills Fast | Cadu" />
        <meta name="twitter:description" content="Compare fast financing options for emergency medical bills." />
        <meta name="twitter:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cadu.health" },
            { "@type": "ListItem", "position": 2, "name": "Emergency Medical Financing", "item": "https://cadu.health/emergency-medical-financing" }
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
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Emergency Medical Financing</p>
          <h1 className="text-5xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Don't let an emergency bill<br />become a financial crisis
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Compare financing options for unexpected medical bills. Fast approvals, bad credit welcome, and funds available within days.
          </p>
          <Link to={createPageUrl("Onboarding") + "?procedure=general_medical"}>
            <Button className="px-10 py-6 text-base rounded-lg">
              Find Emergency Financing Options <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.section>

        {/* What it covers */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="py-16 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>What emergency medical financing covers</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Emergency room (ER) visits",
              "Ambulance & air transport",
              "Urgent care visits",
              "Hospital stays & inpatient care",
              "Emergency surgery",
              "Diagnostic imaging (MRI, CT, X-ray)",
              "Prescription medications",
              "Follow-up and specialist care",
            ].map(item => (
              <div key={item} className="flex items-center gap-3 p-4 border border-border rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Steps */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="py-16 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-10" style={{ fontFamily: "Georgia, serif" }}>How to handle an unexpected medical bill</h2>
          <div className="space-y-6 max-w-3xl">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0 text-sm">
                  {step}
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Quick options */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="py-16 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-10" style={{ fontFamily: "Georgia, serif" }}>Your financing options at a glance</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: DollarSign, title: "Medical credit cards", desc: "CareCredit and similar cards offer 0% APR promotions and can be used immediately upon approval at a wide network of providers." },
              { icon: Clock, title: "Personal loans", desc: "Fixed-rate loans from $1,000–$50,000 with terms up to 84 months. Many lenders fund within 1 business day." },
              { icon: Shield, title: "Hospital payment plans", desc: "Many hospitals offer interest-free installment plans. Ask your billing department before assuming you need outside financing." },
              { icon: Star, title: "Medical-specific lenders", desc: "Providers like Sunbit and AccessOne specialize in healthcare bills, often with higher approval rates than traditional banks." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-border rounded-xl p-6">
                <Icon className="w-6 h-6 text-primary mb-3" />
                <p className="font-semibold text-foreground mb-2">{title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
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

        {/* Disclaimer */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="py-8 border-t border-border">
          <div className="flex gap-3 p-4 bg-muted rounded-xl text-sm text-muted-foreground">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>Cadu operates an informational marketplace and is not a lender, creditor, or financial advisor. Cadu does not originate loans or make credit decisions. If you choose to submit information, it may be shared with independent third-party financial service providers who may contact you. Cadu may receive compensation from providers when users click links or obtain financing. All credit decisions are made solely by the applicable provider. Displayed rates and terms are approximate and subject to change. Consent to communications is not required to obtain financing.</p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="py-16 border-t border-border">
          <div className="bg-secondary rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Compare your options now</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Takes 2 minutes. No impact on your credit score.</p>
            <Link to={createPageUrl("Onboarding") + "?procedure=general_medical"}>
              <Button className="px-10 py-6 text-base">Find My Emergency Financing Options</Button>
            </Link>
          </div>
        </motion.section>

        <RelatedPages currentPage="emergency-medical-financing" />
      </main>
    </div>
  );
}