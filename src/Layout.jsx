import { HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MobileNav from "@/components/MobileNav";
import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LegacyRedirect from "@/components/LegacyRedirect";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <HelmetProvider>
      <ScrollToTop />
      <LegacyRedirect />
      <div
        className="min-h-screen flex flex-col"
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="flex-1 pb-16 md:pb-0">
          <div className="md:hidden px-4 pt-2">
            <BackButton />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.18 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
        <Footer />
        <MobileNav />
      </div>
    </HelmetProvider>
  );
}