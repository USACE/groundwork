import { Button as HeadlessButton } from "@headlessui/react";
import React, { useMemo } from "react";
import { TouchTarget } from "../button";
import { Link } from "../link";
import gwMerge from "../../gw-merge";

const colors = {
  red: "gw-bg-red-500/15 gw-text-red-700 group-data-[hover]:gw-bg-red-500/25 dark:gw-bg-red-500/10 dark:gw-text-red-400 dark:group-data-[hover]:gw-bg-red-500/20",
  orange:
    "gw-bg-orange-500/15 gw-text-orange-700 group-data-[hover]:gw-bg-orange-500/25 dark:gw-bg-orange-500/10 dark:gw-text-orange-400 dark:group-data-[hover]:gw-bg-orange-500/20",
  amber:
    "gw-bg-amber-400/20 gw-text-amber-700 group-data-[hover]:gw-bg-amber-400/30 dark:gw-bg-amber-400/10 dark:gw-text-amber-400 dark:group-data-[hover]:gw-bg-amber-400/15",
  yellow:
    "gw-bg-yellow-400/20 gw-text-yellow-700 group-data-[hover]:gw-bg-yellow-400/30 dark:gw-bg-yellow-400/10 dark:gw-text-yellow-300 dark:group-data-[hover]:gw-bg-yellow-400/15",
  lime: "gw-bg-lime-400/20 gw-text-lime-700 group-data-[hover]:gw-bg-lime-400/30 dark:gw-bg-lime-400/10 dark:gw-text-lime-300 dark:group-data-[hover]:gw-bg-lime-400/15",
  green:
    "gw-bg-green-500/15 gw-text-green-700 group-data-[hover]:gw-bg-green-500/25 dark:gw-bg-green-500/10 dark:gw-text-green-400 dark:group-data-[hover]:gw-bg-green-500/20",
  emerald:
    "gw-bg-emerald-500/15 gw-text-emerald-700 group-data-[hover]:gw-bg-emerald-500/25 dark:gw-bg-emerald-500/10 dark:gw-text-emerald-400 dark:group-data-[hover]:gw-bg-emerald-500/20",
  teal: "gw-bg-teal-500/15 gw-text-teal-700 group-data-[hover]:gw-bg-teal-500/25 dark:gw-bg-teal-500/10 dark:gw-text-teal-300 dark:group-data-[hover]:gw-bg-teal-500/20",
  cyan: "gw-bg-cyan-400/20 gw-text-cyan-700 group-data-[hover]:gw-bg-cyan-400/30 dark:gw-bg-cyan-400/10 dark:gw-text-cyan-300 dark:group-data-[hover]:gw-bg-cyan-400/15",
  sky: "gw-bg-sky-500/15 gw-text-sky-700 group-data-[hover]:gw-bg-sky-500/25 dark:gw-bg-sky-500/10 dark:gw-text-sky-300 dark:group-data-[hover]:gw-bg-sky-500/20",
  blue: "gw-bg-blue-500/15 gw-text-blue-700 group-data-[hover]:gw-bg-blue-500/25 dark:gw-text-blue-400 dark:group-data-[hover]:gw-bg-blue-500/25",
  indigo:
    "gw-bg-indigo-500/15 gw-text-indigo-700 group-data-[hover]:gw-bg-indigo-500/25 dark:gw-text-indigo-400 dark:group-data-[hover]:gw-bg-indigo-500/20",
  violet:
    "gw-bg-violet-500/15 gw-text-violet-700 group-data-[hover]:gw-bg-violet-500/25 dark:gw-text-violet-400 dark:group-data-[hover]:gw-bg-violet-500/20",
  purple:
    "gw-bg-purple-500/15 gw-text-purple-700 group-data-[hover]:gw-bg-purple-500/25 dark:gw-text-purple-400 dark:group-data-[hover]:gw-bg-purple-500/20",
  fuchsia:
    "gw-bg-fuchsia-400/15 gw-text-fuchsia-700 group-data-[hover]:gw-bg-fuchsia-400/25 dark:gw-bg-fuchsia-400/10 dark:gw-text-fuchsia-400 dark:group-data-[hover]:gw-bg-fuchsia-400/20",
  pink: "gw-bg-pink-400/15 gw-text-pink-700 group-data-[hover]:gw-bg-pink-400/25 dark:gw-bg-pink-400/10 dark:gw-text-pink-400 dark:group-data-[hover]:gw-bg-pink-400/20",
  rose: "gw-bg-rose-400/15 gw-text-rose-700 group-data-[hover]:gw-bg-rose-400/25 dark:gw-bg-rose-400/10 dark:gw-text-rose-400 dark:group-data-[hover]:gw-bg-rose-400/20",
  zinc: "gw-bg-zinc-600/10 gw-text-zinc-700 group-data-[hover]:gw-bg-zinc-600/20 dark:gw-bg-white/5 dark:gw-text-zinc-400 dark:group-data-[hover]:gw-bg-white/10",
};

export function Badge({ color = "zinc", className, ...props }) {
  const badgeClass = useMemo(() => {
    return gwMerge(
      "gw-inline-flex gw-items-center gw-gap-x-1.5 gw-rounded-md gw-px-1.5 gw-py-0.5 gw-text-sm/5 gw-font-medium sm:gw-text-xs/5 forced-colors:gw-outline",
      colors[color],
      className
    );
  }, [className]);
  return <span {...props} className={badgeClass} />;
}

export const BadgeButton = React.forwardRef(function BadgeButton(
  { color = "zinc", className, children, ...props },
  ref
) {
  const badgeButtonClass = useMemo(() => {
    return gwMerge(
      "gw-group gw-relative gw-inline-flex gw-rounded-md focus:gw-outline-none data-[focus]:gw-outline data-[focus]:gw-outline-2 data-[focus]:gw-outline-offset-2 data-[focus]:gw-outline-blue-500",
      className
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
