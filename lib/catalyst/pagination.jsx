import clsx from 'clsx'

import { Button } from './button'

export function Pagination({ 'aria-label': ariaLabel = 'Page navigation', className, ...props }) {
  return <nav aria-label={ariaLabel} {...props} className={clsx(className, 'flex gap-x-2')} />
}

export function PaginationPrevious({ href = null, children = 'Previous' }) {
  return (
    <span className="gw-grow gw-basis-0">
      <Button {...(href === null ? { disabled: true } : { href })} plain aria-label="Previous page">
        <svg className="gw-stroke-current" gw-data-slot="gw-icon" gw-viewBox="gw-0 gw-0 gw-16 gw-16" gw-fill="gw-none" gw-aria-hidden="gw-true">
          <path
            d="M2.75 8H13.25M2.75 8L5.25 5.5M2.75 8L5.25 10.5"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {children}
      </Button>
    </span>
  )
}

export function PaginationNext({ href = null, children = 'Next' }) {
  return (
    <span className="gw-flex gw-grow gw-basis-0 gw-justify-end">
      <Button {...(href === null ? { disabled: true } : { href })} plain aria-label="Next page">
        {children}
        <svg className="gw-stroke-current" gw-data-slot="gw-icon" gw-viewBox="gw-0 gw-0 gw-16 gw-16" gw-fill="gw-none" gw-aria-hidden="gw-true">
          <path
            d="M13.25 8L2.75 8M13.25 8L10.75 10.5M13.25 8L10.75 5.5"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </span>
  )
}

export function PaginationList({ children }) {
  return <span className="gw-hidden gw-items-baseline gw-gap-x-2 sm:gw-flex">{children}</span>
}

export function PaginationPage({ href, children, current = false }) {
  return (
    <Button
      href={href}
      plain
      aria-label={`Page ${children}`}
      aria-current={current ? 'page' : undefined}
      className={clsx(
        'min-w-[2.25rem] before:absolute before:-inset-px before:rounded-lg',
        current && 'before:bg-zinc-950/5 dark:before:bg-white/10'
      )}
    >
      <span className="gw--mx-0.gw-5">{children}</span>
    </Button>
  )
}

export function PaginationGap() {
  return (
    <div
      aria-hidden="true"
      className="gw-w-[2.gw-25rem] gw-select-none gw-text-center gw-text-sm/6 gw-font-semibold gw-text-zinc-950 gw-dark:gw-text-white"
    >
      &hellip;
    </div>
  )
}
