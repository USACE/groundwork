import { Button as HeadlessButton } from "@headlessui/react";
import { clsx } from "clsx";
import React from "react";
import { Link } from "./link";

const base = [
  "cursor-pointer relative isolate inline-flex items-center justify-center gap-x-2 font-semibold",
  // Disabled
  "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
];

// sizes can be one of the following:
// - xs
// - sm
// - md (default)
// - lg
// - xl
const sizes = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
  xl: "px-6 py-4 text-lg",
};

// radius can be one of the following:
// - none
// - sm
// - md
// - lg
// - xl
const radii = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
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
    "bg-white text-usace-black border border-gray/60 hover:bg-gray-100/80 active:bg-gray-200/70",
  dark: "bg-gray-900 text-white border border-gray-900/90 hover:bg-gray-900/90 active:bg-gray-900/80",
  primary:
    "bg-blue-600 text-white border border-blue-700/90 hover:bg-blue-600/90 active:bg-blue-600/80",
  secondary:
    "bg-gray-600 text-white border border-gray-700/90 hover:bg-gray-600/90 active:bg-gray-600/80",
  success:
    "bg-green-600 text-white border border-green-600/90 hover:bg-green-600/90 active:bg-green-600/80",
  warning:
    "bg-orange-600 text-white border border-orange-700/90 hover:bg-orange-600/90 active:bg-orange-600/80",
  danger:
    "bg-red-600 text-white border border-red-700/90 hover:bg-red-600/90 active:bg-red-600/80",
  info: "bg-cyan-400 text-cyan-950 border border-cyan-500/90 hover:bg-cyan-400/80 active:bg-cyan-400/70",
  white:
    "bg-white text-usace-black border border-usace-black/60 hover:bg-gray-100/80 active:bg-gray-200/70",
  zinc: "bg-zinc-800 text-white border border-zinc-800/90 hover:bg-zinc-800/90 active:bg-zinc-800/80",
  indigo:
    "bg-indigo-600 text-white border border-indigo-700/90 hover:bg-indigo-600/90 active:bg-indigo-600/80",
  cyan: "bg-cyan-400 text-cyan-950 border border-cyan-500/90 hover:bg-cyan-400/80 active:bg-cyan-400/70",
  red: "bg-red-600 text-white border border-red-700/90 hover:bg-red-600/90 active:bg-red-600/80",
  orange:
    "bg-orange-600 text-white border border-orange-700/90 hover:bg-orange-600/90 active:bg-orange-600/80",
  amber:
    "bg-amber-600 text-white border border-amber-700/90 hover:bg-amber-600/90 active:bg-amber-600/80",
  yellow:
    "bg-yellow-600 text-white border border-yellow-700/90 hover:bg-yellow-600/90 active:bg-yellow-600/80",
  lime: "bg-lime-600 text-white border border-lime-700/90 hover:bg-lime-600/90 active:bg-lime-600/80",
  green:
    "bg-green-600 text-white border border-green-700/90 hover:bg-green-600/90 active:bg-green-600/80",
  emerald:
    "bg-emerald-600 text-white border border-emerald-700/90 hover:bg-emerald-600/90 active:bg-emerald-600/80",
  teal: "bg-teal-600 text-white border border-teal-700/90 hover:bg-teal-600/90 active:bg-teal-600/80",
  sky: "bg-sky-600 text-white border border-sky-700/90 hover:bg-sky-600/90 active:bg-sky-600/80",
  blue: "bg-blue-600 text-white border border-blue-700/90 hover:bg-blue-600/90 active:bg-blue-600/80",
  violet:
    "bg-violet-600 text-white border border-violet-700/90 hover:bg-violet-600/90 active:bg-violet-600/80",
  purple:
    "bg-purple-600 text-white border border-purple-700/90 hover:bg-purple-600/90 active:bg-purple-600/80",
  fuchsia:
    "bg-fuchsia-600 text-white border border-fuchsia-700/90 hover:bg-fuchsia-600/90 active:bg-fuchsia-600/80",
  pink: "bg-pink-600 text-white border border-pink-700/90 hover:bg-pink-600/90 active:bg-pink-600/80",
  rose: "bg-rose-600 text-white border border-rose-700/90 hover:bg-rose-600/90 active:bg-rose-600/80",
};

