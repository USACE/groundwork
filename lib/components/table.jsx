"use client";

import gwMerge from "../gw-merge";
import { createContext, useContext, useState } from "react";
import Link from "./navigation/link";
import useScrollFade from "../hooks/useScrollFade";

const TableContext = createContext({
  bleed: false,
  dense: false,
  grid: false,
  striped: false,
  overflow: false,
  overflowHeight: "gw:max-h-[65vh]",
  stickyHeader: false,
});

export function Table({
  bleed = false,
  dense = false,
  grid = false,
  striped = false,
  className,
  children,
  overflow = false,
  overflowHeight = "gw:max-h-[65vh]",
  stickyHeader = false,
  ...props
}) {
  // Create fade at bottom of table to indicate more content (scrollable)
  const { scrollRef, showFade } = useScrollFade();

  return (
    <TableContext.Provider
      value={{
        bleed,
        dense,
        grid,
        striped,
        overflow,
        overflowHeight,
        stickyHeader,
      }}
    >
      <div className="gw:flow-root">
        <div
          {...props}
          className={gwMerge(
            "gw:-mx-(--gutter) gw:overflow-x-auto gw:whitespace-nowrap",
            "gw:relative",
            className,
          )}
        >
          <div
            ref={scrollRef}
            className={gwMerge(
              "gw:inline-block gw:min-w-full gw:align-middle",
              !bleed && "gw:sm:px-(--gutter)",
              overflow && "gw:overflow-y-auto",
              overflow && overflowHeight && overflowHeight,
            )}
          >
            <table
              role="presentation"
              className="gw:min-w-full gw:text-left gw:text-sm/6"
            >
              {children}
            </table>
          </div>
          {showFade && overflow && (
            <div className="gw:pointer-events-none gw:absolute gw:bottom-0 gw:left-0 gw:right-0 gw:h-8 gw:bg-linear-to-t gw:from-white gw:dark:from-zinc-950 gw:to-transparent" />
          )}
        </div>
      </div>
    </TableContext.Provider>
  );
}

export function TableHead({ className, ...props }) {
  let { overflow, stickyHeader } = useContext(TableContext);
  if (!overflow && stickyHeader)
    console.warn(
      "stickyHeader is set to true but overflow is not set. This will not work as expected. Please set overflow to true.",
    );
  const overflowClass =
    "gw:z-10 gw:sticky gw:top-0 gw:bg-white gw:box-shadow gw:dark:bg-zinc-950/50 gw:backdrop-blur-(--backdrop-blur)";
  return (
    <thead
      className={gwMerge(
        "gw:text-zinc-500 gw:dark:text-zinc-400",
        className,
        overflow && stickyHeader && overflowClass,
      )}
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
            "gw:has-[[data-row-link][data-focus]]:outline gw:has-[[data-row-link][data-focus]]:-outline-offset-2 gw:has-[[data-row-link][data-focus]]:outline-blue-500 gw:dark:focus-within:bg-white/2.5",
          striped && "gw:even:bg-zinc-950/2.5 gw:dark:even:bg-white/2.5",
          href && striped && "gw:hover:bg-zinc-950/5 gw:dark:hover:bg-white/5",
          href &&
            !striped &&
            "gw:hover:bg-zinc-950/2.5 gw:dark:hover:bg-white/2.5",
          className,
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
        "gw:border-b gw:border-b-zinc-950/10 gw:px-4 gw:py-2 gw:font-medium gw:first:pl-(--gutter,--spacing(2)) gw:last:pr-(--gutter,--spacing(2)) gw:dark:border-b-white/10",
        grid &&
          "gw:border-l gw:border-l-zinc-950/5 gw:first:border-l-0 gw:dark:border-l-white/5",
        !bleed && "gw:sm:first:pl-2 gw:sm:last:pr-2",
        className,
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
        "gw:relative gw:px-4 gw:first:pl-(--gutter,--spacing(2)) gw:last:pr-(--gutter,--spacing(2))",
        !striped && "gw:border-b gw:border-zinc-950/5 gw:dark:border-white/5",
        grid &&
          "gw:border-l gw:border-l-zinc-950/5 gw:first:border-l-0 gw:dark:border-l-white/5",
        dense ? "gw:py-2.5" : "gw:py-4",
        !bleed && "gw:sm:first:pl-2 gw:sm:last:pr-2",
        className,
      )}
    >
      {href && (
        <Link
          data-row-link
          href={href}
          target={target}
          aria-label={title}
          tabIndex={cellRef?.previousElementSibling === null ? 0 : -1}
          className="gw:absolute gw:inset-0 gw:focus:gw:outline-none"
        />
      )}
      {children}
    </td>
  );
}
