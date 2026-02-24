import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

export default function FilterBar({ filters, onFilterChange, onReset }) {
  const [isOpen, setIsOpen] = useState(false);

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label className="text-sm font-medium">Sort By</Label>
        <Select value={filters.sortBy} onValueChange={(value) => onFilterChange("sortBy", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select sort option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="match">Best Match</SelectItem>
            <SelectItem value="apr">Lowest APR</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="amount">Loan Amount</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-medium">Minimum Match Score: {filters.minMatchScore}%</Label>
        <Slider
          value={[filters.minMatchScore]}
          onValueChange={([value]) => onFilterChange("minMatchScore", value)}
          max={100}
          min={0}
          step={5}
        />
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-medium">Promo Offers Only</Label>
        <div className="flex gap-2">
          <Button
            variant={filters.promoOnly ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange("promoOnly", true)}
          >
            Yes
          </Button>
          <Button
            variant={!filters.promoOnly ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange("promoOnly", false)}
          >
            No
          </Button>
        </div>
      </div>

      <Button variant="outline" className="w-full" onClick={onReset}>
        <X className="w-4 h-4 mr-2" />
        Reset Filters
      </Button>
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden md:flex items-center gap-4 bg-card rounded-xl p-4 border">
        <Select value={filters.sortBy} onValueChange={(value) => onFilterChange("sortBy", value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="match">Best Match</SelectItem>
            <SelectItem value="apr">Lowest APR</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="amount">Highest Loan Amount</SelectItem>
            <SelectItem value="funding">Fastest Funding</SelectItem>
            <SelectItem value="approval">Highest Approval Rate</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2">
          <Label className="text-sm whitespace-nowrap">Min Match:</Label>
          <div className="w-32">
            <Slider
              value={[filters.minMatchScore]}
              onValueChange={([value]) => onFilterChange("minMatchScore", value)}
              max={100}
              min={0}
              step={5}
            />
          </div>
          <span className="text-sm font-medium w-12">{filters.minMatchScore}%</span>
        </div>

        <Button
          variant={filters.promoOnly ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange("promoOnly", !filters.promoOnly)}
        >
          Promo Only
        </Button>

        <Button variant="ghost" size="sm" onClick={onReset}>
          <X className="w-4 h-4 mr-1" />
          Reset
        </Button>
      </div>

      {/* Mobile Filters */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters & Sort
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[60vh]">
            <SheetHeader>
              <SheetTitle>Filter Options</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}