import { Button as HeadlessButton } from "@headlessui/react";
import gwMerge from "../gw-merge";
import React from "react";
import Link from "./navigation/link";

const base = [
  "gw-cursor-pointer gw-relative gw-isolate gw-inline-flex gw-items-center gw-justify-center gw-gap-x-2 gw-font-semibold",
  // Disabled
  "data-[disabled]:gw-cursor-not-allowed data-[disabled]:gw-opacity-50",
];

// sizes can be one of the following:
// - xs
// - sm
// - md (default)
// - lg
// - xl
const sizes = {
  xs: "gw-px-2 gw-py-1 gw-text-xs",
  sm: "gw-px-3 gw-py-1.5 gw-text-sm",
  md: "gw-px-4 gw-py-2 gw-text-sm",
  lg: "gw-px-5 gw-py-3 gw-text-base",
  xl: "gw-px-6 gw-py-4 gw-text-lg",
};

// radius can be one of the following:
// - none
// - sm
// - md
// - lg
// - xl
const radii = {
  none: "gw-rounded-none",
  sm: "gw-rounded-sm",
  md: "gw-rounded-md",
  lg: "gw-rounded-lg",
  xl: "gw-rounded-xl",
};

// colors can be one of the following:
// - light
// - dark
// - primary
// - secondary
// - success
// - warning
// - danger
// - info
// - white
// - zinc
// - indigo
// - cyan
// - red
// - orange
// - amber
// - yellow
// - lime
// - green
// - emerald
// - teal
// - sky
// - blue
// - violet
// - purple
// - fuchsia
// - pink
// - rose
const colorsFilled = {
  light:
    "gw-bg-white gw-text-usace-black gw-border gw-border-gray/60 hover:gw-bg-gray-100/80 active:gw-bg-gray-200/70",
  dark: "gw-bg-gray-900 gw-text-white gw-border gw-border-gray-900/90 hover:gw-bg-gray-900/90 active:gw-bg-gray-900/80",
  primary:
    "gw-bg-blue-600 gw-text-white gw-border gw-border-blue-700/90 hover:gw-bg-blue-600/90 active:gw-bg-blue-600/80",
  secondary:
    "gw-bg-gray-600 gw-text-white gw-border gw-border-gray-700/90 hover:gw-bg-gray-600/90 active:gw-bg-gray-600/80",
  success:
    "gw-bg-green-600 gw-text-white gw-border gw-border-green-600/90 hover:gw-bg-green-600/90 active:gw-bg-green-600/80",
  warning:
    "gw-bg-orange-600 gw-text-white gw-border gw-border-orange-700/90 hover:gw-bg-orange-600/90 active:gw-bg-orange-600/80",
  danger:
    "gw-bg-red-600 gw-text-white gw-border gw-border-red-700/90 hover:gw-bg-red-600/90 active:gw-bg-red-600/80",
  info: "gw-bg-cyan-400 gw-text-cyan-950 gw-border gw-border-cyan-500/90 hover:gw-bg-cyan-400/80 active:gw-bg-cyan-400/70",
  white:
    "gw-bg-white gw-text-usace-black gw-border gw-border-usace-black/60 hover:gw-bg-gray-100/80 active:gw-bg-gray-200/70",
  zinc: "gw-bg-zinc-800 gw-text-white gw-border gw-border-zinc-800/90 hover:gw-bg-zinc-800/90 active:gw-bg-zinc-800/80",
  indigo:
    "gw-bg-indigo-600 gw-text-white gw-border gw-border-indigo-700/90 hover:gw-bg-indigo-600/90 active:gw-bg-indigo-600/80",
  cyan: "gw-bg-cyan-400 gw-text-cyan-950 gw-border gw-border-cyan-500/90 hover:gw-bg-cyan-400/80 active:gw-bg-cyan-400/70",
  red: "gw-bg-red-600 gw-text-white gw-border gw-border-red-700/90 hover:gw-bg-red-600/90 active:gw-bg-red-600/80",
  orange:
    "gw-bg-orange-600 gw-text-white gw-border gw-border-orange-700/90 hover:gw-bg-orange-600/90 active:gw-bg-orange-600/80",
  amber:
    "gw-bg-amber-600 gw-text-white gw-border gw-border-amber-700/90 hover:gw-bg-amber-600/90 active:gw-bg-amber-600/80",
  yellow:
    "gw-bg-yellow-600 gw-text-white gw-border gw-border-yellow-700/90 hover:gw-bg-yellow-600/90 active:gw-bg-yellow-600/80",
  lime: "gw-bg-lime-600 gw-text-white gw-border gw-border-lime-700/90 hover:gw-bg-lime-600/90 active:gw-bg-lime-600/80",
  green:
    "gw-bg-green-600 gw-text-white gw-border gw-border-green-700/90 hover:gw-bg-green-600/90 active:gw-bg-green-600/80",
  emerald:
    "gw-bg-emerald-600 gw-text-white gw-border gw-border-emerald-700/90 hover:gw-bg-emerald-600/90 active:gw-bg-emerald-600/80",
  teal: "gw-bg-teal-600 gw-text-white gw-border gw-border-teal-700/90 hover:gw-bg-teal-600/90 active:gw-bg-teal-600/80",
  sky: "gw-bg-sky-600 gw-text-white gw-border gw-border-sky-700/90 hover:gw-bg-sky-600/90 active:gw-bg-sky-600/80",
  blue: "gw-bg-blue-600 gw-text-white gw-border gw-border-blue-700/90 hover:gw-bg-blue-600/90 active:gw-bg-blue-600/80",
  violet:
    "gw-bg-violet-600 gw-text-white gw-border gw-border-violet-700/90 hover:gw-bg-violet-600/90 active:gw-bg-violet-600/80",
  purple:
    "gw-bg-purple-600 gw-text-white gw-border gw-border-purple-700/90 hover:gw-bg-purple-600/90 active:gw-bg-purple-600/80",
  fuchsia:
    "gw-bg-fuchsia-600 gw-text-white gw-border gw-border-fuchsia-700/90 hover:gw-bg-fuchsia-600/90 active:gw-bg-fuchsia-600/80",
  pink: "gw-bg-pink-600 gw-text-white gw-border gw-border-pink-700/90 hover:gw-bg-pink-600/90 active:gw-bg-pink-600/80",
  rose: "gw-bg-rose-600 gw-text-white gw-border gw-border-rose-700/90 hover:gw-bg-rose-600/90 active:gw-bg-rose-600/80",
};

