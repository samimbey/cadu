import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Linkedin } from "lucide-react";


export default function Footer() {
  return (
    <footer className="border-t border-border px-8 py-5">
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <p>© 2026 Cadu, LLC · Healthcare Finance Marketplace</p>
          <a href="https://www.linkedin.com/company/cadunow/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-6 h-6 rounded border border-border hover:border-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>
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