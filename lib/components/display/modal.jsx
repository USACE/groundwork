import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import gwMerge from "../../gw-merge";

const WIDTH_OPTIONS = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
};

function Modal({
  opened = false,
  onClose,
  dialogTitle,
  dialogDescription,
  footer,
  size = "2xl",
  className,
  children,
}) {
  const widthClass = WIDTH_OPTIONS[size] ?? WIDTH_OPTIONS["2xl"];
  if (!WIDTH_OPTIONS[size]) {
    console.warn(
      `Modal: invalid size "${size}" passed. Falling back to "2xl".`
    );
  }

  return (
    <Dialog
      open={opened}
      onClose={onClose}
      className={gwMerge("gw-relative", "gw-z-50", className)}
    >
      <DialogBackdrop className="gw-fixed gw-inset-0 gw-bg-black/30" />
      <div className="gw-fixed gw-inset-0 gw-w-screen gw-overflow-auto gw-p-4">
        <div className="gw-flex gw-min-h-full gw-items-center gw-justify-center">
          <DialogPanel
            className={gwMerge(
              widthClass,
              "gw-space-y-4",
              "gw-border",
              "gw-rounded-lg",
              "gw-shadow-lg",
              "gw-bg-white"
            )}
          >
            {dialogTitle && (
              <DialogTitle className="gw-font-bold gw-text-center gw-p-4 gw-text-lg gw-bg-slate-200 dark:gw-bg-slate-600 dark:gw-text-white gw-rounded-t">
                {dialogTitle}
              </DialogTitle>
            )}
            {dialogDescription && (
              <Description className="gw-px-4 gw-py-2">
                {dialogDescription}
              </Description>
            )}
            <div className="gw-overflow-auto gw-h-full gw-px-5 gw-bg-white dark:gw-bg-slate-700 dark:gw-text-white">
              {children}
            </div>
            {footer && (
              <div className="gw-px-12 gw-py-4 gw-rounded-b gw-bg-slate-200">
                {footer}
              </div>
            )}

            {/* Resize Handle */}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
export { Modal };
