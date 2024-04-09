import {
  Description as HeadlessDescription,
  Dialog as HeadlessDialog,
  DialogPanel as HeadlessDialogPanel,
  DialogTitle as HeadlessDialogTitle,
  Transition as HeadlessTransition,
  TransitionChild as HeadlessTransitionChild,
} from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { Text } from './text'

const sizes = {
  xs: 'sm:max-w-xs',
  sm: 'sm:max-w-sm',
  md: 'sm:max-w-md',
  lg: 'sm:max-w-lg',
  xl: 'sm:max-w-xl',
  '2xl': 'sm:max-w-2xl',
  '3xl': 'sm:max-w-3xl',
  '4xl': 'sm:max-w-4xl',
  '5xl': 'sm:max-w-5xl',
}

export function Alert({ open, onClose, size = 'md', className, children, ...props }) {
  return (
    <HeadlessTransition appear as={Fragment} show={open} {...props}>
      <HeadlessDialog onClose={onClose}>
        <HeadlessTransitionChild
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="gw-fixed gw-inset-0 gw-flex gw-w-screen gw-justify-center gw-overflow-y-auto gw-bg-zinc-950/15 gw-px-2 gw-py-2 gw-focus:gw-outline-0 sm:gw-px-6 sm:gw-py-8 lg:gw-px-8 lg:gw-py-16 gw-dark:gw-bg-zinc-950/50" />
        </HeadlessTransitionChild>

        <HeadlessTransitionChild
          className="gw-fixed gw-inset-0 gw-w-screen gw-overflow-y-auto gw-pt-6 sm:gw-pt-0"
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="gw-grid gw-min-h-full gw-grid-rows-[1fr_auto_1fr] gw-justify-items-center gw-p-8 sm:gw-grid-rows-[1fr_auto_3fr] sm:gw-p-4">
            <HeadlessTransitionChild
              as={HeadlessDialogPanel}
              className={clsx(
                className,
                sizes[size],
                'row-start-2 w-full rounded-2xl bg-white p-8 shadow-lg ring-1 ring-zinc-950/10 sm:rounded-2xl sm:p-6 dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline'
              )}
              enter="ease-out duration-100"
              enterFrom="scale-95"
              enterTo="scale-100"
              leave="ease-in duration-100"
              leaveFrom="scale-100"
              leaveTo="scale-100"
            >
              {children}
            </HeadlessTransitionChild>
          </div>
        </HeadlessTransitionChild>
      </HeadlessDialog>
    </HeadlessTransition>
  )
}

export function AlertTitle({ className, ...props }) {
  return (
    <HeadlessDialogTitle
      {...props}
      className={clsx(
        className,
        'text-balance text-center text-base/6 font-semibold text-zinc-950 sm:text-wrap sm:text-left sm:text-sm/6 dark:text-white'
      )}
    />
  )
}

export function AlertDescription({ className, ...props }) {
  return (
    <HeadlessDescription
      as={Text}
      {...props}
      className={clsx(className, 'mt-2 text-pretty text-center sm:text-left')}
    />
  )
}

export function AlertBody({ className, ...props }) {
  return <div {...props} className={clsx(className, 'mt-4')} />
}

export function AlertActions({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'mt-6 flex flex-col-reverse items-center justify-end gap-3 *:w-full sm:mt-4 sm:flex-row sm:*:w-auto'
      )}
    />
  )
}
