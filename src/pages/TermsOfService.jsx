import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Helmet } from "react-helmet-async";
import NavMenu from "@/components/marketplace/NavMenu";

const sections = [
  {
    title: "1. Nature of Our Services",
    content: [
      "Cadu operates an online platform designed to help consumers explore and compare financing options for healthcare expenses.",
      "Cadu provides informational tools and a marketplace that may connect users with independent third-party financial service providers.",
      { label: "Cadu is not:", bullets: ["A lender", "A creditor", "A financial institution", "A loan originator", "A financial advisor"] },
      "Cadu does not originate loans, make credit decisions, or determine loan terms.",
      "All loan approvals, rates, fees, and terms are determined solely by the third-party financial service providers.",
    ],
  },
  {
    title: "2. How the Cadu Marketplace Works",
    content: [
      "Cadu provides two primary services:",
      { label: "Informational Comparisons", body: "Users may browse and compare publicly available information about financing options offered by third-party financial service providers." },
      { label: "Optional Marketplace Matching", body: "Users may choose to submit information about their financing needs through the Site. If a user chooses to do so, that information may be shared with independent third-party financial service providers who may contact the user regarding potential financing options." },
      "Cadu does not control whether any provider chooses to offer financing to a user.",
      "Any application for credit occurs directly with the financial service provider, not with Cadu.",
    ],
  },
  {
    title: "3. Compensation Disclosure",
    content: [
      { label: "Cadu may receive compensation from third-party financial service providers when users:", bullets: ["Click links to provider websites", "Submit information through the Site", "Apply for financial products", "Obtain financing through a provider"] },
      "This compensation may influence the placement or appearance of products displayed on the Site.",
      "However, providers cannot pay to guarantee inclusion on the Site.",
    ],
  },
  {
    title: "4. Eligibility",
    content: [
      { label: "To use the Site you must:", bullets: ["Be at least 18 years old", "Be located in the United States", "Provide accurate and truthful information", "Use the Site only for lawful purposes"] },
      "By using the Site, you represent and warrant that you meet these requirements.",
    ],
  },
  {
    title: "5. User Information and Authorization",
    content: [
      { label: "If you submit information through the Site, you:", bullets: ["Represent that the information you provide is accurate and complete", "Authorize Cadu to share that information with third-party financial service providers", "Understand that those providers may contact you regarding financing options"] },
      "Financial service providers may use the information you provide to evaluate your eligibility for financial products and may obtain additional information as permitted by law.",
      "You are responsible for reviewing the terms, disclosures, and privacy policies of any provider you choose to engage with.",
    ],
  },
  {
    title: "6. Consent to Communications (TCPA Disclosure)",
    content: [
      { label: "By submitting your information through the Site, you expressly consent to be contacted by:", bullets: ["Cadu", "Third-party financial service providers", "Service providers acting on their behalf"] },
      { label: "These communications may occur via:", bullets: ["Phone calls", "Text messages", "Email"] },
      "Calls or messages may be sent using automated technology or prerecorded messages where permitted by law.",
      "Consent to receive communications is not required as a condition of obtaining financing.",
      "Standard message and data rates may apply.",
      "You may opt out of communications at any time by following the instructions provided in the communication.",
    ],
  },
  {
    title: "7. Accuracy of Information",
    content: [
      "Information displayed on the Site about financial products may be obtained from publicly available sources or third-party providers.",
      "While we strive to keep information accurate and up to date, we do not guarantee that all information is current, complete, or accurate.",
      "Users should verify loan terms, rates, and eligibility requirements directly with the applicable provider before making any financial decision.",
    ],
  },
  {
    title: "8. No Guarantee of Financing",
    content: [
      { label: "Cadu does not guarantee:", bullets: ["That you will be matched with a financial provider", "That you will receive a loan offer", "Approval of any financing", "Specific loan terms, rates, or fees"] },
      "All credit decisions are made solely by the financial service provider.",
    ],
  },
  {
    title: "9. Third-Party Websites and Services",
    content: [
      "The Site may contain links to third-party websites.",
      "If you click a link or are redirected to a provider's website, you will leave the Cadu Site.",
      { label: "Cadu does not control and is not responsible for:", bullets: ["The content of third-party websites", "Their privacy practices", "Their terms of service", "Their financial products or services"] },
      "Any transaction or agreement you enter into with a provider is solely between you and that provider.",
    ],
  },
  {
    title: "10. Intellectual Property",
    content: [
      { label: "All content on the Site, including:", bullets: ["Text", "Graphics", "Logos", "Software", "Design"] },
      "is owned by or licensed to Cadu and protected by intellectual property laws.",
      "You may not copy, reproduce, modify, distribute, or use our content for commercial purposes without prior written permission.",
    ],
  },
  {
    title: "11. Prohibited Uses",
    content: [
      { label: "You agree not to:", bullets: ["Use the Site for fraudulent purposes", "Submit false or misleading information", "Attempt to interfere with Site security", "Use automated scraping tools without permission", "Violate any applicable laws"] },
      "We reserve the right to restrict access to the Site for violations of these Terms.",
    ],
  },
  {
    title: "12. Disclaimer of Warranties",
    content: [
      'The Site and services are provided on an "as is" and "as available" basis.',
      { label: "To the fullest extent permitted by law, Cadu disclaims all warranties including:", bullets: ["Merchantability", "Fitness for a particular purpose", "Non-infringement", "Accuracy or reliability of information"] },
      "We do not guarantee that the Site will be uninterrupted, secure, or error-free.",
    ],
  },
  {
    title: "13. Limitation of Liability",
    content: [
      { label: "To the maximum extent permitted by law, Cadu shall not be liable for:", bullets: ["Indirect or consequential damages", "Loss of profits or data", "Damages arising from interactions with third-party providers"] },
      "In no event shall Cadu's total liability exceed $100 USD.",
    ],
  },
  {
    title: "14. Indemnification",
    content: [
      { label: "You agree to indemnify and hold harmless Cadu and its affiliates from any claims, damages, or expenses arising from:", bullets: ["Your use of the Site", "Your violation of these Terms", "Information you submit", "Your interactions with financial service providers"] },
    ],
  },
  {
    title: "15. Privacy",
    content: [
      "Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms.",
    ],
  },
  {
    title: "16. Modifications to the Terms",
    content: [
      "We may update these Terms at any time.",
      'Updated versions will be posted with a revised "Last Updated" date. Continued use of the Site constitutes acceptance of the updated Terms.',
    ],
  },
  {
    title: "17. Termination",
    content: [
      "We reserve the right to suspend or terminate access to the Site at our discretion if we believe a user has violated these Terms.",
    ],
  },
  {
    title: "18. Governing Law",
    content: [
      "These Terms are governed by the laws of the State of Florida.",
      "Any disputes shall be resolved in the state or federal courts located in Florida.",
    ],
  },
  {
    title: "19. Arbitration and Class Action Waiver",
    content: [
      "At our discretion, disputes may be resolved through binding arbitration on an individual basis.",
      "You waive any right to participate in class-action lawsuits or class-wide arbitration.",
    ],
  },
  {
    title: "20. Contact Information",
    content: [
      { label: "Cadu", body: "Website: www.cadunow.com\nEmail: support@cadunow.com" },
    ],
  },
];

