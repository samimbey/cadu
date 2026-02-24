import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, X, Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ComparisonModal({ isOpen, onClose, options }) {
  if (options.length === 0) return null;

  const comparisonFields = [
    { key: "aprRange", label: "APR Range" },
    { key: "loanRange", label: "Loan Amount" },
    { key: "minCredit", label: "Min. Credit" },
    { key: "promoOffer", label: "Promo Offer" },
    { key: "repaymentTerms", label: "Repayment Terms" },
    { key: "applicationTime", label: "Application Time" },
    { key: "fundingTime", label: "Funding Time" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Compare Options</DialogTitle>
        </DialogHeader>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-2 text-sm font-medium text-muted-foreground w-1/4">
                  Feature
                </th>
                {options.map((option) => (
                  <th key={option.id} className="text-center py-4 px-2 min-w-[180px]">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-2">
                        <img 
                          src={option.logo} 
                          alt={option.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${option.name}&background=0ea5e9&color=fff&size=48`;
                          }}
                        />
                      </div>
                      <span className="font-bold text-foreground">{option.name}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span className="text-sm text-muted-foreground">{option.rating}</span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-muted/30">
                <td className="py-4 px-2 text-sm font-medium">Match Score</td>
                {options.map((option) => (
                  <td key={option.id} className="text-center py-4 px-2">
                    <Badge className={cn(
                      "font-bold",
                      option.matchScore >= 90 ? "bg-emerald-100 text-emerald-700" :
                      option.matchScore >= 75 ? "bg-blue-100 text-blue-700" :
                      "bg-amber-100 text-amber-700"
                    )}>
                      {option.matchScore}%
                    </Badge>
                  </td>
                ))}
              </tr>
              {comparisonFields.map((field) => (
                <tr key={field.key} className="border-b hover:bg-muted/20">
                  <td className="py-4 px-2 text-sm font-medium text-muted-foreground">
                    {field.label}
                  </td>
                  {options.map((option) => (
                    <td key={option.id} className="text-center py-4 px-2 text-sm font-medium">
                      {option[field.key] || "N/A"}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-b hover:bg-muted/20">
                <td className="py-4 px-2 text-sm font-medium text-muted-foreground">
                  Key Features
                </td>
                {options.map((option) => (
                  <td key={option.id} className="py-4 px-2">
                    <ul className="space-y-1">
                      {option.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-center gap-1 text-xs">
                          <Check className="w-3 h-3 text-secondary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="py-4 px-2"></td>
                {options.map((option) => (
                  <td key={option.id} className="text-center py-4 px-2">
                    <Button 
                      onClick={() => window.open(option.applyUrl, '_blank')}
                      className="w-full bg-secondary hover:bg-secondary/90"
                    >
                      Apply Now
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
}