import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import NavMenu from "@/components/marketplace/NavMenu";

const sections = [
  {
    title: "Information We Collect",
    content: null,
    subsections: [
      {
        label: "Identifying Information",
        text: "We collect information that could identify you such as your name, telephone number, mobile number, and email address. We may also collect this type of information from you about others, such as co-borrowers.",
      },
      {
        label: "Other Information",
        text: "We also collect information such as demographic data, data about your online activity, and other information that is not used to identify you.",
      },
    ],
  },
  {
    title: "How We Collect Information",
    content: null,
    subsections: [
      {
        label: "Information provided by you",
        text: "We collect information from you when you enter it or otherwise provide it in connection with an inquiry into our Services. This information could be provided via an online form, over the phone, or via other means in which you interact with our Services.",
      },
      {
        label: "Information from third parties",
        text: "Information is collected from credit bureaus, lead generators and other partners who may have data on your financial profile, home, or other demographic information.",
      },
      {
        label: "Information from cookies and other tracking technologies",
        text: "We use cookies, web beacons, and similar technologies to record your preferences, track the use of our Site and collect information. This information may include internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and/or clickstream data. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.",
      },
    ],
  },
  {
    title: "How We Use Information",
    content: "We may use collected information to:",
    list: [
      "Deliver the products and services you requested",
      "Improve customer service",
      "Improve our Site",
      "Personalize your user experience",
      "Communicate with you about products or services that may be of interest to you",
      "Manage our business",
    ],
  },
  {
    title: "Who Do We Share Your Information With?",
    content: null,
    subsections: [
      {
        label: "Cadu Affiliates",
        text: "We may share information about you or provided by you with the Cadu affiliates.",
      },
      {
        label: "Network Partners",
        text: "When you submit an inquiry or use another Service provided through the Website, you direct Cadu to share information about you or provided by you with lenders and other third parties in our network. Please note: The Network Partners that interact with you may retain or use your information whether or not you use their services. You should contact these Network Partners directly concerning their privacy and information sharing practices.",
      },
      {
        label: "Cadu Service Providers",
        text: "We may share information with Service Providers that perform certain services on our behalf including, but not limited to, credit bureaus, marketing partners, or entities providing business analysis and/or website or product support.",
      },
      {
        label: "Other Situations",
        text: "We may also disclose information in response to a subpoena or court order; to establish or exercise our legal rights; to defend against legal claims; when we believe disclosure is appropriate to prevent illegal activity; in connection with a corporate transaction such as a merger or sale; or to comply with state and/or federal licensing requirements.",
      },
    ],
  },
  {
    title: "How We Protect Your Information",
    content: "We maintain physical, electronic, and procedural measures designed to safeguard your information from unauthorized access and disclosure. No system can be completely secure. Therefore, although we take steps to secure your information, we cannot guarantee that your information, searches, or other communications will always remain secure.",
  },
  {
    title: "Changes to this Privacy Policy",
    content: "Cadu has the discretion to update this privacy policy at any time. When we do, we will revise the date at the top of this page. We encourage you to frequently check this page for any changes to stay informed about how we are helping to protect the information we collect.",
  },
  {
    title: "Visiting our Websites From Outside the United States",
    content: "The Site is designed to provide services in the United States and is governed by the laws of the United States. We make no representation that the Site is governed by or operated in accordance with the laws of any other nation.",
  },
  {
    title: "Compliance with Children's Online Privacy Protection Rule",
    content: "This Website and App are not intended for individuals under 18 years of age, and we do not knowingly collect personal information from individuals under 18. If we learn we have collected or received personal information from a person under 18 without verification of parental consent, we will delete the information.",
  },
];

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
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to={createPageUrl("Marketplace")} className="hover:text-foreground transition-colors">Marketplace</Link>
            <Link to={createPageUrl("About")} className="hover:text-foreground transition-colors">About</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-2">Last Updated: November 23, 2020</p>
          <h1 className="text-4xl font-normal text-foreground mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Privacy Policy
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Cadu is committed to maintaining your confidence and trust as it relates to the privacy and usage of your information.
            Please read below and learn how we collect, protect, share, and use your information as part of our technology platform and all of our services.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <div key={i} className="border-t border-border pt-8">
              <h2 className="text-lg font-semibold text-foreground mb-4">{section.title}</h2>
              {section.content && (
                <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>
              )}
              {section.list && (
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {section.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
              {section.subsections && (
                <div className="space-y-4">
                  {section.subsections.map((sub, j) => (
                    <div key={j}>
                      <p className="font-medium text-foreground text-sm mb-1">{sub.label}</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">{sub.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-border px-6 py-5 mt-8">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4 items-center justify-between">
          <p className="text-xs text-muted-foreground">© 2026 Cadu · Healthcare Finance Marketplace</p>
          <Link to={createPageUrl("About")} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            About Us
          </Link>
        </div>
      </footer>
    </div>
  );
}