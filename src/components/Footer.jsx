import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";


export default function Footer() {
  return (
    <footer className="border-t border-border px-8 py-5">
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 items-center justify-between text-xs text-muted-foreground">
        <p>© 2026 Cadu, LLC · Healthcare Finance Marketplace</p>
        <div className="flex gap-4">
          <Link to={createPageUrl("Privacy")} className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link to={createPageUrl("TermsOfService")} className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          <Link to={createPageUrl("AffiliateDisclosure")} className="hover:text-foreground transition-colors">
            Affiliate Disclosure
          </Link>
        </div>
      </div>
    </footer>
  );
}