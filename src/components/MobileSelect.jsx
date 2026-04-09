import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Check } from "lucide-react";

/**
 * MobileSelect — renders a standard Select on desktop,
 * and a bottom Drawer on mobile for better touch UX.
 *
 * Props: value, onValueChange, placeholder, options: [{ value, label }], className
 */
export default function MobileSelect({ value, onValueChange, placeholder, options = [], className, triggerClassName }) {
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const selectedLabel = options.find(o => o.value === value)?.label || placeholder;

  if (isMobile) {
    return (
      <>
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className={`flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm select-none ${triggerClassName || ""}`}
        >
          <span className={value ? "text-foreground" : "text-muted-foreground"}>{selectedLabel}</span>
          <svg className="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{placeholder || "Select"}</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-8 space-y-1">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onValueChange(opt.value);
                    setDrawerOpen(false);
                  }}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm hover:bg-secondary transition-colors select-none"
                >
                  <span>{opt.label}</span>
                  {value === opt.value && <Check className="w-4 h-4 text-primary" />}
                </button>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={triggerClassName}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}