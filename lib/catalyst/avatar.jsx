import { Button as HeadlessButton } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'
import { TouchTarget } from './button'
import { Link } from './link'

export function Avatar({ src = null, square = false, initials, alt = '', className, ...props }) {
  return (
    <span
      data-slot="avatar"
      className={clsx(
        className,

        // Basic layout
        'inline-grid align-middle *:col-start-1 *:row-start-1',

        // Add the correct border radius
        square ? 'rounded-[20%] *:rounded-[20%]' : 'rounded-full *:rounded-full'
      )}
      {...props}
    >
      {initials && (
        <svg
          className="gw-select-none gw-fill-current gw-text-[48px] gw-font-medium gw-uppercase"
          viewBox="0 0 100 100"
          aria-hidden={alt ? undefined : 'true'}
        >
          {alt && <title>{alt}</title>}
          <text x="50%" y="50%" alignmentBaseline="middle" dominantBaseline="middle" textAnchor="middle" dy=".125em">
            {initials}
          </text>
        </svg>
      )}
      {src && <img aria-label={alt} src={src} alt={alt} />}
      {/* Add an inset border that sits on top of the image */}
      <span className="gw-ring-1 gw-ring-inset gw-ring-black/5 gw-dark:gw-ring-white/5 gw-forced-colors:gw-outline" gw-aria-hidden="gw-true" />
    </span>
  )
}

export const AvatarButton = React.forwardRef(function AvatarButton(
  { src, square = false, initials, alt, className, ...props },
  ref
) {
  let classes = clsx(
    className,
    square ? 'rounded-lg' : 'rounded-full',
    'relative focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500'
  )

  return 'href' in props ? (
    <Link {...props} className={classes} ref={ref}>
      <TouchTarget>
        <Avatar src={src} square={square} initials={initials} alt={alt} />
      </TouchTarget>
    </Link>
  ) : (
    <HeadlessButton {...props} className={classes} ref={ref}>
      <TouchTarget>
        <Avatar src={src} square={square} initials={initials} alt={alt} />
      </TouchTarget>
    </HeadlessButton>
  )
})
