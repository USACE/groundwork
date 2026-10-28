import gwMerge from "../../gw-merge";
import Link from "../navigation/link";

export function Text({ className, ...props }) {
  return (
    <p
      {...props}
      data-slot="text"
      className={gwMerge(
        "gw:text-sm/6 gw:text-zinc-500 gw:md:text-base/6 gw:dark:text-zinc-400",
        className,
      )}
    />
  );
}

export function TextLink({ className, ...props }) {
  return (
    <Link
      {...props}
      className={gwMerge(
        "gw:text-zinc-950 gw:underline gw:decoration-zinc-950/50 gw:data-hover:decoration-zinc-950 gw:dark:text-white gw:dark:decoration-white/50 dark:data-[hover]:decoration-white",
        className,
      )}
    />
  );
}

export function Strong({ className, ...props }) {
  return (
    <strong
      {...props}
      className={gwMerge(
        "gw:font-medium gw:text-zinc-950 gw:dark:text-white",
        className,
      )}
    />
  );
}

export function Code({ className, ...props }) {
  return (
    <code
      {...props}
      className={gwMerge(
        "gw:rounded gw:border gw:border-zinc-950/10 gw:bg-zinc-950/2.5 gw:px-0.5 gw:text-sm gw:font-medium gw:text-zinc-950 gw:sm:text-[0.8125rem] gw:dark:border-white/20 gw:dark:bg-white/5 gw:dark:text-white",
        className,
      )}
    />
  );
}
