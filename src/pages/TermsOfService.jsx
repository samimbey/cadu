import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";

export default function TermsOfService() {
  return (
    <div className="bg-white flex flex-col">
      <Helmet>
        <title>Terms of Service — Cadu</title>
        <meta name="description" content="Read Cadu's Terms of Service governing the use of our healthcare finance marketplace." />
      </Helmet>

      <header className="border-b border-border px-8 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="text-3xl font-light tracking-tight text-primary hover:opacity-80 transition-opacity" style={{ fontFamily: "Georgia, serif" }}>
            cadu
          </Link>
          <NavMenu isMarketplace={false} />
        </div>
      </header>

      <main className="flex-1 px-8 py-12">
        <div className="max-w-3xl mx-auto prose prose-sm prose-slate">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-foreground mb-2">Terms of Service</h1>
            <p className="text-sm text-muted-foreground">Last Updated: March 12, 2026</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of <a href="https://www.cadunow.com" className="text-primary hover:underline">www.cadunow.com</a> (the "Site") and any related services operated by Cadu ("Cadu," "we," "us," or "our").
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, you must not use the Site.
          </p>

          <Section title="1. Nature of Our Services">
            <p>Cadu operates an online platform designed to help consumers explore and compare financing options for healthcare expenses.</p>
            <p>Cadu provides informational tools and a marketplace that may connect users with independent third-party financial service providers.</p>
            <p>Cadu is not:</p>
            <ul>
              <li>A lender</li>
              <li>A creditor</li>
              <li>A financial institution</li>
              <li>A loan originator</li>
              <li>A financial advisor</li>
            </ul>
            <p>Cadu does not originate loans, make credit decisions, or determine loan terms.</p>
            <p>All loan approvals, rates, fees, and terms are determined solely by the third-party financial service providers.</p>
          </Section>

          <Section title="2. How the Cadu Marketplace Works">
            <p>Cadu provides two primary services:</p>
            <p><strong>Informational Comparisons</strong></p>
            <p>Users may browse and compare publicly available information about financing options offered by third-party financial service providers.</p>
            <p><strong>Optional Marketplace Matching</strong></p>
            <p>Users may choose to submit information about their financing needs through the Site. If a user chooses to do so, that information may be shared with independent third-party financial service providers who may contact the user regarding potential financing options.</p>
            <p>Cadu does not control whether any provider chooses to offer financing to a user.</p>
            <p>Any application for credit occurs directly with the financial service provider, not with Cadu.</p>
          </Section>

          <Section title="3. Compensation Disclosure">
            <p>Cadu may receive compensation from third-party financial service providers when users:</p>
            <ul>
              <li>Click links to provider websites</li>
              <li>Submit information through the Site</li>
              <li>Apply for financial products</li>
              <li>Obtain financing through a provider</li>
            </ul>
            <p>This compensation may influence the placement or appearance of products displayed on the Site.</p>
            <p>However, providers cannot pay to guarantee inclusion on the Site.</p>
          </Section>

          <Section title="4. Eligibility">
            <p>To use the Site you must:</p>
            <ul>
              <li>Be at least 18 years old</li>
              <li>Be located in the United States</li>
              <li>Provide accurate and truthful information</li>
              <li>Use the Site only for lawful purposes</li>
            </ul>
            <p>By using the Site, you represent and warrant that you meet these requirements.</p>
          </Section>

          <Section title="5. User Information and Authorization">
            <p>If you submit information through the Site, you:</p>
            <ul>
              <li>Represent that the information you provide is accurate and complete</li>
              <li>Authorize Cadu to share that information with third-party financial service providers</li>
              <li>Understand that those providers may contact you regarding financing options</li>
            </ul>
            <p>Financial service providers may use the information you provide to evaluate your eligibility for financial products and may obtain additional information as permitted by law.</p>
            <p>You are responsible for reviewing the terms, disclosures, and privacy policies of any provider you choose to engage with.</p>
          </Section>

          <Section title="6. Consent to Communications (TCPA Disclosure)">
            <p>By submitting your information through the Site, you expressly consent to be contacted by:</p>
            <ul>
              <li>Cadu</li>
              <li>Third-party financial service providers</li>
              <li>Service providers acting on their behalf</li>
            </ul>
            <p>These communications may occur via:</p>
            <ul>
              <li>Phone calls</li>
              <li>Text messages</li>
              <li>Email</li>
            </ul>
            <p>Calls or messages may be sent using automated technology or prerecorded messages where permitted by law.</p>
            <p>Consent to receive communications is not required as a condition of obtaining financing.</p>
            <p>Standard message and data rates may apply.</p>
            <p>You may opt out of communications at any time by following the instructions provided in the communication.</p>
          </Section>

          <Section title="7. Accuracy of Information">
            <p>Information displayed on the Site about financial products may be obtained from publicly available sources or third-party providers.</p>
            <p>While we strive to keep information accurate and up to date, we do not guarantee that all information is current, complete, or accurate.</p>
            <p>Users should verify loan terms, rates, and eligibility requirements directly with the applicable provider before making any financial decision.</p>
          </Section>

          <Section title="8. No Guarantee of Financing">
            <p>Cadu does not guarantee:</p>
            <ul>
              <li>That you will be matched with a financial provider</li>
              <li>That you will receive a loan offer</li>
              <li>Approval of any financing</li>
              <li>Specific loan terms, rates, or fees</li>
            </ul>
            <p>All credit decisions are made solely by the financial service provider.</p>
          </Section>

          <Section title="9. Third-Party Websites and Services">
            <p>The Site may contain links to third-party websites.</p>
            <p>If you click a link or are redirected to a provider's website, you will leave the Cadu Site.</p>
            <p>Cadu does not control and is not responsible for:</p>
            <ul>
              <li>The content of third-party websites</li>
              <li>Their privacy practices</li>
              <li>Their terms of service</li>
              <li>Their financial products or services</li>
            </ul>
            <p>Any transaction or agreement you enter into with a provider is solely between you and that provider.</p>
          </Section>

          <Section title="10. Intellectual Property">
            <p>All content on the Site, including:</p>
            <ul>
              <li>Text</li>
              <li>Graphics</li>
              <li>Logos</li>
              <li>Software</li>
              <li>Design</li>
            </ul>
            <p>is owned by or licensed to Cadu and protected by intellectual property laws.</p>
            <p>You may not copy, reproduce, modify, distribute, or use our content for commercial purposes without prior written permission.</p>
          </Section>

          <Section title="11. Prohibited Uses">
            <p>You agree not to:</p>
            <ul>
              <li>Use the Site for fraudulent purposes</li>
              <li>Submit false or misleading information</li>
              <li>Attempt to interfere with Site security</li>
              <li>Use automated scraping tools without permission</li>
              <li>Violate any applicable laws</li>
            </ul>
            <p>We reserve the right to restrict access to the Site for violations of these Terms.</p>
          </Section>

          <Section title="12. Disclaimer of Warranties">
            <p>The Site and services are provided on an "as is" and "as available" basis.</p>
            <p>To the fullest extent permitted by law, Cadu disclaims all warranties including:</p>
            <ul>
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy or reliability of information</li>
            </ul>
            <p>We do not guarantee that the Site will be uninterrupted, secure, or error-free.</p>
          </Section>

          <Section title="13. Limitation of Liability">
            <p>To the maximum extent permitted by law, Cadu shall not be liable for:</p>
            <ul>
              <li>Indirect or consequential damages</li>
              <li>Loss of profits or data</li>
              <li>Damages arising from interactions with third-party providers</li>
            </ul>
            <p>In no event shall Cadu's total liability exceed $100 USD.</p>
          </Section>

          <Section title="14. Indemnification">
            <p>You agree to indemnify and hold harmless Cadu and its affiliates from any claims, damages, or expenses arising from:</p>
            <ul>
              <li>Your use of the Site</li>
              <li>Your violation of these Terms</li>
              <li>Information you submit</li>
              <li>Your interactions with financial service providers</li>
            </ul>
          </Section>

          <Section title="15. Privacy">
            <p>Your use of the Site is also governed by our <Link to={createPageUrl("Privacy")} className="text-primary hover:underline">Privacy Policy</Link>, which is incorporated into these Terms.</p>
          </Section>

          <Section title="16. Modifications to the Terms">
            <p>We may update these Terms at any time.</p>
            <p>Updated versions will be posted with a revised "Last Updated" date. Continued use of the Site constitutes acceptance of the updated Terms.</p>
          </Section>

          <Section title="17. Termination">
            <p>We reserve the right to suspend or terminate access to the Site at our discretion if we believe a user has violated these Terms.</p>
          </Section>

          <Section title="18. Governing Law">
            <p>These Terms are governed by the laws of the State of Florida.</p>
            <p>Any disputes shall be resolved in the state or federal courts located in Florida.</p>
          </Section>

          <Section title="19. Arbitration and Class Action Waiver">
            <p>At our discretion, disputes may be resolved through binding arbitration on an individual basis.</p>
            <p>You waive any right to participate in class-action lawsuits or class-wide arbitration.</p>
          </Section>

          <Section title="20. Contact Information">
            <div className="text-muted-foreground text-sm space-y-1">
              <p><strong>Cadu</strong></p>
              <p>Website: <a href="https://www.cadunow.com" className="text-primary hover:underline">www.cadunow.com</a></p>
              <p>Email: <a href="mailto:support@cadunow.com" className="text-primary hover:underline">support@cadunow.com</a></p>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="border-t border-border pt-8 mt-8">
      <h2 className="text-lg font-semibold text-foreground mb-4">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-1 [&_p]:leading-relaxed">
        {children}
      </div>
    </div>
  );
}