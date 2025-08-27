import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import gwMerge from "../../gw-merge";
import { WIDTH_OPTIONS } from "../../utils/sizes";

const roleOptions = ["dialog", "alertdialog"];

function Modal({
  opened = false,
  onClose,
  dialogTitle,
  dialogDescription,
  isStatic = false,
  autoFocus=false,
  dialogTransition=false,
  dialogPanelTransition= false,
  unmount = true,
  role='dialog',
  buttons,
  size = "2xl",
  className,
  children,
}) {
  // Check if the size exists
  if (!WIDTH_OPTIONS[size]) {
    console.error(
      `Invalid size prop: ${size}. Must be one of: 'sx', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', 'full'`,
    );
    console.warn(
      `Defaulting to '2xl' for size of <Modal modalTitle="${dialogTitle}" .../>`,
    );
    size = "2xl";
  }
  
  // Check if Role exists
  if (!roleOptions[role]) {
    console.error(
      `Invalid role option for dialog ${role}. Must be one of: 'dialog','alertdialog'`)
      console.warn(
      `Defaulting to 'dialog' for role of <Modal modalTitle="${dialogTitle}" .../>`,
    );
    role = "dialog";
    
  }

  return (
    <Dialog
      open={opened}
      onClose={onClose}
      static= {isStatic}
      autoFocus={autoFocus}
      dialogTransition={dialogTransition}
      unount={unmount}
      role={role}
      className={gwMerge("gw-relative", "gw-z-[200]", className)}
    >
      <DialogBackdrop className="gw-fixed gw-inset-0 gw-bg-black/30" />
      <div className="gw-fixed gw-inset-0 gw-w-screen gw-overflow-auto gw-p-4">
        <div className="gw-flex gw-min-h-full gw-items-center gw-justify-center">
          <DialogPanel
            className={gwMerge(
              WIDTH_OPTIONS[size],
              "gw-space-y-4",
              "gw-border",
              "gw-rounded-lg",
              "gw-shadow-lg",
              "gw-bg-white",
              "gw-p-12",
            )}
            transition={dialogPanelTransition}
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
