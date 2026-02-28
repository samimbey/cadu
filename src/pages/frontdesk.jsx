import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

const options = [
  { label: "Medical Financing", page: "medical-financing" },
  { label: "Dental Financing", page: "dental-financing" },
  { label: "CareCredit Alternatives", page: "carecredit-alternatives" },
  { label: "Payment Plan Options", page: "Onboarding" },
];

const trustItems = [
  "No obligation",
  "Free to explore",
  "Apply directly with the lender",
  "Private and secure",
];

const includesItems = [
  "Monthly Payment Plans",
  "Medical Financing Lenders",
  "Alternatives to Traditional Credit Cards",
  "Flexible Repayment Terms",
];

export default function Frontdesk() {
  return (
    <div className="min-h-screen bg-[#f5f4f0] flex flex-col">
      {/* Header bar */}
      <div className="bg-primary px-6 py-4">
        <span className="text-2xl font-light tracking-tight text-white" style={{ fontFamily: "Georgia, serif" }}>cadu</span>

      </div>

      <div className="flex-1 flex flex-col items-center px-6 py-12">
        <div className="max-w-lg w-full">

          {/* Hero */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-normal text-foreground mb-3 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
              Need Help Paying For<br />Your Procedure?
            </h1>
            <p className="text-primary font-semibold text-lg">Explore Payment Options in Minutes</p>
            <p className="text-muted-foreground mt-2 text-sm">Compare financing options privately. No obligation.</p>
          </div>

          {/* Buttons */}
          <div className="space-y-3 mb-10">
            {options.map(({ label, page }) => (
              <Link
                key={page}
                to={createPageUrl(page)}
                className="flex items-center justify-between w-full px-6 py-4 bg-white border border-border rounded-xl hover:border-primary hover:bg-secondary transition-colors group shadow-sm"
              >
                <span className="text-foreground font-medium">{label}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>

          {/* Two-column info */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {/* How it works */}
            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
              <h2 className="font-semibold text-foreground mb-3">How It Works</h2>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Simply browse and compare medical financing options available to you.
              </p>
              <ul className="space-y-2">
                {trustItems.map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="text-primary font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Options may include */}
            <div className="bg-primary rounded-2xl p-6 shadow-sm">
              <h2 className="font-semibold text-white mb-3">Your Options May Include:</h2>
              <ul className="space-y-2">
                {includesItems.map(item => (
                  <li key={item} className="text-sm text-white/90 text-center py-1 border-b border-white/20 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground max-w-sm mx-auto">Cadu is a comparison platform that helps you explore financing options. We do not issue loans directly.</p>
        </div>
      </div>
    </div>
  );
}