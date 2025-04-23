
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface CheckboxItemProps {
  id: string;
  label: string;
  className?: string;
}

export function CheckboxItem({ id, label, className }: CheckboxItemProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={cn("flex items-start gap-2", className)}>
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(value) => setChecked(!!value)}
        className="mt-1"
      />
      <label
        htmlFor={id}
        className={cn(
          "cursor-pointer text-sm transition-colors",
          checked ? "text-muted-foreground line-through" : "text-foreground"
        )}
      >
        {label}
      </label>
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
      className={cn("flex items-start gap-3 rounded-lg p-3", checked ? "bg-muted/50" : "", className)}
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={(value) => setChecked(!!value)}
        className="mt-1"
      />
      <label
        htmlFor={id}
        className={cn(
          "cursor-pointer text-sm transition-colors",
          checked ? "text-muted-foreground line-through" : "text-foreground"
        )}
      >
        {label}
      </label>
    </motion.div>
  );
}
