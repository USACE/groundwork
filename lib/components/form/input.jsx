import { Input as HeadlessInput } from "@headlessui/react";
import gwMerge from "../../gw-merge";
import { forwardRef } from "react";

const dateTypes = ["date", "datetime-local", "month", "time", "week"];

export const Input = forwardRef(function Input({ className, ...props }, ref) {
  return (
    <span
      data-slot="control"
      className={gwMerge([
        className,

        // Basic layout
        "gw-relative gw-block gw-w-full",

        // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
        "before:gw-absolute before:gw-inset-px before:gw-rounded-[calc(theme(borderRadius.lg)-1px)] before:gw-bg-white before:gw-shadow",

        // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
        "dark:before:gw-hidden",

        // Focus ring
        "after:gw-pointer-events-none after:gw-absolute after:gw-inset-0 after:gw-rounded-lg after:gw-ring-inset after:gw-ring-transparent sm:after:gw-focus-within:ring-2 sm:after:gw-focus-within:gw-ring-blue-500",

        // Disabled state
        "has-[[data-disabled]]:gw-opacity-50 before:has-[[data-disabled]]:gw-bg-zinc-950/5 before:has-[[data-disabled]]:gw-shadow-none",

        // Invalid state
        "before:has-[[data-invalid]]:gw-shadow-red-500/10",
      ])}
    >
      <HeadlessInput
        ref={ref}
        className={gwMerge([
          // Date classes
          props.type &&
            dateTypes.includes(props.type) && [
              "[&::-webkit-datetime-edit-fields-wrapper]:gw-p-0",
              "[&::-webkit-date-and-time-value]:gw-min-h-[1.5em]",
              "[&::-webkit-datetime-edit]:gw-inline-flex",
              "[&::-webkit-datetime-edit]:gw-p-0",
              "[&::-webkit-datetime-edit-year-field]:gw-p-0",
              "[&::-webkit-datetime-edit-month-field]:gw-p-0",
              "[&::-webkit-datetime-edit-day-field]:gw-p-0",
              "[&::-webkit-datetime-edit-hour-field]:gw-p-0",
              "[&::-webkit-datetime-edit-minute-field]:gw-p-0",
              "[&::-webkit-datetime-edit-second-field]:gw-p-0",
              "[&::-webkit-datetime-edit-millisecond-field]:gw-p-0",
              "[&::-webkit-datetime-edit-meridiem-field]:gw-p-0",
            ],

          // Basic layout
          "gw-relative gw-block gw-w-full gw-appearance-none gw-rounded-lg gw-px-[calc(theme(spacing[3.5])-1px)] gw-py-[calc(theme(spacing[2.5])-1px)] sm:gw-px-[calc(theme(spacing[3])-1px)] sm:gw-py-[calc(theme(spacing[1.5])-1px)]",

          // Typography
          "gw-text-base/6 gw-text-zinc-950 placeholder:gw-text-zinc-500 sm:gw-text-sm/6 dark:gw-text-white",

          // Border
          "gw-border gw-border-zinc-950/10 data-[hover]:gw-border-zinc-950/20 dark:gw-border-white/10 dark:data-[hover]:gw-border-white/20",

          // Background color
          "gw-bg-transparent dark:gw-bg-white/5",

          // Hide default focus styles
          "focus:gw-outline-none",

          // Invalid state
          "data-[invalid]:gw-border-red-500 data-[invalid]:data-[hover]:gw-border-red-500 data-[invalid]:dark:gw-border-red-500 data-[invalid]:data-[hover]:dark:gw-border-red-500",

          // Disabled state
          "data-[disabled]:gw-border-zinc-950/20 dark:gw-data-[hover]:data-[disabled]:gw-border-white/15 data-[disabled]:dark:gw-border-white/15 data-[disabled]:dark:gw-bg-white/[2.5%]",
        ])}
        {...props}
      />
    </span>
  );
});
