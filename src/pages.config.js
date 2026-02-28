/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import About from './pages/About';
import AffiliateDisclosure from './pages/AffiliateDisclosure';
import Calculators from './pages/Calculators';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Onboarding from './pages/Onboarding';
import Privacy from './pages/Privacy';
import TermsOfService from './pages/TermsOfService';
import cantAffordMedicalBill from './pages/cant-afford-medical-bill';
import carecreditAlternatives from './pages/carecredit-alternatives';
import cosmeticFinancing from './pages/cosmetic-financing';
import dentalFinancing from './pages/dental-financing';
import fertilityFinancing from './pages/fertility-financing';
import generalSurgeryFinancing from './pages/general-surgery-financing';
import medicalFinancing from './pages/medical-financing';
import visionFinancing from './pages/vision-financing';
import __Layout from './Layout.jsx';


export const PAGES = {
    "About": About,
    "AffiliateDisclosure": AffiliateDisclosure,
    "Calculators": Calculators,
    "ContactUs": ContactUs,
    "Home": Home,
    "Marketplace": Marketplace,
    "Onboarding": Onboarding,
    "Privacy": Privacy,
    "TermsOfService": TermsOfService,
    "cant-afford-medical-bill": cantAffordMedicalBill,
    "carecredit-alternatives": carecreditAlternatives,
    "cosmetic-financing": cosmeticFinancing,
    "dental-financing": dentalFinancing,
    "fertility-financing": fertilityFinancing,
    "general-surgery-financing": generalSurgeryFinancing,
    "medical-financing": medicalFinancing,
    "vision-financing": visionFinancing,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};