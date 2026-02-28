import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

const options = [
  { label: "Medical financing", page: "medical-financing" },
  { label: "Dental financing", page: "dental-financing" },
  { label: "CareCredit alternatives", page: "carecredit-alternatives" },
  { label: "Payment plan options", page: "Onboarding" },
];

export default function Frontdesk() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <span className="text-3xl font-light tracking-tight text-primary mb-12 block" style={{ fontFamily: "Georgia, serif" }}>
          cadu
        </span>

        <h1 className="text-3xl font-normal text-foreground mb-4 leading-snug" style={{ fontFamily: "Georgia, serif" }}>
          Need help paying for your procedure?
        </h1>

        <p className="text-muted-foreground mb-10 text-base leading-relaxed">
          Compare financing options privately. No obligation.
        </p>

        <div className="space-y-3">
          {options.map(({ label, page }) => (
            <Link
              key={page}
              to={createPageUrl(page)}
              className="flex items-center justify-between w-full px-6 py-4 border border-border rounded-xl hover:border-primary hover:bg-secondary transition-colors group"
            >
              <span className="text-foreground font-medium">{label}</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}