import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Settings, RefreshCw, Scale } from "lucide-react";

import { Helmet } from "react-helmet-async";
import FinanceCard from "@/components/marketplace/FinanceCard";
import ComparisonModal from "@/components/marketplace/ComparisonModal";
import FilterBar from "@/components/marketplace/FilterBar";
import NavMenu from "@/components/marketplace/NavMenu";

// Healthcare finance options data
const financeOptions = [
  {
    id: "carecredit",
    name: "CareCredit",
    logo: "https://www.carecredit.com/assets/img/carecredit-logo.svg",
    description: "The leading healthcare credit card for medical expenses, accepted at over 250,000 providers nationwide.",
    aprRange: "0% - 26.99%",
    minCredit: "good",
    loanRange: "$200 - $25,000+",
    promoOffer: "0% for 6-24 mo",
    promoDetails: "No interest if paid in full within promotional period on purchases of $200 or more",
    rating: 4.5,
    reviews: 15420,
    repaymentTerms: "6-60 months",
    applicationTime: "Minutes",
    fundingTime: "Instant approval",
    features: ["Wide provider network", "No annual fee", "Promotional financing", "Mobile app"],
    applyUrl: "https://www.carecredit.com/apply/",
    procedures: ["dental", "cosmetic", "vision", "hearing", "veterinary", "general_medical"],
    matchScore: 95,
    featured: true,
  },
  {
    id: "prosper",
    name: "Prosper Healthcare Lending",
    logo: "https://www.prosper.com/images/prosper-logo.svg",
    description: "Personal loans specifically designed for healthcare procedures with competitive rates and flexible terms.",
    aprRange: "6.99% - 35.99%",
    minCredit: "fair",
    loanRange: "$2,000 - $50,000",
    promoOffer: "Fixed rates",
    promoDetails: "Lock in a fixed rate for the life of your loan with no prepayment penalties",
    rating: 4.3,
    reviews: 8750,
    repaymentTerms: "24-60 months",
    applicationTime: "5 minutes",
    fundingTime: "1-3 business days",
    features: ["Fixed rates", "No prepayment penalty", "Direct pay to provider", "Soft credit check"],
    applyUrl: "https://www.prosper.com/healthcare",
    procedures: ["dental", "cosmetic", "vision", "fertility", "bariatric", "general_medical"],
    matchScore: 88,
    featured: false,
  },
  {
    id: "lendingclub",
    name: "LendingClub",
    logo: "https://www.lendingclub.com/images/lc-logo.svg",
    description: "America's largest online lending marketplace offering personal loans for medical expenses.",
    aprRange: "8.98% - 35.99%",
    minCredit: "fair",
    loanRange: "$1,000 - $40,000",
    promoOffer: null,
    promoDetails: null,
    rating: 4.4,
    reviews: 12300,
    repaymentTerms: "36-60 months",
    applicationTime: "Minutes",
    fundingTime: "2-4 business days",
    features: ["Joint applications", "No origination fee options", "Rate checking", "Autopay discount"],
    applyUrl: "https://www.lendingclub.com/patient-solutions",
    procedures: ["dental", "cosmetic", "vision", "fertility", "bariatric", "general_medical", "other"],
    matchScore: 85,
    featured: false,
  },
  {
    id: "alphaeon",
    name: "Alphaeon Credit",
    logo: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=100&h=100&fit=crop",
    description: "Premium financing for elective healthcare including cosmetic surgery, dermatology, and dental.",
    aprRange: "0% - 29.99%",
    minCredit: "good",
    loanRange: "$250 - No limit",
    promoOffer: "0% for 6-24 mo",
    promoDetails: "Interest-free financing options available at participating providers",
    rating: 4.2,
    reviews: 5600,
    repaymentTerms: "6-84 months",
    applicationTime: "Minutes",
    fundingTime: "Instant decision",
    features: ["High credit limits", "Multiple promo options", "Provider partnership", "Recurring charges"],
    applyUrl: "https://goalphaeon.com/",
    procedures: ["cosmetic", "dental", "vision", "dermatology"],
    matchScore: 82,
    featured: true,
  },
  {
    id: "greensky",
    name: "GreenSky",
    logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=100&h=100&fit=crop",
    description: "Flexible payment plans for healthcare with quick approval and convenient mobile access.",
    aprRange: "0% - 26.99%",
    minCredit: "good",
    loanRange: "$500 - $65,000",
    promoOffer: "Deferred interest",
    promoDetails: "No interest if paid in full during promotional period",
    rating: 4.1,
    reviews: 7800,
    repaymentTerms: "6-144 months",
    applicationTime: "2 minutes",
    fundingTime: "Same day",
    features: ["Mobile app", "Extended terms", "Large network", "Easy payments"],
    applyUrl: "https://www.greensky.com/",
    procedures: ["dental", "cosmetic", "hearing", "general_medical"],
    matchScore: 78,
    featured: false,
  },
  {
    id: "accessone",
    name: "AccessOne",
    logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=100&h=100&fit=crop",
    description: "Patient-friendly payment plans with no credit check required and flexible terms.",
    aprRange: "0%",
    minCredit: "poor",
    loanRange: "$25 - $25,000",
    promoOffer: "0% always",
    promoDetails: "No interest ever - just affordable monthly payments",
    rating: 4.6,
    reviews: 3200,
    repaymentTerms: "3-60 months",
    applicationTime: "Minutes",
    fundingTime: "Instant",
    features: ["No credit check", "0% interest", "Flexible payments", "Hospital partnerships"],
    applyUrl: "https://accessonepay.com/patients/",
    procedures: ["general_medical", "dental", "vision", "other"],
    matchScore: 92,
    featured: false,
  },
  {
    id: "scratchpay",
    name: "Scratchpay",
    logo: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=100&h=100&fit=crop",
    description: "Simple, transparent financing for veterinary and healthcare costs with no hidden fees.",
    aprRange: "0% - 24.99%",
    minCredit: "fair",
    loanRange: "$200 - $10,000",
    promoOffer: "0% plans available",
    promoDetails: "Interest-free payment plans at participating providers",
    rating: 4.7,
    reviews: 9500,
    repaymentTerms: "4-24 months",
    applicationTime: "1 minute",
    fundingTime: "Instant approval",
    features: ["Quick approval", "No hidden fees", "Vet focused", "Simple application"],
    applyUrl: "https://scratchpay.com/",
    procedures: ["veterinary", "dental", "vision"],
    matchScore: 86,
    featured: false,
  },
  {
    id: "sunbit",
    name: "Sunbit",
    logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=100&h=100&fit=crop",
    description: "Buy now, pay later technology for healthcare with high approval rates.",
    aprRange: "0% - 35.99%",
    minCredit: "poor",
    loanRange: "$60 - $10,000",
    promoOffer: "90% approval",
    promoDetails: "Approves 9 out of 10 applicants with soft credit check",
    rating: 4.4,
    reviews: 6800,
    repaymentTerms: "3-12 months",
    applicationTime: "30 seconds",
    fundingTime: "Instant",
    features: ["High approval rate", "No hard credit check", "Quick application", "Flexible terms"],
    applyUrl: "https://sunbit.com/",
    procedures: ["dental", "vision", "veterinary", "hearing"],
    matchScore: 90,
    featured: false,
  },
  {
    id: "cherry",
    name: "Cherry",
    logo: "https://cdn.prod.website-files.com/681bf1d6f7dea459fe255c59/682df0cf8d8937cd51191c64_Logo-Primary-1.svg",
    description: "The most loved medical payment plan in America — true 0% APR, no deferred interest, and 80%+ approval rates with no hard credit check.",
    aprRange: "0% - 29.99%",
    minCredit: "fair",
    loanRange: "$200 - $50,000",
    promoOffer: "True 0% APR",
    promoDetails: "True 0% APR — no deferred or retroactive interest. No hidden fees.",
    rating: 4.8,
    reviews: 11200,
    repaymentTerms: "6 weeks - 60 months",
    applicationTime: "30 seconds",
    fundingTime: "Instant approval",
    features: ["80%+ approval rate", "No hard credit check", "True 0% APR", "No data selling"],
    applyUrl: "https://withcherry.com/consumers",
    procedures: ["dental", "cosmetic", "vision", "veterinary", "hearing", "general_medical", "other"],
    matchScore: 91,
    featured: true,
  },
  {
    id: "patientfi",
    name: "PatientFi",
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=100&h=40&fit=crop",
    description: "The friendly way to pay for healthcare — quick approvals, soft credit checks, and flexible financing for a wide range of procedures.",
    aprRange: "6.99% - 32.99%",
    minCredit: "good",
    loanRange: "$200 - $40,000",
    promoOffer: "0% available",
    promoDetails: "0% APR promotional plans available at participating providers",
    rating: 4.3,
    reviews: 4900,
    repaymentTerms: "12-60 months",
    applicationTime: "30 seconds",
    fundingTime: "Instant decision",
    features: ["Soft credit check", "Fixed rates", "Quick application", "Wide procedure coverage"],
    applyUrl: "https://search.patientfi.com/",
    procedures: ["cosmetic", "dental", "vision", "fertility", "general_medical", "other"],
    matchScore: 83,
    featured: false,
  },
];

