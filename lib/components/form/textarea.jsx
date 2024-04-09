import { Textarea as HeadlessTextarea } from "@headlessui/react";
import { clsx } from "clsx";
import { forwardRef } from "react";

export const Textarea = forwardRef(function Textarea(
  { className, resizable = true, ...props },
  ref
) {
  return (
    <span
      data-slot="control"
      className={clsx([
        className,

        // Basic layout
        "gw-relative gw-block gw-w-full",

        // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
        "before:gw-absolute before:gw-inset-px before:gw-rounded-[calc(theme(borderRadius.lg)-1px)] before:gw-bg-white before:gw-shadow",

        // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
        "dark:before:gw-hidden",

        // Focus ring
        "after:gw-pointer-events-none after:gw-absolute after:gw-inset-0 after:gw-rounded-lg after:gw-ring-inset after:gw-ring-transparent sm:after:focus-within:gw-ring-2 sm:after:focus-within:gw-ring-blue-500",

        // Disabled state
        "has-[[data-disabled]]:gw-opacity-50 before:has-[[data-disabled]]:gw-bg-zinc-950/5 before:has-[[data-disabled]]:gw-shadow-none",
      ])}
    >
      <HeadlessTextarea
        ref={ref}
        className={clsx([
          // Basic layout
          "gw-relative gw-block gw-h-full gw-w-full gw-appearance-none gw-rounded-lg gw-px-[calc(theme(spacing[3.5])-1px)] gw-py-[calc(theme(spacing[2.5])-1px)] sm:gw-px-[calc(theme(spacing.3)-1px)] sm:gw-py-[calc(theme(spacing[1.5])-1px)]",

          // Typography
          "gw-text-base/6 gw-text-zinc-950 placeholder:gw-text-zinc-500 sm:gw-text-sm/6 dark:gw-text-white",

          // Border
          "gw-border gw-border-zinc-950/10 data-[hover]:gw-border-zinc-950/20 dark:gw-border-white/10 dark:data-[hover]:gw-border-white/20",

          // Background color
          "gw-bg-transparent dark:gw-bg-white/5",

          // Hide default focus styles
          "focus:gw-outline-none",

          // Invalid state
          "data-[invalid]:gw-border-red-500 data-[invalid]:data-[hover]:gw-border-red-500 data-[invalid]:dark:gw-border-red-600 data-[invalid]:data-[hover]:dark:gw-border-red-600",

          // Disabled state
          "disabled:gw-border-zinc-950/20 disabled:dark:gw-border-white/15 disabled:dark:gw-bg-white/[2.5%] dark:data-[hover]:disabled:gw-border-white/15",

          // Resizable
          resizable ? "gw-resize-y" : "gw-resize-none",
        ])}
        {...props}
      />
    </span>
  );
});
