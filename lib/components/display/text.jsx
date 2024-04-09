import { clsx } from "clsx";
import { Link } from "../link";

export function Text({ className, ...props }) {
  return (
    <p
      {...props}
      data-slot="text"
      className={clsx(
        "gw-text-sm/6 gw-text-zinc-500 md:gw-text-base/6 dark:gw-text-zinc-400",
        className
      )}
    />
  );
}

export function TextLink({ className, ...props }) {
  return (
    <Link
      {...props}
      className={clsx(
        "gw-text-zinc-950 gw-underline gw-decoration-zinc-950/50 data-[hover]:gw-decoration-zinc-950 dark:gw-text-white dark:gw-decoration-white/50 dark:data-[hover]:decoration-white",
        className
      )}
    />
  );
}

export function Strong({ className, ...props }) {
  return (
    <strong
      {...props}
      className={clsx(
        "gw-font-medium gw-text-zinc-950 dark:gw-text-white",
        className
      )}
    />
  );
}

export function Code({ className, ...props }) {
  return (
    <code
      {...props}
      className={clsx(
        "gw-rounded gw-border gw-border-zinc-950/10 gw-bg-zinc-950/[2.5%] gw-px-0.5 gw-text-sm gw-font-medium gw-text-zinc-950 sm:gw-text-[0.8125rem] dark:gw-border-white/20 dark:gw-bg-white/5 dark:gw-text-white",
        className
      )}
    />
  );
}