const colorsOutline = {
  light:
    "gw-bg-transparent gw-text-usace-black gw-border gw-border-gray/60 hover:gw-bg-gray-100/80 active:gw-bg-gray-200/70",
  dark: "gw-bg-transparent gw-text-usace-black gw-border gw-border-gray-900/90 hover:gw-bg-gray-900 hover:gw-text-white active:gw-bg-gray-200/70",
  primary:
    "gw-bg-transparent gw-text-blue-600 gw-border gw-border-blue-700/90 gw-border gw-border-blue-700/90 hover:gw-bg-blue-600/90 hover:gw-text-white active:gw-bg-blue-600/80",
  secondary:
    "gw-bg-transparent gw-text-gray-700 gw-border gw-border-gray-700/90 hover:gw-bg-gray-600/90 hover:gw-text-white active:gw-bg-gray-600/80",
  success:
    "gw-bg-transparent gw-text-green-600 gw-border gw-border-green-600/90 hover:gw-bg-green-600/90 hover:gw-text-white active:gw-bg-green-600/80",
  warning:
    "gw-bg-transparent gw-text-orange-600 gw-border gw-border-orange-700/90 hover:gw-bg-orange-600/90 hover:gw-text-white active:gw-bg-orange-600/80",
  danger:
    "gw-bg-transparent gw-text-red-600 gw-border gw-border-red-700/90 hover:gw-bg-red-600/90 hover:gw-text-white active:gw-bg-red-600/80",
  info: "gw-bg-transparent gw-text-cyan-400 gw-text-cyan-950 gw-border gw-border-cyan-500/90 hover:gw-bg-cyan-400/80 hover:gw-text-white active:gw-bg-cyan-400/70",
  white:
    "gw-bg-transparent gw-text-white gw-border gw-border-white hover:gw-bg-gray-100/80  active:gw-bg-gray-200/70",
  zinc: "gw-bg-transparent gw-text-zinc-800 gw-border gw-border-zinc-800/90 hover:gw-bg-zinc-800/90 hover:gw-text-white active:gw-bg-zinc-800/80",
  indigo:
    "gw-bg-transparent gw-text-indigo-600 gw-border gw-border-indigo-700/90 hover:gw-bg-indigo-600/90 hover:gw-text-white active:gw-bg-indigo-600/80",
  cyan: "gw-bg-transparent gw-text-cyan-400 gw-text-cyan-950 gw-border gw-border-cyan-500/90 hover:gw-bg-cyan-400/80 hover:gw-text-white active:gw-bg-cyan-400/70",
  red: "gw-bg-transparent gw-text-red-600 gw-border gw-border-red-700/90 hover:gw-bg-red-600/90 hover:gw-text-white active:gw-bg-red-600/80",
  orange:
    "gw-bg-transparent gw-text-orange-600 gw-border gw-border-orange-700/90 hover:gw-bg-orange-600/90 hover:gw-text-white active:gw-bg-orange-600/80",
  amber:
    "gw-bg-transparent gw-text-amber-600 gw-border gw-border-amber-700/90 hover:gw-bg-amber-600/90 hover:gw-text-white active:gw-bg-amber-600/80",
  yellow:
    "gw-bg-transparent gw-text-yellow-600 gw-border gw-border-yellow-700/90 hover:gw-bg-yellow-600/90 hover:gw-text-white active:gw-bg-yellow-600/80",
  lime: "gw-bg-transparent gw-text-lime-600 gw-border gw-border-lime-700/90 hover:gw-bg-lime-600/90 hover:gw-text-white active:gw-bg-lime-600/80",
  green:
    "gw-bg-transparent gw-text-green-600 gw-border gw-border-green-700/90 hover:gw-bg-green-600/90 hover:gw-text-white active:gw-bg-green-600/80",
  emerald:
    "gw-bg-transparent gw-text-emerald-600 gw-border gw-border-emerald-700/90 hover:gw-bg-emerald-600/90 hover:gw-text-white active:gw-bg-emerald-600/80",
  teal: "gw-bg-transparent gw-text-teal-600 gw-border gw-border-teal-700/90 hover:gw-bg-teal-600/90 hover:gw-text-white active:gw-bg-teal-600/80",
  sky: "gw-bg-transparent gw-text-sky-600 gw-border gw-border-sky-700/90 hover:gw-bg-sky-600/90 hover:gw-text-white active:gw-bg-sky-600/80",
  blue: "gw-bg-transparent gw-text-blue-600 gw-border gw-border-blue-700/90 hover:gw-bg-blue-600/90 hover:gw-text-white active:gw-bg-blue-600/80",
  violet:
    "gw-bg-transparent gw-text-violet-600 gw-border gw-border-violet-700/90 hover:gw-bg-violet-600/90 hover:gw-text-white active:gw-bg-violet-600/80",
  purple:
    "gw-bg-transparent gw-text-purple-600 gw-border gw-border-purple-700/90 hover:gw-bg-purple-600/90 hover:gw-text-white active:gw-bg-purple-600/80",
  fuchsia:
    "gw-bg-transparent gw-text-fuchsia-600 gw-border gw-border-fuchsia-700/90 hover:gw-bg-fuchsia-600/90 hover:gw-text-white active:gw-bg-fuchsia-600/80",
  pink: "gw-bg-transparent gw-text-pink-600 gw-border gw-border-pink-700/90 hover:gw-bg-pink-600/90 hover:gw-text-white active:gw-bg-pink-600/80",
  rose: "gw-bg-transparent gw-text-rose-600 gw-border gw-border-rose-700/90 hover:gw-bg-rose-600/90 hover:gw-text-white active:gw-bg-rose-600/80",
};