export default function Marketplace() {
  const urlParams = new URLSearchParams(window.location.search);
  const amount = parseInt(urlParams.get("amount")) || 5000;
  const credit = urlParams.get("credit") || "good";
  const procedure = urlParams.get("procedure") || "general_medical";

  const [filters, setFilters] = useState({
    sortBy: "match",
    minMatchScore: 0,
    promoOnly: false,
  });

  const [compareList, setCompareList] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  // Calculate match scores based on user profile
  const calculateMatchScore = (option) => {
    let score = option.matchScore;
    
    // Adjust based on credit score
    const creditOrder = ["poor", "fair", "good", "excellent", "unknown"];
    const userCreditIndex = creditOrder.indexOf(credit);
    const minCreditIndex = creditOrder.indexOf(option.minCredit);
    
    if (userCreditIndex >= minCreditIndex) {
      score += 5;
    } else {
      score -= 15;
    }

    // Adjust based on procedure type
    if (option.procedures.includes(procedure)) {
      score += 5;
    } else {
      score -= 10;
    }

    // Adjust based on amount
    const [minAmount, maxAmount] = option.loanRange
      .replace(/[^0-9,-]/g, "")
      .split("-")
      .map(n => parseInt(n.replace(",", "")));
    
    if (amount >= minAmount && (!maxAmount || amount <= maxAmount)) {
      score += 3;
    }

    return Math.min(100, Math.max(0, score));
  };

  const processedOptions = useMemo(() => {
    let options = financeOptions.map(opt => ({
      ...opt,
      matchScore: calculateMatchScore(opt),
    }));

    // Apply filters
    if (filters.minMatchScore > 0) {
      options = options.filter(opt => opt.matchScore >= filters.minMatchScore);
    }

    if (filters.promoOnly) {
      options = options.filter(opt => opt.promoOffer);
    }

    // Sort
    switch (filters.sortBy) {
      case "apr":
        options.sort((a, b) => parseFloat(a.aprRange) - parseFloat(b.aprRange));
        break;
      case "rating":
        options.sort((a, b) => b.rating - a.rating);
        break;
      case "amount":
        options.sort((a, b) => {
          const aMax = parseInt(a.loanRange.replace(/[^0-9]/g, "").slice(-5));
          const bMax = parseInt(b.loanRange.replace(/[^0-9]/g, "").slice(-5));
          return bMax - aMax;
        });
        break;
      case "funding": {
        const fundingOrder = { "Instant": 0, "Instant approval": 0, "Same day": 1, "1-3 business days": 2, "2-4 business days": 3 };
        options.sort((a, b) => (fundingOrder[a.fundingTime] ?? 5) - (fundingOrder[b.fundingTime] ?? 5));
        break;
      }
      case "approval":
        options.sort((a, b) => {
          const aHigh = a.features.some(f => /approv/i.test(f)) ? 1 : 0;
          const bHigh = b.features.some(f => /approv/i.test(f)) ? 1 : 0;
          return bHigh - aHigh || b.matchScore - a.matchScore;
        });
        break;
      default:
        options.sort((a, b) => b.matchScore - a.matchScore);
    }

    return options;
  }, [filters, credit, procedure, amount]);

  const toggleCompare = (option) => {
    setCompareList(prev => {
      if (prev.find(o => o.id === option.id)) {
        return prev.filter(o => o.id !== option.id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), option];
      }
      return [...prev, option];
    });
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      sortBy: "match",
      minMatchScore: 0,
      promoOnly: false,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Healthcare Financing Options — Cadu Marketplace</title>
        <meta name="description" content="Browse and compare personalized healthcare financing options. Find medical loans, payment plans, and 0% APR offers matched to your credit score and procedure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cadu.health/marketplace" />
        <meta property="og:title" content="Healthcare Financing Options — Cadu Marketplace" />
        <meta property="og:description" content="Browse and compare personalized healthcare financing options. Find medical loans, payment plans, and 0% APR offers matched to your credit score and procedure." />
        <meta property="og:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
        <meta property="og:site_name" content="Cadu" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healthcare Financing Options — Cadu Marketplace" />
        <meta name="twitter:description" content="Compare personalized healthcare financing from top lenders. Find medical loans and 0% APR offers." />
        <meta name="twitter:image" content="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699ddfc1277ab7410d96d61c/cc2dd15c6_ChatGPTImageFeb24202602_23_35PM.png" />
      </Helmet>
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to={createPageUrl("Home")} className="flex items-center gap-2">
                <span className="text-2xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>
                  cadu
                </span>
              </Link>
            </div>
            
            <NavMenu />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Summary Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-secondary rounded-xl p-6 mb-8 border border-border"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-normal text-foreground mb-2" style={{ fontFamily: "Georgia, serif" }}>
                Your Personalized Options
              </h1>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="font-medium">
                  ${amount.toLocaleString()} needed
                </Badge>
                <Badge variant="secondary" className="font-medium capitalize">
                  {credit} credit
                </Badge>
                <Badge variant="secondary" className="font-medium capitalize">
                  {procedure.replace("_", " ")}
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Found</p>
              <p className="text-3xl font-bold text-primary">{processedOptions.length}</p>
              <p className="text-sm text-muted-foreground">matching options</p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="mb-6">
          <FilterBar 
            filters={filters} 
            onFilterChange={handleFilterChange} 
            onReset={resetFilters}
          />
        </div>

        {/* Compare Bar */}
        {compareList.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto bg-card border shadow-lg rounded-xl p-4 z-40"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {compareList.map((opt) => (
                  <div 
                    key={opt.id}
                    className="w-10 h-10 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center"
                  >
                    <img 
                      src={opt.logo} 
                      alt={opt.name}
                      className="w-6 h-6 object-contain"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${opt.name}&background=0ea5e9&color=fff&size=24`;
                      }}
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium">
                {compareList.length} selected
              </span>
              <Button onClick={() => setShowComparison(true)}>
                <Scale className="w-4 h-4 mr-2" />
                Compare
              </Button>
            </div>
          </motion.div>
        )}

        {/* Options Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-24">
          {processedOptions.map((option, index) => (
            <FinanceCard
              key={option.id}
              option={option}
              index={index}
              isSelected={false}
              onSelect={() => {}}
              onCompare={toggleCompare}
              isComparing={compareList.some(o => o.id === option.id)}
            />
          ))}
        </div>

        {processedOptions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No options match your current filters.</p>
            <Button onClick={resetFilters} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset Filters
            </Button>
          </div>
        )}
      </main>

      {/* Comparison Modal */}
      <ComparisonModal
        isOpen={showComparison}
        onClose={() => setShowComparison(false)}
        options={compareList}
      />
    </div>
  );
}