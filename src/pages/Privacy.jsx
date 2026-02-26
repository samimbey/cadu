import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import NavMenu from "@/components/marketplace/NavMenu";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-border px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to={createPageUrl("Home")}>
            <span className="text-2xl font-light tracking-tight text-primary cursor-pointer" style={{ fontFamily: "Georgia, serif" }}>
              cadu
            </span>
          </Link>
          <NavMenu />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-2">Last Updated: February 26, 2026</p>
          <h1 className="text-4xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Privacy Policy
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Cadu ("Cadu," "we," "us," or "our") operates a financial services marketplace that connects consumers with third-party lenders and financial service providers. We are committed to protecting your privacy and maintaining transparency regarding how we collect, use, disclose, and safeguard your information.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            This Privacy Policy describes how we handle information collected through our website, www.cadunow.com (the "Site"), and related services.
          </p>
        </div>

        <div className="space-y-10">
          {/* Section 1 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">1. Important Notice About Our Role</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Cadu is not a lender, creditor, financial institution, or loan broker. We do not make credit decisions and do not process loan applications directly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When you submit information through our Site, you are requesting to be matched with third-party lenders or financial providers in our network. Your information is shared with those partners so they may contact you and process your inquiry.
            </p>
          </div>

          {/* Section 2 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">2. Information We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <p className="font-medium text-foreground mb-3">A. Personal Information You Provide</p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may collect the following categories of personal information:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Telephone number (including mobile number)</li>
                  <li>State of residence</li>
                  <li>Information about the type of financing you are seeking</li>
                  <li>Information about co-borrowers (if provided)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We collect this information when you submit a form on our Site, request to be matched with lenders, or communicate with us via email or phone.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground mb-3">B. Automatically Collected Information</p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  When you visit our Site, we may automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
                  <li>IP address</li>
                  <li>Browser type and device information</li>
                  <li>Operating system</li>
                  <li>Referring URLs</li>
                  <li>Pages viewed and time spent on pages</li>
                  <li>Date and time of access</li>
                  <li>Clickstream data</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  This information is collected through cookies, pixels, web beacons, and similar tracking technologies.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground mb-3">C. Information From Third Parties</p>
                <p className="text-muted-foreground leading-relaxed">
                  We may receive information from marketing partners, advertising platforms, analytics providers, and business partners. In some cases, our lender partners may provide feedback regarding whether a submitted lead resulted in a transaction.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Match you with third-party lenders or financial service providers</li>
              <li>Facilitate your inquiry and redirect you to partner sites</li>
              <li>Improve our Site and user experience</li>
              <li>Analyze performance and optimize marketing campaigns</li>
              <li>Respond to inquiries and customer support requests</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Detect and prevent fraud or misuse</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We may also use information for internal analytics and business operations.
            </p>
          </div>

          {/* Section 4 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">4. How We Share Information</h2>
            
            <div className="space-y-6">
              <div>
                <p className="font-medium text-foreground mb-3">A. Network Partners (Lenders and Financial Providers)</p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  When you submit an inquiry through our Site, you direct us to share your information with one or more third-party lenders or financial service providers. These partners may:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Contact you directly</li>
                  <li>Retain your information</li>
                  <li>Use your information according to their own privacy policies</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
                  We encourage you to review the privacy policy of any lender you engage with.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground mb-3">B. Service Providers</p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may share information with vendors who provide services such as website hosting, data storage, analytics, marketing services, and business intelligence tools. These providers are contractually obligated to safeguard your information.
                </p>
              </div>

              <div>
                <p className="font-medium text-foreground mb-3">C. Legal and Business Transfers</p>
                <p className="text-muted-foreground leading-relaxed">
                  We may disclose information to comply with applicable law, subpoena, or legal process; to enforce our terms or protect our rights; in connection with a merger, acquisition, asset sale, or restructuring; or to prevent fraud or illegal activity.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use cookies and similar technologies to analyze Site traffic, improve functionality, measure marketing effectiveness, and store user preferences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You may disable cookies through your browser settings. However, some features of the Site may not function properly if cookies are disabled.
            </p>
          </div>

          {/* Section 6 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain personal information for as long as reasonably necessary to fulfill the purposes described in this Policy, comply with legal obligations, resolve disputes, or enforce agreements.
            </p>
          </div>

          {/* Section 7 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">7. Your Privacy Rights (U.S. Residents)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Depending on your state of residence (including California, Virginia, Colorado, Texas, and others), you may have rights including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
              <li>The right to know what personal information we collect</li>
              <li>The right to request deletion</li>
              <li>The right to request correction</li>
              <li>The right to opt out of the sale or sharing of personal information</li>
              <li>The right to limit the use of sensitive personal information</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed text-sm">
              To exercise your rights, please contact us at privacy@cadunow.com. We will verify your request as required by law.
            </p>
          </div>

          {/* Section 8 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">8. "Sale" or "Sharing" of Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Because Cadu operates a marketplace that connects consumers with lenders, sharing your information with third-party financial providers in exchange for compensation may be considered a "sale" or "sharing" under certain state privacy laws.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              You may opt out of such sharing by contacting us at privacy@cadunow.com.
            </p>
          </div>

          {/* Section 9 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">9. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable physical, technical, and administrative safeguards designed to protect your personal information. However, no system can guarantee complete security.
            </p>
          </div>

          {/* Section 10 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">10. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Site is not directed to individuals under 18 years of age. We do not knowingly collect personal information from anyone under 18. If we become aware that such information has been collected, we will delete it promptly.
            </p>
          </div>

          {/* Section 11 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">11. International Users</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are intended for individuals located in the United States. If you access our Site from outside the U.S., you understand that your information will be transferred to and processed in the United States.
            </p>
          </div>

          {/* Section 12 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically. When we do, we will revise the "Last Updated" date at the top of this page. Continued use of the Site after changes constitutes acceptance of the updated Policy.
            </p>
          </div>

          {/* Section 13 */}
          <div className="border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions regarding this Privacy Policy, please contact:
            </p>
            <div className="mt-4 text-muted-foreground text-sm space-y-1">
              <p><strong>Cadu</strong></p>
              <p>Email: <a href="mailto:privacy@cadunow.com" className="text-primary hover:underline">privacy@cadunow.com</a></p>
              <p>Website: <a href="https://www.cadunow.com" className="text-primary hover:underline">www.cadunow.com</a></p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-6 py-5 mt-8">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 items-center justify-between">
          <p className="text-xs text-muted-foreground">© 2026 Cadu, LLC · Healthcare Finance Marketplace</p>
          <div className="flex gap-4">
            <Link to={createPageUrl("About")} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              About Us
            </Link>
            <Link to={createPageUrl("Privacy")} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to={createPageUrl("TermsOfService")} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}