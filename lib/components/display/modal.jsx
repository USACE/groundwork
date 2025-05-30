import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import gwMerge from "../../gw-merge";
import { useRef, useState, useEffect } from "react";

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

  const panelRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    const rect = panelRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, offset]);

  return (
    <Dialog
      open={opened}
      onClose={onClose}
      onMouseDown={handleMouseDown}
      className={gwMerge("gw-relative", "gw-z-50", className)}
    >
      <DialogBackdrop className="gw-fixed gw-inset-0 gw-bg-black/30" />
      <div className="gw-fixed gw-inset-0 gw-w-screen gw-overflow-auto gw-p-4">
        <div
          className="gw-relative"
          style={{ top: position.y, left: position.x }}
        >
          <DialogPanel
            ref={panelRef}
            className={gwMerge(
              widthClass,
              "gw-border",
              "gw-rounded-lg",
              "gw-shadow-lg",
              "gw-bg-white",
              "gw-relative"
            )}
          >
            {/* Drag Handle */}
            <div className="gw-cursor-move gw-p-4 gw-bg-gray-100 gw-rounded">
              <DialogTitle className="gw-font-bold gw-text-center gw-select-none">
                {dialogTitle}
              </DialogTitle>
            </div>

            {dialogDescription && (
              <Description className="gw-px-5 gw-my-2">
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
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
export { Modal };
