import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Description } from "../form/fieldset";
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
              <DialogTitle className="gw-font-bold">{dialogTitle}</DialogTitle>
            )}
            {dialogDescription && (
              <Description>{dialogDescription}</Description>
            )}
            <p>{children}</p>
            {buttons}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
export { Modal };
