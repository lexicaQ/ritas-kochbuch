
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxItemProps {
  id: string;
  label: string;
  className?: string;
}

export function CheckboxItem({ id, label, className }: CheckboxItemProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div 
      className={cn(
        "flex items-start gap-2 cursor-pointer rounded-lg transition-all p-1",
        checked ? "bg-cookbook-50" : "hover:bg-cookbook-50/50",
        className
      )}
      onClick={() => setChecked(!checked)}
    >
      <div className={cn(
        "flex h-5 w-5 rounded-md items-center justify-center border transition-colors mt-0.5",
        checked ? "bg-cookbook-700 border-cookbook-700" : "border-cookbook-300"
      )}>
        {checked && <Check size={12} className="text-white" />}
      </div>
      <span
        className={cn(
          "text-sm transition-colors",
          checked ? "text-gray-400 line-through" : "text-gray-700"
        )}
      >
        {label}
      </span>
    </div>
  );
}

export function CheckboxStepItem({ id, label, className }: CheckboxItemProps) {
  const [checked, setChecked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => setChecked(!checked)}
      className={cn(
        "flex items-start gap-3 rounded-lg p-3 transition-all cursor-pointer",
        checked ? "bg-cookbook-100/50 border border-cookbook-200" : "hover:bg-cookbook-50/50 border border-cookbook-100/50",
        className
      )}
    >
      <div className={cn(
        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-medium transition-colors",
        checked ? "bg-cookbook-700 text-white" : "bg-cookbook-200 text-cookbook-700"
      )}>
        <Check size={14} className={checked ? "opacity-100" : "opacity-0"} />
      </div>
      <span
        className={cn(
          "text-sm transition-colors",
          checked ? "text-gray-400 line-through" : "text-gray-700"
        )}
      >
        {label}
      </span>
    </motion.div>
  );
}