const colorsOutline = {
  light:
    "bg-transparent text-usace-black border border-gray/60 hover:bg-gray-100/80 active:bg-gray-200/70",
  dark: "bg-transparent text-usace-black border border-gray-900/90 hover:bg-gray-900 hover:text-white active:bg-gray-200/70",
  primary:
    "bg-transparent text-blue-600 border border-blue-700/90 border border-blue-700/90 hover:bg-blue-600/90 hover:text-white active:bg-blue-600/80",
  secondary:
    "bg-transparent text-gray-700 border border-gray-700/90 hover:bg-gray-600/90 hover:text-white active:bg-gray-600/80",
  success:
    "bg-transparent text-green-600 border border-green-600/90 hover:bg-green-600/90 hover:text-white active:bg-green-600/80",
  warning:
    "bg-transparent text-orange-600 border border-orange-700/90 hover:bg-orange-600/90 hover:text-white active:bg-orange-600/80",
  danger:
    "bg-transparent text-red-600 border border-red-700/90 hover:bg-red-600/90 hover:text-white active:bg-red-600/80",
  info: "bg-transparent text-cyan-400 text-cyan-950 border border-cyan-500/90 hover:bg-cyan-400/80 hover:text-white active:bg-cyan-400/70",
  white:
    "bg-transparent text-white border border-white hover:bg-gray-100/80  active:bg-gray-200/70",
  zinc: "bg-transparent text-zinc-800 border border-zinc-800/90 hover:bg-zinc-800/90 hover:text-white active:bg-zinc-800/80",
  indigo:
    "bg-transparent text-indigo-600 border border-indigo-700/90 hover:bg-indigo-600/90 hover:text-white active:bg-indigo-600/80",
  cyan: "bg-transparent text-cyan-400 text-cyan-950 border border-cyan-500/90 hover:bg-cyan-400/80 hover:text-white active:bg-cyan-400/70",
  red: "bg-transparent text-red-600 border border-red-700/90 hover:bg-red-600/90 hover:text-white active:bg-red-600/80",
  orange:
    "bg-transparent text-orange-600 border border-orange-700/90 hover:bg-orange-600/90 hover:text-white active:bg-orange-600/80",
  amber:
    "bg-transparent text-amber-600 border border-amber-700/90 hover:bg-amber-600/90 hover:text-white active:bg-amber-600/80",
  yellow:
    "bg-transparent text-yellow-600 border border-yellow-700/90 hover:bg-yellow-600/90 hover:text-white active:bg-yellow-600/80",
  lime: "bg-transparent text-lime-600 border border-lime-700/90 hover:bg-lime-600/90 hover:text-white active:bg-lime-600/80",
  green:
    "bg-transparent text-green-600 border border-green-700/90 hover:bg-green-600/90 hover:text-white active:bg-green-600/80",
  emerald:
    "bg-transparent text-emerald-600 border border-emerald-700/90 hover:bg-emerald-600/90 hover:text-white active:bg-emerald-600/80",
  teal: "bg-transparent text-teal-600 border border-teal-700/90 hover:bg-teal-600/90 hover:text-white active:bg-teal-600/80",
  sky: "bg-transparent text-sky-600 border border-sky-700/90 hover:bg-sky-600/90 hover:text-white active:bg-sky-600/80",
  blue: "bg-transparent text-blue-600 border border-blue-700/90 hover:bg-blue-600/90 hover:text-white active:bg-blue-600/80",
  violet:
    "bg-transparent text-violet-600 border border-violet-700/90 hover:bg-violet-600/90 hover:text-white active:bg-violet-600/80",
  purple:
    "bg-transparent text-purple-600 border border-purple-700/90 hover:bg-purple-600/90 hover:text-white active:bg-purple-600/80",
  fuchsia:
    "bg-transparent text-fuchsia-600 border border-fuchsia-700/90 hover:bg-fuchsia-600/90 hover:text-white active:bg-fuchsia-600/80",
  pink: "bg-transparent text-pink-600 border border-pink-700/90 hover:bg-pink-600/90 hover:text-white active:bg-pink-600/80",
  rose: "bg-transparent text-rose-600 border border-rose-700/90 hover:bg-rose-600/90 hover:text-white active:bg-rose-600/80",
};

const colorsPlain = {
  light: "bg-transparent text-gray-600",
  dark: "bg-transparent text-usace-black",
  primary: "bg-transparent text-blue-600",
  secondary: "bg-transparent text-gray-700",
  success: "bg-transparent text-green-600",
  warning: "bg-transparent text-orange-600",
  danger: "bg-transparent text-red-600",
  info: "bg-transparent text-cyan-400",
  white: "bg-transparent text-white",
  zinc: "bg-transparent text-zinc-800",
  indigo: "bg-transparent text-indigo-600",
  cyan: "bg-transparent text-cyan-400",
  red: "bg-transparent text-red-600",
  orange: "bg-transparent text-orange-600",
  amber: "bg-transparent text-amber-600",
  yellow: "bg-transparent text-yellow-600",
  lime: "bg-transparent text-lime-600",
  green: "bg-transparent text-green-600",
  emerald: "bg-transparent text-emerald-600",
  teal: "bg-transparent text-teal-600",
  sky: "bg-transparent text-sky-600",
  blue: "bg-transparent text-blue-600",
  violet: "bg-transparent text-violet-600",
  purple: "bg-transparent text-purple-600",
  fuchsia: "bg-transparent text-fuchsia-600",
  pink: "bg-transparent text-pink-600",
  rose: "bg-transparent text-rose-600",
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
  let classes = clsx(
    base,
    // styles.base,
    // outline
    //   ? styles.outline
    //   : plain
    //   ? styles.plain
    //   : clsx(styles.solid, styles.colors[color ?? "dark/zinc"]),
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
      className={clsx(classes, "cursor-default")}
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
        className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
        aria-hidden="true"
      />
    </>
  );
}
