import { HelmetProvider } from "react-helmet-async";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LegacyRedirect from "@/components/LegacyRedirect";

export default function Layout({ children, currentPageName }) {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <LegacyRedirect />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
}