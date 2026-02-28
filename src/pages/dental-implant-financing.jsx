import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";
import { useState } from "react";

const faqs = [
  { q: "How much do dental implants cost?", a: "A single dental implant typically costs between $3,000 and $6,000 depending on your location, provider, and whether bone grafting or other procedures are needed. Full-mouth restorations can cost significantly more." },
  { q: "Does insurance cover dental implants?", a: "Most dental insurance plans do not fully cover implants, as they are often considered cosmetic or elective. Some plans may cover a portion of the procedure. It is best to check with your insurer." },
  { q: "Can I finance dental implants with bad credit?", a: "Some lenders work with a range of credit profiles. Approval and terms vary, and not all applicants will qualify for all options." },
  { q: "What is the typical repayment period for dental implant financing?", a: "Repayment terms vary by lender and loan type, but terms of 12 to 60 months are common. Longer terms reduce monthly payments but may increase total interest paid." },
  { q: "Does Cadu provide dental financing directly?", a: "No. Cadu is a comparison platform. We help you explore financing options but do not issue loans or financing directly." },
];

const comparisonOptions = [
  { option: "Medical/dental financing lender", bestFor: "Implants, full restorations", terms: "Monthly payments" },
  { option: "Personal loan", bestFor: "Larger treatment costs", terms: "Fixed payments" },
  { option: "Dental office payment plan", bestFor: "Single implants", terms: "Short-term" },
  { option: "Installment financing", bestFor: "Planned procedures", terms: "Flexible terms" },
];

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl p-6 cursor-pointer" onClick={() => setOpen(o => !o)}>
      <div className="flex items-center justify-between gap-4">
        <p className="font-semibold text-foreground">{q}</p>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
      </div>
      {open && <p className="text-muted-foreground text-sm leading-relaxed mt-3">{a}</p>}
    </div>
  );
}

export default function DentalImplantFinancing() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Dental Implant Financing | Compare Payment Plans for Implants | Cadu</title>
        <meta name="description" content="Compare dental implant financing options and payment plans. Find ways to afford single implants, full-mouth restorations, and All-on-4 procedures." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/dental-implant-financing" />
        <meta property="og:title" content="Dental Implant Financing | Compare Payment Plans for Implants | Cadu" />
        <meta property="og:description" content="Compare dental implant financing options and payment plans. Find ways to afford single implants, full-mouth restorations, and All-on-4 procedures." />
        <meta property="og:site_name" content="Cadu" />
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

      <main className="max-w-3xl mx-auto px-6 py-16">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-normal text-foreground mb-6 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            Dental Implant Financing
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Dental implants are one of the most effective ways to replace missing teeth, but they are also one of the more expensive dental procedures. A single implant can cost several thousand dollars, and full-mouth restorations can cost significantly more. Most insurance plans provide limited or no coverage for implants.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Cadu helps you compare dental implant financing options so you can find a payment plan that works for your budget and get the treatment you need.
          </p>
          <Link to={createPageUrl("Onboarding") + "?procedure=dental"}>
            <Button className="px-8 py-5 text-base">
              Check Available Options <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>What Dental Implant Financing Can Cover</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Financing can be used to cover the full cost of dental implant treatment, which may include:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Single tooth implants",
              "Multiple implants",
              "All-on-4 and full-arch restorations",
              "Implant-supported dentures",
              "Bone grafting procedures",
              "Sinus lifts",
              "Abutments and crowns",
              "Pre- and post-procedure care",
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            The right financing option depends on the total cost of your treatment plan and your credit profile.
          </p>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Types of Dental Implant Financing</h2>
          {[
            {
              title: "Dental or Medical Financing Programs",
              desc: "Specialized lenders that focus on healthcare expenses.",
              pros: ["Designed for dental costs", "May accept a range of credit profiles", "Quick application process"],
              cons: ["Interest rates vary by lender and credit", "Not all providers accept all programs"],
            },
            {
              title: "Personal Loans",
              desc: "General-purpose loans that can be used for dental treatment.",
              pros: ["Fixed interest rate and monthly payment", "Can cover large treatment costs", "Longer repayment periods available"],
              cons: ["Requires a credit check", "Approval and rates depend on credit history"],
            },
            {
              title: "Dental Office Payment Plans",
              desc: "In-house plans offered directly by the dental practice.",
              pros: ["No third-party lender needed", "May be interest-free"],
              cons: ["Not offered by all practices", "Often have shorter repayment terms"],
            },
            {
              title: "Installment Financing",
              desc: "Fixed monthly payments spread over a set term.",
              pros: ["Predictable payments", "No collateral required"],
              cons: ["May have fees or interest", "Not available for all procedures"],
            },
          ].map(({ title, desc, pros, cons }) => (
            <div key={title} className="mb-6 border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{desc}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Pros</p>
                  <ul className="space-y-1">
                    {pros.map(p => <li key={p} className="text-sm text-muted-foreground flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />{p}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Cons</p>
                  <ul className="space-y-1">
                    {cons.map(c => <li key={c} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>{c}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Compare Dental Implant Financing Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead className="bg-secondary">
                <tr>
                  <th className="text-left px-4 py-3 text-foreground font-semibold">Option</th>
                  <th className="text-left px-4 py-3 text-foreground font-semibold">Best For</th>
                  <th className="text-left px-4 py-3 text-foreground font-semibold">Typical Terms</th>
                  <th className="text-left px-4 py-3 text-foreground font-semibold">Apply</th>
                </tr>
              </thead>
              <tbody>
                {comparisonOptions.map((row, i) => (
                  <tr key={row.option} className={i % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                    <td className="px-4 py-3 text-foreground">{row.option}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.bestFor}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.terms}</td>
                    <td className="px-4 py-3">
                      <Link to={createPageUrl("Onboarding") + "?procedure=dental"} className="text-primary hover:underline font-medium">Check Options</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-8" style={{ fontFamily: "Georgia, serif" }}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(faq => <FAQ key={faq.q} {...faq} />)}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-16 pt-12 border-t border-border">
          <div className="bg-secondary rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-normal text-foreground mb-3" style={{ fontFamily: "Georgia, serif" }}>Explore Dental Implant Financing</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Compare payment plans and lenders to find the best option for your dental treatment.</p>
            <Link to={createPageUrl("Onboarding") + "?procedure=dental"}>
              <Button className="px-10 py-5 text-base">Check Available Options <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </motion.section>

        <p className="text-xs text-muted-foreground mt-12 pb-8 leading-relaxed">
          Cadu is a comparison platform and does not provide loans directly. We may receive compensation from partner lenders when users apply through our site. All financing terms are provided by the lender.
        </p>

      </main>
    </div>
  );
}