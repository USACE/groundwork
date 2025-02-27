import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import gwMerge from "../../gw-merge";

const WIDTH_CLASSES = {
  sx: "gw-max-w-xs",
  sm: "gw-max-w-sm",
  md: "gw-max-w-md",
  lg: "gw-max-w-lg",
  xl: "gw-max-w-xl",
  "2xl": "gw-max-w-2xl",
  "4xl": "gw-max-w-4xl",
  full: "gw-max-w-full",
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
  if (!WIDTH_CLASSES[size]) {
    console.error(
      `Invalid size prop: ${size}. Must be one of: 'sx', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', 'full'`
    );
    console.warn(
      `Defaulting to '2xl' for size of <Modal modalTitle="${dialogTitle}" .../>`
    );
    size = "2xl";
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
              WIDTH_CLASSES[size],
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
