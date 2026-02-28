import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const options = [
  { label: "Medical financing", page: "medical-financing", category: "medical" },
  { label: "Dental financing", page: "dental-financing", category: "dental" },
  { label: "CareCredit alternatives", page: "carecredit-alternatives", category: "carecredit_alternatives" },
  { label: "Payment plan options", page: "cant-afford-medical-bill", category: "payment_plans" },
];

export default function Frontdesk() {
  const navigate = useNavigate();

  useEffect(() => {
    base44.analytics.track({ eventName: "qr_scan_frontdesk" });
  }, []);

  const handleClick = (option) => {
    base44.analytics.track({
      eventName: "qr_frontdesk_button_click",
      properties: { category: option.category, label: option.label },
    });
    navigate(createPageUrl(option.page));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm text-center"
      >
        {/* Logo */}
        <div className="mb-10">
          <span
            className="text-3xl font-light tracking-tight text-primary"
            style={{ fontFamily: "Georgia, serif" }}
          >
            cadu
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-3xl font-normal text-foreground mb-3 leading-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Need help paying for your procedure?
        </h1>

        <p className="text-muted-foreground mb-10 leading-relaxed">
          Compare financing options privately. No obligation.
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          {options.map((option, i) => (
            <motion.button
              key={option.page}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              onClick={() => handleClick(option)}
              className="w-full flex items-center justify-between px-6 py-4 border border-border rounded-xl text-foreground hover:border-primary hover:bg-secondary transition-colors group text-left"
            >
              <span className="font-medium">{option.label}</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.button>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          No personal information required to browse options.
        </p>
      </motion.div>
    </div>
  );
}