const colorsPlain = {
  light: "gw-bg-transparent gw-text-gray-600",
  dark: "gw-bg-transparent gw-text-usace-black",
  primary: "gw-bg-transparent gw-text-blue-600",
  secondary: "gw-bg-transparent gw-text-gray-700",
  success: "gw-bg-transparent gw-text-green-600",
  warning: "gw-bg-transparent gw-text-orange-600",
  danger: "gw-bg-transparent gw-text-red-600",
  info: "gw-bg-transparent gw-text-cyan-400",
  white: "gw-bg-transparent gw-text-white",
  zinc: "gw-bg-transparent gw-text-zinc-800",
  indigo: "gw-bg-transparent gw-text-indigo-600",
  cyan: "gw-bg-transparent gw-text-cyan-400",
  red: "gw-bg-transparent gw-text-red-600",
  orange: "gw-bg-transparent gw-text-orange-600",
  amber: "gw-bg-transparent gw-text-amber-600",
  yellow: "gw-bg-transparent gw-text-yellow-600",
  lime: "gw-bg-transparent gw-text-lime-600",
  green: "gw-bg-transparent gw-text-green-600",
  emerald: "gw-bg-transparent gw-text-emerald-600",
  teal: "gw-bg-transparent gw-text-teal-600",
  sky: "gw-bg-transparent gw-text-sky-600",
  blue: "gw-bg-transparent gw-text-blue-600",
  violet: "gw-bg-transparent gw-text-violet-600",
  purple: "gw-bg-transparent gw-text-purple-600",
  fuchsia: "gw-bg-transparent gw-text-fuchsia-600",
  pink: "gw-bg-transparent gw-text-pink-600",
  rose: "gw-bg-transparent gw-text-rose-600",
};

