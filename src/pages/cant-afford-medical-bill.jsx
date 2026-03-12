import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";
import RelatedPages from "@/components/RelatedPages";
import { useState } from "react";

const faqs = [
  { q: "Can a hospital send me to collections for an unpaid bill?", a: "Yes. Unpaid medical bills can be sent to collections, which can affect your credit. It is usually better to contact the provider and discuss payment options before that happens." },
  { q: "What if I cannot afford the minimum payment?", a: "Contact the billing department and explain your situation. Many providers will work with you on reduced payments or hardship programs. You can also ask about financial assistance eligibility." },
  { q: "Is medical debt treated differently than other debt?", a: "Medical debt has some unique legal protections in certain states, and recent changes to credit reporting rules have affected how medical debt appears on credit reports. Requirements vary." },
  { q: "Can financing help with an existing medical bill?", a: "Yes. Some personal loans and financing programs can be used to pay off existing medical bills. This can consolidate the debt and give you a structured repayment plan." },
  { q: "Does Cadu provide loans or financial assistance?", a: "No. Cadu is a comparison platform. We help you explore financing options but do not issue loans or financial assistance directly." },
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

export default function CantAffordMedicalBill() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Can't Afford a Medical Bill? Options to Help You Pay | Cadu</title>
        <meta name="description" content="Can't afford your medical bill? Explore options including payment plans, financial assistance, and medical financing to manage healthcare costs you can't pay upfront." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/cant-afford-medical-bill" />
        <meta property="og:title" content="Can't Afford a Medical Bill? Options to Help You Pay | Cadu" />
        <meta property="og:description" content="Can't afford your medical bill? Explore options including payment plans, financial assistance, and medical financing to manage healthcare costs you can't pay upfront." />
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
            Can't Afford Your Medical Bill?
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Receiving a medical bill you cannot afford is stressful, but you are not alone. Medical expenses are one of the leading causes of financial hardship in the United States. Whether the bill is from a hospital stay, a procedure, or ongoing treatment, there are options that may help.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            This page outlines practical steps you can take when you cannot pay a medical bill in full, from negotiating with the provider to exploring financing options.
          </p>
          <Link to={createPageUrl("Onboarding")}>
            <Button className="px-8 py-5 text-base">
              Explore Financing Options <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Step 1: Do Not Ignore the Bill</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Ignoring a medical bill does not make it go away. If left unpaid, the balance may be sent to a collections agency, which can have a negative impact on your credit. The earlier you take action, the more options you are likely to have.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Even if you cannot pay, contacting the billing department to discuss your situation opens the door to solutions that may not be advertised.
          </p>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-12 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Step 2: Review the Bill for Errors</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Medical billing errors are common. Before paying anything, review the itemized bill carefully and check for:
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Duplicate charges for the same service",
              "Charges for services you did not receive",
              "Incorrect procedure or diagnosis codes",
              "Insurance payments that were not applied",
              "Out-of-network charges that should be in-network",
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">If you find an error, contact the provider's billing department and request a corrected bill.</p>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-12 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Step 3: Ask About Financial Assistance</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Many hospitals and healthcare systems offer financial assistance programs, sometimes called charity care. These programs may reduce or eliminate the bill for patients who qualify based on income.
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Ask the billing department if the provider has a financial assistance program",
              "Request an application and eligibility guidelines",
              "Nonprofit hospitals are generally required to have these programs",
              "Some states have additional protections for low-income patients",
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} className="mt-12 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Step 4: Negotiate the Balance</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Providers will often negotiate the balance, especially if you can offer a lump-sum payment or demonstrate financial hardship. You may be able to settle the bill for less than the full amount, or negotiate a reduced rate.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Ask specifically for the self-pay or uninsured rate, which may be significantly lower than the billed amount.
          </p>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-12 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Step 5: Request a Payment Plan</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you cannot pay in full, ask the provider about an in-house payment plan. Many providers will allow you to pay over several months, sometimes with no interest.
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Ask for the longest repayment period available",
              "Get the payment agreement in writing",
              "Ask whether the plan is interest-free",
              "Confirm the account will not go to collections while on the plan",
            ].map(item => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22 }} className="mt-12 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>Step 6: Consider Medical Financing</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If the provider cannot offer a payment plan, or if you want more structured monthly payments, medical financing may be an option. This includes:
          </p>
          <div className="space-y-4 mb-6">
            {[
              { label: "Medical financing programs", desc: "Designed for healthcare expenses, often with flexible approval criteria." },
              { label: "Personal loans", desc: "Can be used to pay off an existing medical bill and convert it into a fixed monthly payment." },
              { label: "Installment financing", desc: "Fixed monthly payments over a set term, sometimes with promotional offers." },
            ].map(({ label, desc }) => (
              <div key={label} className="border border-border rounded-xl p-5">
                <p className="font-semibold text-foreground mb-1">{label}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Cadu helps you compare financing options so you can find a plan that fits your budget and situation.
          </p>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-normal text-foreground mb-8" style={{ fontFamily: "Georgia, serif" }}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(faq => <FAQ key={faq.q} {...faq} />)}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-16 pt-12 border-t border-border">
          <div className="bg-secondary rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-normal text-foreground mb-3" style={{ fontFamily: "Georgia, serif" }}>Explore Your Financing Options</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Compare lenders and payment plans that may help you manage your medical bill.</p>
            <Link to={createPageUrl("Onboarding")}>
              <Button className="px-10 py-5 text-base">Check Available Options <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </Link>
          </div>
        </motion.section>

        <p className="text-xs text-muted-foreground mt-12 pb-8 leading-relaxed">
          Cadu operates an informational marketplace and is not a lender, creditor, or financial advisor. Cadu does not originate loans or make credit decisions. If you choose to submit information, it may be shared with independent third-party financial service providers who may contact you. Cadu may receive compensation from providers when users click links or obtain financing. All credit decisions are made solely by the applicable provider. Displayed rates and terms are approximate and subject to change. Consent to communications is not required to obtain financing.
        </p>

        <RelatedPages currentPage="cant-afford-medical-bill" />
      </main>
    </div>
  );
}