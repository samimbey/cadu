import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";

export default function AffiliateDisclosure() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Helmet>
        <title>Affiliate Disclosure — Cadu</title>
        <meta name="description" content="Cadu's affiliate disclosure explains how we earn compensation when you click on links to our network partners." />
      </Helmet>

      {/* Header */}
      <header className="border-b border-border px-8 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to={createPageUrl("Home")}>
            <span className="text-3xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>
              cadu
            </span>
          </Link>
          <NavMenu isMarketplace={false} />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-normal text-foreground mb-3" style={{ fontFamily: "Georgia, serif" }}>
            Affiliate Disclosure
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: February 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-sm leading-relaxed text-foreground">

            <section>
              <h2 className="text-lg font-semibold mb-2">Overview</h2>
              <p>
                Cadu ("we," "us," or "our") operates as a healthcare finance marketplace that connects consumers with third-party lenders and financial service providers ("Network Partners"). This Affiliate Disclosure explains the commercial relationships that may influence the content and listings displayed on our platform.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Compensation Disclosure</h2>
              <p>
                Cadu receives compensation from Network Partners when users click on links, submit applications, or are matched with a lender through our platform. This compensation may influence which products appear on our site, the order in which they are displayed, and whether certain products are featured or highlighted.
              </p>
              <p className="mt-3">
                Not all available healthcare financing providers are listed on Cadu. The absence of a lender from our marketplace does not imply that they offer inferior products or services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">How Our Marketplace Works</h2>
              <p>
                When you visit Cadu and view financing options, some or all of the lenders displayed may have a paid commercial relationship with us. Lenders may pay us on a per-click, per-lead, or revenue-share basis. "Featured" or "Sponsored" placements are paid positions.
              </p>
              <p className="mt-3">
                Despite these commercial relationships, we strive to present accurate, unbiased information to help you make informed financial decisions. Our match scores and comparison tools are designed to reflect compatibility with your stated preferences, not compensation amounts.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">No Cost to You</h2>
              <p>
                Using Cadu's marketplace is completely free for consumers. Any compensation we receive comes from our Network Partners and does not affect the rates, terms, or fees you are offered by a lender.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Editorial Independence</h2>
              <p>
                Our editorial content — including guides, articles, and informational resources — is created independently and is not influenced by advertiser relationships. We aim to provide helpful, honest information to support your healthcare financing decisions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Third-Party Information</h2>
              <p>
                The financing terms, APR ranges, loan amounts, and other product details displayed on Cadu are provided by our Network Partners or sourced from publicly available information. While we make reasonable efforts to keep this information current and accurate, we cannot guarantee its completeness or accuracy at all times. Always review the lender's official website and loan agreement before making a financial decision.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">FTC Compliance</h2>
              <p>
                This disclosure is provided in accordance with the Federal Trade Commission's guidelines on endorsements and testimonials (16 CFR Part 255) and the FTC's guidelines on affiliate marketing. We are committed to transparency about our commercial relationships.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
              <p>
                If you have questions about our affiliate relationships or this disclosure, please contact us at{" "}
                <a href="mailto:support@cadunow.com" className="text-primary hover:underline">
                  support@cadunow.com
                </a>{" "}
                or visit our{" "}
                <Link to={createPageUrl("ContactUs")} className="text-primary hover:underline">
                  Contact page
                </Link>.
              </p>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}