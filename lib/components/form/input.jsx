import { Input as HeadlessInput } from "@headlessui/react";
import gwMerge from "../../gw-merge";
import { forwardRef } from "react";

const dateTypes = ["date", "datetime-local", "month", "time", "week"];

export const Input = forwardRef(function Input({ className, ...props }, ref) {
  return (
    <span
      data-slot="control"
      className={gwMerge([
        // Basic layout
        "gw:relative gw:block gw:w-full",

        // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
        "gw:before:absolute gw:before:inset-px gw:before:rounded-[calc(var(--gw-radius-lg)-1px)] gw:before:bg-white gw:before:shadow",

        // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
        "gw:dark:before:hidden",

        // Focus ring
        "gw:after:pointer-events-none gw:after:absolute gw:after:inset-0 gw:after:rounded-lg gw:after:ring-inset gw:after:ring-transparent sm:after:gw-focus-within:ring-2 sm:after:gw-focus-within:gw-ring-blue-500",

        // Disabled state
        "gw:has-data-disabled:opacity-50 gw:has-data-disabled:before:bg-zinc-950/5 gw:has-data-disabled:before:shadow-none",

        // Invalid state
        "gw:has-data-invalid:before:shadow-red-500/10",

        className,
      ])}
    >
      <HeadlessInput
        ref={ref}
        className={gwMerge([
          // Date classes
          props.type &&
            dateTypes.includes(props.type) && [
              "gw:[&::-webkit-datetime-edit-fields-wrapper]:p-0",
              "gw:[&::-webkit-date-and-time-value]:min-h-[1.5em]",
              "gw:[&::-webkit-datetime-edit]:inline-flex",
              "gw:[&::-webkit-datetime-edit]:p-0",
              "gw:[&::-webkit-datetime-edit-year-field]:p-0",
              "gw:[&::-webkit-datetime-edit-month-field]:p-0",
              "gw:[&::-webkit-datetime-edit-day-field]:p-0",
              "gw:[&::-webkit-datetime-edit-hour-field]:p-0",
              "gw:[&::-webkit-datetime-edit-minute-field]:p-0",
              "gw:[&::-webkit-datetime-edit-second-field]:p-0",
              "gw:[&::-webkit-datetime-edit-millisecond-field]:p-0",
              "gw:[&::-webkit-datetime-edit-meridiem-field]:p-0",
            ],

          // Basic layout
          "gw:relative gw:block gw:w-full gw:appearance-none gw:rounded-lg gw:px-[calc(--spacing(3.5)-1px)] gw:py-[calc(--spacing(2.5)-1px)] gw:sm:px-[calc(--spacing(3)-1px)] gw:sm:py-[calc(--spacing(1.5)-1px)]",

          // Typography
          "gw:text-base/6 gw:text-zinc-950 gw:placeholder:text-zinc-500 gw:sm:text-sm/6 gw:dark:text-white",

          // Border
          "gw:border gw:border-zinc-950/10 gw:data-hover:border-zinc-950/20 gw:dark:border-white/10 gw:dark:data-hover:border-white/20",

          // Background color
          "gw:bg-transparent gw:dark:bg-white/5",

          // Hide default focus styles
          "gw:focus:outline-hidden",

          // Invalid state
          "gw:data-invalid:border-red-500 gw:data-invalid:data-hover:border-red-500 gw:dark:data-invalid:border-red-500 gw:dark:data-invalid:data-hover:border-red-500",

          // Disabled state
          "gw:data-disabled:border-zinc-950/20 dark:gw-data-[hover]:data-[disabled]:gw-border-white/15 gw:dark:data-disabled:border-white/15 gw:dark:data-disabled:bg-white/2.5",
        ])}
        {...props}
      />
    </span>
  );
});
