import {
  Description as HeadlessDescription,
  Field as HeadlessField,
  Fieldset as HeadlessFieldset,
  Label as HeadlessLabel,
  Legend as HeadlessLegend,
} from "@headlessui/react";
import clsx from "clsx";

export function Fieldset({ className, ...props }) {
  return (
    <HeadlessFieldset
      {...props}
      className={clsx(
        className,
        "[&>*+[data-slot=control]]:gw-mt-6 [&>[data-slot=text]]:gw-mt-1"
      )}
    />
  );
}

export function Legend({ ...props }) {
  return (
    <HeadlessLegend
      {...props}
      data-slot="legend"
      className={clsx(
        props.className,
        "gw-text-base/6 gw-font-semibold gw-text-zinc-950 data-[disabled]:gw-opacity-50 sm:gw-text-sm/6 dark:gw-text-white"
      )}
    />
  );
}

export function FieldGroup({ className, ...props }) {
  return (
    <div
      {...props}
      data-slot="control"
      className={clsx(className, "gw-space-y-8")}
    />
  );
}

export function Field({ className, ...props }) {
  return (
    <HeadlessField
      className={clsx(
        className,
        "[&>[data-slot=label]+[data-slot=control]]:gw-mt-3",
        "[&>[data-slot=label]+[data-slot=description]]:gw-mt-1",
        "[&>[data-slot=description]+[data-slot=control]]:gw-mt-3",
        "[&>[data-slot=control]+[data-slot=description]]:gw-mt-3",
        "[&>[data-slot=control]+[data-slot=error]]:gw-mt-3",
        "[&>[data-slot=label]]:gw-font-medium"
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }) {
  return (
    <HeadlessLabel
      {...props}
      data-slot="label"
      className={clsx(
        className,
        "gw-select-none gw-text-base/6 gw-text-zinc-950 data-[disabled]:gw-opacity-50 sm:gw-text-sm/6 dark:gw-text-white"
      )}
    />
  );
}

export function Description({ className, disabled, ...props }) {
  return (
    <HeadlessDescription
      {...props}
      data-slot="description"
      className={clsx(
        className,
        "gw-text-base/6 gw-text-zinc-500 data-[disabled]:gw-opacity-50 sm:gw-text-sm/6 dark:gw-text-zinc-400"
      )}
    />
  );
}

export function ErrorMessage({ className, disabled, ...props }) {
  return (
    <HeadlessDescription
      {...props}
      data-slot="error"
      className={clsx(
        className,
        "gw-text-base/6 gw-text-red-600 data-[disabled]:gw-opacity-50 sm:gw-text-sm/6 dark:gw-text-red-500"
      )}
    />
  );
}
