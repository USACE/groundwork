import { Button as HeadlessButton } from "@headlessui/react";
import React, { useMemo } from "react";
import { TouchTarget } from "../button";
import Link from "../navigation/link";
import gwMerge from "../../gw-merge";

const colors = {
  red: "gw:bg-red-500/15 gw:text-red-700 gw:group-data-hover:bg-red-500/25 gw:dark:bg-red-500/10 gw:dark:text-red-400 gw:dark:group-data-hover:bg-red-500/20",
  orange:
    "gw:bg-orange-500/15 gw:text-orange-700 gw:group-data-hover:bg-orange-500/25 gw:dark:bg-orange-500/10 gw:dark:text-orange-400 gw:dark:group-data-hover:bg-orange-500/20",
  amber:
    "gw:bg-amber-400/20 gw:text-amber-700 gw:group-data-hover:bg-amber-400/30 gw:dark:bg-amber-400/10 gw:dark:text-amber-400 gw:dark:group-data-hover:bg-amber-400/15",
  yellow:
    "gw:bg-yellow-400/20 gw:text-yellow-700 gw:group-data-hover:bg-yellow-400/30 gw:dark:bg-yellow-400/10 gw:dark:text-yellow-300 gw:dark:group-data-hover:bg-yellow-400/15",
  lime: "gw:bg-lime-400/20 gw:text-lime-700 gw:group-data-hover:bg-lime-400/30 gw:dark:bg-lime-400/10 gw:dark:text-lime-300 gw:dark:group-data-hover:bg-lime-400/15",
  green:
    "gw:bg-green-500/15 gw:text-green-700 gw:group-data-hover:bg-green-500/25 gw:dark:bg-green-500/10 gw:dark:text-green-400 gw:dark:group-data-hover:bg-green-500/20",
  emerald:
    "gw:bg-emerald-500/15 gw:text-emerald-700 gw:group-data-hover:bg-emerald-500/25 gw:dark:bg-emerald-500/10 gw:dark:text-emerald-400 gw:dark:group-data-hover:bg-emerald-500/20",
  teal: "gw:bg-teal-500/15 gw:text-teal-700 gw:group-data-hover:bg-teal-500/25 gw:dark:bg-teal-500/10 gw:dark:text-teal-300 gw:dark:group-data-hover:bg-teal-500/20",
  cyan: "gw:bg-cyan-400/20 gw:text-cyan-700 gw:group-data-hover:bg-cyan-400/30 gw:dark:bg-cyan-400/10 gw:dark:text-cyan-300 gw:dark:group-data-hover:bg-cyan-400/15",
  sky: "gw:bg-sky-500/15 gw:text-sky-700 gw:group-data-hover:bg-sky-500/25 gw:dark:bg-sky-500/10 gw:dark:text-sky-300 gw:dark:group-data-hover:bg-sky-500/20",
  blue: "gw:bg-blue-500/15 gw:text-blue-700 gw:group-data-hover:bg-blue-500/25 gw:dark:text-blue-400 gw:dark:group-data-hover:bg-blue-500/25",
  indigo:
    "gw:bg-indigo-500/15 gw:text-indigo-700 gw:group-data-hover:bg-indigo-500/25 gw:dark:text-indigo-400 gw:dark:group-data-hover:bg-indigo-500/20",
  violet:
    "gw:bg-violet-500/15 gw:text-violet-700 gw:group-data-hover:bg-violet-500/25 gw:dark:text-violet-400 gw:dark:group-data-hover:bg-violet-500/20",
  purple:
    "gw:bg-purple-500/15 gw:text-purple-700 gw:group-data-hover:bg-purple-500/25 gw:dark:text-purple-400 gw:dark:group-data-hover:bg-purple-500/20",
  fuchsia:
    "gw:bg-fuchsia-400/15 gw:text-fuchsia-700 gw:group-data-hover:bg-fuchsia-400/25 gw:dark:bg-fuchsia-400/10 gw:dark:text-fuchsia-400 gw:dark:group-data-hover:bg-fuchsia-400/20",
  pink: "gw:bg-pink-400/15 gw:text-pink-700 gw:group-data-hover:bg-pink-400/25 gw:dark:bg-pink-400/10 gw:dark:text-pink-400 gw:dark:group-data-hover:bg-pink-400/20",
  rose: "gw:bg-rose-400/15 gw:text-rose-700 gw:group-data-hover:bg-rose-400/25 gw:dark:bg-rose-400/10 gw:dark:text-rose-400 gw:dark:group-data-hover:bg-rose-400/20",
  zinc: "gw:bg-zinc-600/10 gw:text-zinc-700 gw:group-data-hover:bg-zinc-600/20 gw:dark:bg-white/5 gw:dark:text-zinc-400 gw:dark:group-data-hover:bg-white/10",
};

export function Badge({ color = "zinc", className, ...props }) {
  const badgeClass = useMemo(() => {
    return gwMerge(
      "gw:inline-flex gw:items-center gw:gap-x-1.5 gw:rounded-md gw:px-1.5 gw:py-0.5 gw:text-sm/5 gw:font-medium gw:sm:text-xs/5 gw:forced-colors:outline",
      colors[color],
      className,
    );
  }, [className]);
  return <span {...props} className={badgeClass} />;
}

export const BadgeButton = React.forwardRef(function BadgeButton(
  { color = "zinc", className, children, ...props },
  ref,
) {
  const badgeButtonClass = useMemo(() => {
    return gwMerge(
      "gw:group gw:relative gw:inline-flex gw:rounded-md gw:focus:outline-hidden gw:data-focus:outline gw:data-focus:outline-2 gw:data-focus:outline-offset-2 gw:data-focus:outline-blue-500",
      className,
    );
  }, [className]);

  return "href" in props ? (
    <Link {...props} className={badgeButtonClass} ref={ref}>
      <TouchTarget>
        <Badge color={color}>{children}</Badge>
      </TouchTarget>
    </Link>
  ) : (
    <HeadlessButton {...props} className={badgeButtonClass} ref={ref}>
      <TouchTarget>
        <Badge color={color}>{children}</Badge>
      </TouchTarget>
    </HeadlessButton>
  );
});
