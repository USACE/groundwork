"use client";

import gwMerge from "../gw-merge";
import { createContext, useContext, useState } from "react";
import { Link } from "./link";

const TableContext = createContext({
  bleed: false,
  dense: false,
  grid: false,
  striped: false,
});

export function Table({
  bleed = false,
  dense = false,
  grid = false,
  striped = false,
  className,
  children,
  ...props
}) {
  return (
    <TableContext.Provider value={{ bleed, dense, grid, striped }}>
      <div className="gw-flow-root">
        <div
          {...props}
          className={gwMerge(
            "gw--mx-[--gutter] gw-overflow-x-auto gw-whitespace-nowrap",
            className
          )}
        >
          <div
            className={gwMerge(
              "gw-inline-block gw-min-w-full gw-align-middle",
              !bleed && "sm:gw-px-[--gutter]"
            )}
          >
            <table role="presentation" className="gw-min-w-full gw-text-left gw-text-sm/6">
              {children}
            </table>
          </div>
        </div>
      </div>
    </TableContext.Provider>
  );
}

export function TableHead({ className, ...props }) {
  return (
    <thead
      className={gwMerge("gw-text-zinc-500 dark:gw-text-zinc-400", className)}
      {...props}
    />
  );
}

export function TableBody(props) {
  return <tbody {...props} />;
}

const TableRowContext = createContext({
  href: undefined,
  target: undefined,
  title: undefined,
});

export function TableRow({
  href,
  target,
  title,
  className,
  children,
  ...props
}) {
  let { striped } = useContext(TableContext);

  return (
    <TableRowContext.Provider value={{ href, target, title }}>
      <tr
        {...props}
        className={gwMerge(
          href &&
            "has-[[data-row-link][data-focus]]:gw-outline has-[[data-row-link][data-focus]]:gw-outline-2 has-[[data-row-link][data-focus]]:gw--outline-offset-2 has-[[data-row-link][data-focus]]:gw-outline-blue-500 dark:focus-within:gw-bg-white/[2.5%]",
          striped && "even:gw-bg-zinc-950/[2.5%] dark:even:gw-bg-white/[2.5%]",
          href && striped && "hover:gw-bg-zinc-950/5 dark:hover:gw-bg-white/5",
          href &&
            !striped &&
            "hover:gw-bg-zinc-950/[2.5%] dark:hover:gw-bg-white/[2.5%]",
          className
        )}
      >
        {children}
      </tr>
    </TableRowContext.Provider>
  );
}

export function TableHeader({ className, ...props }) {
  let { bleed, grid } = useContext(TableContext);

  return (
    <th
      {...props}
      className={gwMerge(
        "gw-border-b gw-border-b-zinc-950/10 gw-px-4 gw-py-2 gw-font-medium first:gw-pl-[var(--gutter,theme(spacing.2))] last:gw-pr-[var(--gutter,theme(spacing.2))] dark:gw-border-b-white/10",
        grid &&
          "gw-border-l gw-border-l-zinc-950/5 first:gw-border-l-0 dark:gw-border-l-white/5",
        !bleed && "sm:first:gw-pl-2 sm:last:gw-pr-2",
        className
      )}
    />
  );
}

export function TableCell({ className, children, ...props }) {
  let { bleed, dense, grid, striped } = useContext(TableContext);
  let { href, target, title } = useContext(TableRowContext);
  let [cellRef, setCellRef] = useState(null);
  // TODO: How to handle a table having th for 508. 
  // INFO: If no thead should the first column have a th
  // INFO: If a thead is present should the TableCell determine if it is in thead and use the <th> tag?
  return (
    <td
      ref={href ? setCellRef : undefined}
      {...props}
      className={gwMerge(
        "gw-relative gw-px-4 first:gw-pl-[var(--gutter,theme(spacing.2))] last:gw-pr-[var(--gutter,theme(spacing.2))]",
        !striped && "gw-border-b gw-border-zinc-950/5 dark:gw-border-white/5",
        grid &&
          "gw-border-l gw-border-l-zinc-950/5 first:gw-border-l-0 dark:gw-border-l-white/5",
        dense ? "gw-py-2.5" : "gw-py-4",
        !bleed && "sm:first:gw-pl-2 sm:last:gw-pr-2",
        className
      )}
    >
      {href && (
        <Link
          data-row-link
          href={href}
          target={target}
          aria-label={title}
          tabIndex={cellRef?.previousElementSibling === null ? 0 : -1}
          className="gw-absolute gw-inset-0 gw-focus:gw-outline-none"
        />
      )}
      {children}
    </td>
  );
}
