import {
  Description as HeadlessDescription,
  Field as HeadlessField,
  Fieldset as HeadlessFieldset,
  Label as HeadlessLabel,
  Legend as HeadlessLegend,
} from "@headlessui/react";
import { useMemo } from "react";
import gwMerge from "../../gw-merge";

export function Fieldset({ className, ...props }) {
  const fieldsetClass = useMemo(() => {
    return gwMerge(
      "[&>*+[data-slot=control]]:gw-mt-6 [&>[data-slot=text]]:gw-mt-1",
      className,
    );
  }, [className]);
  return <HeadlessFieldset {...props} className={fieldsetClass} />;
}

export function Legend({ ...props }) {
  const legendClass = useMemo(() => {
    return gwMerge(
      "gw-text-base/6 gw-font-semibold gw-text-zinc-950 data-[disabled]:gw-opacity-50 sm:gw-text-sm/6 dark:gw-text-white",
      props.className,
    );
  }, [props.className]);
  return (
    <HeadlessLegend {...props} data-slot="legend" className={legendClass} />
  );
}

export function FieldGroup({ className, ...props }) {
  const fieldGroupClass = useMemo(() => {
    return gwMerge("gw-space-y-8", className);
  }, [className]);
  return <div {...props} data-slot="control" className={fieldGroupClass} />;
}

export function Field({ className, ...props }) {
  const fieldClass = useMemo(() => {
    return gwMerge(
      "[&>[data-slot=label]+[data-slot=control]]:gw-mt-3",
      "[&>[data-slot=label]+[data-slot=description]]:gw-mt-1",
      "[&>[data-slot=description]+[data-slot=control]]:gw-mt-3",
      "[&>[data-slot=control]+[data-slot=description]]:gw-mt-3",
      "[&>[data-slot=control]+[data-slot=error]]:gw-mt-3",
      "[&>[data-slot=label]]:gw-font-medium",
      className,
    );
  }, [className]);
  return <HeadlessField className={fieldClass} {...props} />;
}

export function Label({ className, ...props }) {
  const labelClass = useMemo(() => {
    return gwMerge(
      "gw-select-none gw-text-base/6 gw-text-zinc-950 data-[disabled]:gw-opacity-50 sm:gw-text-sm/6 dark:gw-text-white",
      className,
    );
  }, [className]);
  return <HeadlessLabel {...props} data-slot="label" className={labelClass} />;
}

export function Description({ className, disabled, ...props }) {
  const descriptionClass = useMemo(() => {
    return gwMerge(
      "gw-text-base/6 gw-text-zinc-500 data-[disabled]:gw-opacity-50 sm:gw-text-sm/6 dark:gw-text-zinc-400",
      className,
    );
  }, [className]);
  return (
    <HeadlessDescription
      {...props}
      data-slot="description"
      className={descriptionClass}
    />
  );
}

export function ErrorMessage({ className, disabled, ...props }) {
  const errorMessageClass = useMemo(() => {
    return gwMerge(
      "gw-text-base/6 gw-text-red-600 data-[disabled]:gw-opacity-50 sm:gw-text-sm/6 dark:gw-text-red-500",
      className,
    );
  }, [className]);
  return (
    <HeadlessDescription
      {...props}
      data-slot="error"
      className={errorMessageClass}
    />
  );
}
