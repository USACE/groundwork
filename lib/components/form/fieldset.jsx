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
      "gw:[&>*+[data-slot=control]]:mt-6 gw:*:data-[slot=text]:mt-1",
      className,
    );
  }, [className]);
  return <HeadlessFieldset {...props} className={fieldsetClass} />;
}

export function Legend({ ...props }) {
  const legendClass = useMemo(() => {
    return gwMerge(
      "gw:text-base/6 gw:font-semibold gw:text-zinc-950 gw:data-disabled:opacity-50 gw:sm:text-sm/6 gw:dark:text-white",
      props.className,
    );
  }, [props.className]);
  return (
    <HeadlessLegend {...props} data-slot="legend" className={legendClass} />
  );
}

export function FieldGroup({ className, ...props }) {
  const fieldGroupClass = useMemo(() => {
    return gwMerge("gw:space-y-8", className);
  }, [className]);
  return <div {...props} data-slot="control" className={fieldGroupClass} />;
}

export function Field({ className, ...props }) {
  const fieldClass = useMemo(() => {
    return gwMerge(
      "gw:[&>[data-slot=label]+[data-slot=control]]:mt-3",
      "gw:[&>[data-slot=label]+[data-slot=description]]:mt-1",
      "gw:[&>[data-slot=description]+[data-slot=control]]:mt-3",
      "gw:[&>[data-slot=control]+[data-slot=description]]:mt-3",
      "gw:[&>[data-slot=control]+[data-slot=error]]:mt-3",
      "gw:*:data-[slot=label]:font-medium",
      className,
    );
  }, [className]);
  return <HeadlessField className={fieldClass} {...props} />;
}

export function Label({ className, ...props }) {
  const labelClass = useMemo(() => {
    return gwMerge(
      "gw:select-none gw:text-base/6 gw:text-zinc-950 gw:data-disabled:opacity-50 gw:sm:text-sm/6 gw:dark:text-white",
      className,
    );
  }, [className]);
  return <HeadlessLabel {...props} data-slot="label" className={labelClass} />;
}

export function Description({ className, disabled, ...props }) {
  const descriptionClass = useMemo(() => {
    return gwMerge(
      "gw:text-base/6 gw:text-zinc-500 gw:data-disabled:opacity-50 gw:sm:text-sm/6 gw:dark:text-zinc-400",
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
      "gw:text-base/6 gw:text-red-600 gw:data-disabled:opacity-50 gw:sm:text-sm/6 gw:dark:text-red-500",
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
