import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";

const faqs = [
  {
    q: "How much do dental implants cost?",
    a: "A single dental implant can cost between $3,000 and $6,000 or more depending on the provider, location, and whether additional work such as bone grafting is needed.",
  },
  {
    q: "Can I finance dental implants with bad credit?",
    a: "Some lenders offer financing for a wide range of credit profiles. Options may have higher rates, but financing can still be available.",
  },
  {
    q: "Does dental insurance cover implants?",
    a: "Most dental insurance plans do not fully cover implants. Some may cover a portion of the cost. Financing can help cover what insurance does not pay.",
  },
  {
    q: "How long does it take to get approved?",
    a: "Many financing providers offer instant or same-day decisions. Funding timelines vary by lender.",
  },
  {
    q: "Does Cadu provide loans?",
    a: "No. Cadu is a comparison platform that helps you explore financing options. We do not issue loans directly.",
  },
];

const financingOptions = [
  {
    title: "Medical Credit Programs",
    desc: "Financing options designed for healthcare, including dental procedures.",
    pros: ["Fast approval", "Designed for dental costs", "Promotional 0% APR plans available"],
    cons: ["Watch for deferred interest", "Approval depends on credit"],
  },
  {
    title: "Dental Office Payment Plans",
    desc: "Some dentists offer in-house payment plans for implant procedures.",
    pros: ["No third-party lender", "May have low or no interest"],
    cons: ["Not available at all offices", "Short repayment periods"],
  },
  {
    title: "Personal Loans",
    desc: "A personal loan can cover the full cost of dental implant treatment.",
    pros: ["Fixed monthly payments", "Can cover full implant cost", "Longer repayment terms"],
    cons: ["Credit check required", "Interest rates vary"],
  },
  {
    title: "Installment Financing",
    desc: "Some providers offer installment plans specifically for dental procedures.",
    pros: ["Predictable payments", "Quick application", "True 0% options available"],
    cons: ["Not available everywhere", "May have fees"],
  },
];

export default function DentalImplantFinancing() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Dental Implant Financing | Compare Payment Plans & Loans | Cadu</title>
        <meta name="description" content="Compare dental implant financing options, payment plans, and lenders. Find affordable monthly payment options for single implants, full arch, and All-on-4 procedures." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/dental-implant-financing" />
        <meta property="og:title" content="Dental Implant Financing | Compare Payment Plans & Loans | Cadu" />
        <meta property="og:description" content="Compare dental implant financing options and payment plans. Find affordable monthly payments for single implants, full arch, and All-on-4 procedures." />
        <meta property="og:site_name" content="Cadu" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cadu.health" },
            { "@type": "ListItem", "position": 2, "name": "Dental Financing", "item": "https://cadu.health/dental-financing" },
            { "@type": "ListItem", "position": 3, "name": "Dental Implant Financing", "item": "https://cadu.health/dental-implant-financing" }
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
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-20 max-w-3xl">
          <h1 className="text-5xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Dental Implant Financing
          </h1>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Dental implants are one of the most effective long-term solutions for missing teeth, but they can be expensive. Many patients need financing to make implants affordable through monthly payments.
          </p>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Cadu helps you compare dental implant financing options so you can find a plan that fits your budget and timeline.
          </p>
          <Link to={createPageUrl("Onboarding") + "?procedure=dental"}>
            <Button className="px-10 py-6 text-base rounded-lg">
              Check Available Options <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.section>

        {/* Cost Overview */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>What Do Dental Implants Cost?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">
            Dental implant costs vary significantly based on the type of procedure, the number of implants, your location, and the provider. Below are general cost ranges.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { label: "Single Tooth Implant", range: "$3,000 – $6,000+" },
              { label: "Multiple Implants", range: "$6,000 – $30,000+" },
              { label: "Full Arch (All-on-4)", range: "$20,000 – $50,000+" },
            ].map(({ label, range }) => (
              <div key={label} className="border border-border rounded-xl p-5 text-center">
                <DollarSign className="w-6 h-6 text-primary mx-auto mb-3" />
                <p className="font-semibold text-foreground text-sm mb-1">{label}</p>
                <p className="text-muted-foreground text-sm">{range}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-3xl text-sm">
            Most dental insurance plans do not fully cover implants. Financing can help cover the gap between what insurance pays and the total cost of treatment.
          </p>
        </motion.section>

        {/* Financing Options */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Dental Implant Financing Options</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            There are several ways to finance dental implants. The right option depends on the cost, your credit, and the repayment terms you need.
          </p>
          <div className="space-y-6">
            {financingOptions.map(({ title, desc, pros, cons }) => (
              <div key={title} className="border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{desc}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Pros</p>
                    <ul className="space-y-1">
                      {pros.map(p => <li key={p} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-0.5">+</span>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Cons</p>
                    <ul className="space-y-1">
                      {cons.map(c => <li key={c} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-muted-foreground mt-0.5">−</span>{c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* What to Look For */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>What to Look for in a Financing Plan</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">When comparing financing plans for dental implants, consider:</p>
          <ul className="space-y-2 mb-6 max-w-2xl">
            {[
              "Whether the plan has true 0% APR or deferred interest",
              "Monthly payment amount relative to your budget",
              "Total repayment period",
              "Whether the lender is accepted at your dental provider",
              "Approval requirements and credit impact",
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* FAQ */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="py-16 border-t border-border">
          <h2 className="text-3xl font-normal text-foreground mb-10" style={{ fontFamily: "Georgia, serif" }}>Frequently Asked Questions</h2>
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
            <h2 className="text-3xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Find Dental Implant Financing</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Compare lenders and payment plans to find the best option for your dental implant procedure.</p>
            <Link to={createPageUrl("Onboarding") + "?procedure=dental"}>
              <Button className="px-10 py-6 text-base">Check Available Options</Button>
            </Link>
          </div>
        </motion.section>

        {/* Disclaimer */}
        <div className="py-8 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Cadu is a comparison platform and does not provide loans directly. We may receive compensation from partner lenders when users apply through our site. All financing terms are provided by the lender. Cost estimates are general ranges and may vary by provider and location.
          </p>
        </div>

      </main>
    </div>
  );
}