import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        // ... your existing classNames ...
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className, ...restProps }) =>
          orientation === "left" ? (
            <ChevronLeft className={cn("size-4", className)} {...restProps} />
          ) : (
            <ChevronRight className={cn("size-4", className)} {...restProps} />
          ),
      }}
      {...props}
    />
  );
}

export { Calendar };