export const Button = React.forwardRef(function Button(
  {
    style = "filled",
    color = "primary",
    size = "md",
    radius = "sm",
    outline,
    plain,
    className,
    children,
    ...props
  },
  ref
) {
  let classes = gwMerge(
    base,
    // styles.base,
    // outline
    //   ? styles.outline
    //   : plain
    //   ? styles.plain
    //   : gwMerge(styles.solid, styles.colors[color ?? "dark/zinc"]),
    radii[radius],
    sizes[size],
    style === "filled" ? colorsFilled[color] : "",
    style === "outline" ? colorsOutline[color] : "",
    style === "plain" ? colorsPlain[color] : "",
    className
  );

  return "href" in props ? (
    <Link {...props} className={classes} ref={ref}>
      <TouchTarget>{children}</TouchTarget>
    </Link>
  ) : (
    <HeadlessButton
      {...props}
      className={gwMerge(classes, "cursor-default")}
      ref={ref}
    >
      <TouchTarget>{children}</TouchTarget>
    </HeadlessButton>
  );
});

/* Expand the hit area to at least 44×44px on touch devices */
export function TouchTarget({ children }) {
  return (
    <>
      {children}
      <span
        className="gw-absolute gw-left-1/2 gw-top-1/2 gw-size-[max(gw-100%,gw-2.gw-75rem)gw-] gw--translate-x-1/2 gw--translate-y-1/2 gw-[@gw-media(gw-pointer:gw-fine)]:gw-hidden"
        aria-hidden="true"
      />
    </>
  );
}
