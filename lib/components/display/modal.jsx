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
  buttons,
  size = "2xl",
  className,
  children,
}) {
    // Check if the size exists
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
              "gw-bg-white",
              "gw-p-12"
            )}
          >
            {dialogTitle && (
              <DialogTitle className="gw-font-bold gw-text-center">
                {dialogTitle}
              </DialogTitle>
            )}
            {dialogDescription && (
              <Description>{dialogDescription}</Description>
            )}
            {children}
            {buttons}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
export { Modal };
