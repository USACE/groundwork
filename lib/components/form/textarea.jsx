import { Textarea as HeadlessTextarea } from "@headlessui/react";
import gwMerge from "../../gw-merge";
import { forwardRef } from "react";

export const Textarea = forwardRef(function Textarea(
  { className, resizable = true, ...props },
  ref,
) {
  return (
    <span
      data-slot="control"
      className={gwMerge([
        className,

        // Basic layout
        "gw:relative gw:block gw:w-full",

        // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
        "gw:before:absolute gw:before:inset-px gw:before:rounded-[calc(var(--gw:radius-lg)-1px)] gw:before:bg-white gw:before:shadow",

        // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
        "gw:dark:before:hidden",

        // Focus ring
        "gw:after:pointer-events-none gw:after:absolute gw:after:inset-0 gw:after:rounded-lg gw:after:ring-inset gw:after:ring-transparent gw:sm:focus-within:after:ring-2 gw:sm:focus-within:after:ring-blue-500",

        // Disabled state
        "gw:has-data-disabled:opacity-50 gw:has-data-disabled:before:bg-zinc-950/5 gw:has-data-disabled:before:shadow-none",
      ])}
    >
      <HeadlessTextarea
        ref={ref}
        className={gwMerge([
          // Basic layout
          "gw:relative gw:block gw:h-full gw:w-full gw:appearance-none gw:rounded-lg gw:px-[calc(--spacing(3.5)-1px)] gw:py-[calc(--spacing(2.5)-1px)] gw:sm:px-[calc(--spacing(3)-1px)] gw:sm:py-[calc(--spacing(1.5)-1px)]",

          // Typography
          "gw:text-base/6 gw:text-zinc-950 gw:placeholder:text-zinc-500 gw:sm:text-sm/6 gw:dark:text-white",

          // Border
          "gw:border gw:border-zinc-950/10 gw:data-hover:border-zinc-950/20 gw:dark:border-white/10 gw:dark:data-hover:border-white/20",

          // Background color
          "gw:bg-transparent gw:dark:bg-white/5",

          // Hide default focus styles
          "gw:focus:outline-hidden",

          // Invalid state
          "gw:data-invalid:border-red-500 gw:data-invalid:data-hover:border-red-500 gw:dark:data-invalid:border-red-600 gw:dark:data-invalid:data-hover:border-red-600",

          // Disabled state
          "gw:disabled:border-zinc-950/20 gw:dark:disabled:border-white/15 gw:dark:disabled:bg-white/2.5 gw:dark:data-hover:disabled:border-white/15",

          // Resizable
          resizable ? "gw:resize-y" : "gw:resize-none",
        ])}
        {...props}
      />
    </span>
  );
});
