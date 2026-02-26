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

      {/* Header */}
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
            <p className="text-sm text-muted-foreground">Last Updated: February 26, 2026</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of <a href="https://www.cadunow.com" className="text-primary hover:underline">www.cadunow.com</a> (the "Site") and related services operated by Cadu ("Cadu," "we," "us," or "our").
          </p>

          <p className="text-muted-foreground leading-relaxed">
            By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, you must not use the Site.
          </p>

          {/* Section 1 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">1. Nature of Our Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cadu operates an online financial services marketplace.
            </p>
            <p className="text-muted-foreground leading-relaxed font-semibold">We are <strong>not</strong>:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>A lender</li>
              <li>A creditor</li>
              <li>A financial institution</li>
              <li>A loan broker</li>
              <li>An agent of any lender</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do not originate loans, make credit decisions, or process loan applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When you submit information through the Site, you are requesting to be matched with independent third-party lenders or financial service providers ("Network Partners"). Any financial product or service is offered solely by those third parties.
            </p>
          </div>

          {/* Section 2 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">2. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">You must:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Be at least 18 years old</li>
              <li>Be located in the United States</li>
              <li>Provide accurate and truthful information</li>
              <li>Use the Site for lawful purposes only</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              By using the Site, you represent and warrant that you meet these requirements.
            </p>
          </div>

          {/* Section 3 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">3. User Information and Authorization</h2>
            <p className="text-muted-foreground leading-relaxed">When you submit information through our Site, you:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Represent that the information is accurate and complete</li>
              <li>Authorize us to share your information with Network Partners</li>
              <li>Acknowledge that Network Partners may contact you directly</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You understand that lenders may use the information you provide to evaluate your eligibility and may obtain additional information as permitted by law.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You are solely responsible for reviewing the terms and privacy policies of any lender you choose to engage with.
            </p>
          </div>

          {/* Section 4 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">4. Consent to Communications (TCPA Disclosure)</h2>
            <p className="text-muted-foreground leading-relaxed">
              By submitting your information through the Site, you expressly consent to be contacted by:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Cadu</li>
              <li>Our Network Partners</li>
              <li>Service providers acting on their behalf</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">Contact may occur via:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Phone calls</li>
              <li>Text messages (including automated or prerecorded calls)</li>
              <li>Email</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You understand that consent to receive communications is not required as a condition of obtaining a loan or other financial product.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Standard message and data rates may apply.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You may revoke consent at any time by following opt-out instructions provided in communications.
            </p>
          </div>

          {/* Section 5 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">5. No Guarantee of Offers</h2>
            <p className="text-muted-foreground leading-relaxed">Cadu does not guarantee:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>That you will be matched with a lender</li>
              <li>That you will receive a loan offer</li>
              <li>Approval of any financing</li>
              <li>Specific loan terms or rates</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              All credit decisions and loan terms are determined solely by the lender.
            </p>
          </div>

          {/* Section 6 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">6. Third-Party Websites and Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Site may redirect you to third-party websites.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not control and are not responsible for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>The content of third-party sites</li>
              <li>Their privacy practices</li>
              <li>Their terms of service</li>
              <li>Their financial products</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Your interactions with Network Partners are solely between you and the applicable third party.
            </p>
          </div>

          {/* Section 7 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on the Site, including text, graphics, logos, software, and design, is owned by or licensed to Cadu and protected by intellectual property laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">You may not:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Copy</li>
              <li>Reproduce</li>
              <li>Modify</li>
              <li>Distribute</li>
              <li>Reverse engineer</li>
              <li>Use our content for commercial purposes</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Without prior written permission.
            </p>
          </div>

          {/* Section 8 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">8. Prohibited Uses</h2>
            <p className="text-muted-foreground leading-relaxed">You agree not to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Use the Site for fraudulent purposes</li>
              <li>Submit false or misleading information</li>
              <li>Attempt to interfere with Site security</li>
              <li>Use automated tools (bots, scrapers) without permission</li>
              <li>Violate any applicable law</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to restrict access for violations.
            </p>
          </div>

          {/* Section 9 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Site and services are provided on an "as is" and "as available" basis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Cadu disclaims all warranties, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy or reliability of information</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do not warrant that the Site will be uninterrupted, secure, or error-free.
            </p>
          </div>

          {/* Section 10 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Cadu shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Indirect, incidental, consequential, or punitive damages</li>
              <li>Loss of profits or data</li>
              <li>Damages arising from third-party lender interactions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall our total liability exceed one hundred dollars ($100).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Some states may not allow certain limitations, so portions of this section may not apply to you.
            </p>
          </div>

          {/* Section 11 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">11. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless Cadu, its officers, employees, and affiliates from any claims, liabilities, damages, or expenses arising from:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Your use of the Site</li>
              <li>Your violation of these Terms</li>
              <li>Information you submit</li>
              <li>Your interactions with Network Partners</li>
            </ul>
          </div>

          {/* Section 12 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">12. Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of the Site is also governed by our <Link to={createPageUrl("Privacy")} className="text-primary hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference.
            </p>
          </div>

          {/* Section 13 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">13. Modifications to the Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms at any time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Updated versions will be posted with a revised "Last Updated" date. Continued use of the Site constitutes acceptance of the revised Terms.
            </p>
          </div>

          {/* Section 14 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">14. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate access to the Site at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to us or others.
            </p>
          </div>

          {/* Section 15 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">15. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of the State of Florida, without regard to conflict of law principles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes shall be resolved in the state or federal courts located in Florida.
            </p>
          </div>

          {/* Section 16 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">16. Arbitration and Class Action Waiver</h2>
            <p className="text-muted-foreground leading-relaxed">
              At our discretion, we may require disputes to be resolved through binding arbitration on an individual basis.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You waive any right to participate in a class action lawsuit or class-wide arbitration.
            </p>
          </div>

          {/* Section 17 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">17. Contact Information</h2>
            <div className="text-muted-foreground text-sm space-y-1">
              <p><strong>Cadu</strong></p>
              <p>Website: <a href="https://www.cadunow.com" className="text-primary hover:underline">www.cadunow.com</a></p>
              <p>Email: <a href="mailto:support@cadunow.com" className="text-primary hover:underline">support@cadunow.com</a></p>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}