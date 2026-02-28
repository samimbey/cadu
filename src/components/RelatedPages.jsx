import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

const allPages = [
  { label: "Dental Financing", page: "dental-financing" },
  { label: "Medical Financing", page: "medical-financing" },
  { label: "Cosmetic Surgery Financing", page: "cosmetic-financing" },
  { label: "Vision & LASIK Financing", page: "vision-financing" },
  { label: "Fertility & IVF Financing", page: "fertility-financing" },
  { label: "General Surgery Financing", page: "general-surgery-financing" },
  { label: "CareCredit Alternatives", page: "carecredit-alternatives" },
  { label: "Can't Afford a Medical Bill?", page: "cant-afford-medical-bill" },
];

export default function RelatedPages({ currentPage }) {
  const related = allPages.filter((p) => p.page !== currentPage);

  return (
    <section className="py-16 border-t border-border">
      <h2 className="text-2xl font-normal text-foreground mb-8" style={{ fontFamily: "Georgia, serif" }}>
        Related pages
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map(({ label, page }) => (
          <Link
            key={page}
            to={createPageUrl(page)}
            className="flex items-center justify-between p-4 border border-border rounded-xl hover:border-primary hover:bg-secondary transition-colors group"
          >
            <span className="text-foreground text-sm font-medium">{label}</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </Link>
        ))}
      </div>
    </section>
  );
}