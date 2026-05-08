import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";
import ExplainMyBill from "@/components/calculators/ExplainMyBill";

export default function ExplainMyBillPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Explain My Bill — Cadu</title>
        <meta name="description" content="Upload your medical bill and get a plain-English explanation of every charge, abbreviation, and what you actually owe." />
      </Helmet>

      <header className="border-b border-border px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to={createPageUrl("Home")}>
            <span className="text-2xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>
              cadu
            </span>
          </Link>
          <NavMenu />
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        <ExplainMyBill />
      </main>
    </div>
  );
}