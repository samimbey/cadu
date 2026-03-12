import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Star, Check, Info, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { base44 } from "@/api/base44Client";

export default function FinanceCard({ option, index, isSelected, onSelect, onCompare, isComparing, hideMatchScore }) {
  const getMatchLabel = (score) => {
    if (score >= 90) return { label: "Highly Compatible", color: "bg-emerald-100 text-emerald-700 border-emerald-200" };
    if (score >= 75) return { label: "Strong Approval Odds", color: "bg-blue-100 text-blue-700 border-blue-200" };
    if (score >= 60) return { label: "Likely Match", color: "bg-amber-100 text-amber-700 border-amber-200" };
    return { label: "Possible Match", color: "bg-slate-100 text-slate-700 border-slate-200" };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className={cn(
        "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
        isSelected && "ring-2 ring-primary shadow-lg"
      )}>
        {!hideMatchScore && option.matchScore && (() => {
          const { label, color } = getMatchLabel(option.matchScore);
          return (
            <div className={cn("absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full border", color)}>
              {label}
            </div>
          );
        })()}
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-lg">
                  {option.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
                </span>
              </div>
              <div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{option.name}</h3>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-3.5 h-3.5",
                        i < Math.floor(option.rating) 
                          ? "text-amber-400 fill-amber-400" 
                          : "text-slate-200"
                      )} 
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">({option.reviews.toLocaleString()})</span>
                </div>
              </div>
            </div>

          </div>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {option.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-xs text-muted-foreground">APR Range</p>
              <p className="font-bold text-foreground">{option.aprRange}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-xs text-muted-foreground">Credit Needed</p>
              <p className="font-bold text-foreground capitalize">{option.minCredit}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-xs text-muted-foreground">Loan Range</p>
              <p className="font-bold text-foreground">{option.loanRange}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-xs text-muted-foreground">Promo Period</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="flex items-center gap-1 text-left">
                    <p className="font-bold text-foreground text-left">{option.promoOffer || "N/A"}</p>
                    {option.promoOffer && <Info className="w-3 h-3 text-muted-foreground" />}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-xs">{option.promoDetails || "No promotional offer available"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-xs font-medium text-muted-foreground">Key Features:</p>
            <div className="flex flex-wrap gap-2">
              {option.features.slice(0, 3).map((feature, i) => (
                <span key={i} className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full">
                  <Check className="w-3 h-3 text-secondary" />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <p className="text-[10px] text-muted-foreground mb-4 leading-relaxed">
            Terms may change. Please verify details with the lender before applying.
          </p>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => onCompare(option)}
              className={cn(
                "flex-1",
                isComparing && "bg-primary/10 border-primary"
              )}
            >
              {isComparing ? "Selected" : "Compare"}
            </Button>
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-[10px] text-emerald-600 text-center">✓ Viewing options won't affect your credit.</p>
            <Button 
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                base44.analytics.track({ eventName: "apply_now_clicked", properties: { lender: option.name, lender_id: option.id } });
                base44.entities.Click.create({ lender_name: option.name, lender_id: option.id, apply_url: option.applyUrl });
                window.open(option.applyUrl, '_blank');
              }}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View Offer
              <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}