function renderItem(item, i) {
  if (typeof item === "string") {
    return <p key={i} className="text-muted-foreground leading-relaxed">{item}</p>;
  }
  if (item.bullets) {
    return (
      <div key={i}>
        {item.label && <p className="text-muted-foreground leading-relaxed mb-2">{item.label}</p>}
        <ul className="list-disc list-inside space-y-1 pl-2">
          {item.bullets.map((b, j) => (
            <li key={j} className="text-muted-foreground">{b}</li>
          ))}
        </ul>
      </div>
    );
  }
  if (item.body) {
    return (
      <div key={i}>
        <p className="font-semibold text-foreground mb-1">{item.label}</p>
        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{item.body}</p>
      </div>
    );
  }
  return null;
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms of Service — Cadu</title>
        <meta name="description" content="Read the Cadu Terms of Service governing use of the healthcare finance marketplace." />
      </Helmet>

      <header className="border-b border-border px-6 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to={createPageUrl("Home")}>
            <span className="text-2xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>cadu</span>
          </Link>
          <NavMenu />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-normal text-foreground mb-2" style={{ fontFamily: "Georgia, serif" }}>Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: March 12, 2026</p>

        <div className="space-y-2 mb-10">
          <p className="text-muted-foreground leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of{" "}
            <a href="https://www.cadunow.com" className="text-primary hover:underline">www.cadunow.com</a>{" "}
            (the "Site") and any related services operated by Cadu ("Cadu," "we," "us," or "our").
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, you must not use the Site.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-foreground mb-4">{section.title}</h2>
              <div className="space-y-3">
                {section.content.map((item, i) => renderItem(item, i))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}