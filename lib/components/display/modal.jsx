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

// Set initial window size and track window resize to handle responsive formatting.
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    windowWidth: undefined,
    windowHeight: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // set size when window changes
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const roleOptions = ["dialog", "alertdialog"];

function Modal({
  opened = false,
  onClose,
  dialogTitle,
  dialogDescription,
  footer,
  isStatic = false,
  autoFocus = false,
  dialogTransition = false,
  dialogPanelTransition = false,
  unmount = true,
  role = "dialog",
  size,
  className,
  background,
  children,
}) {
  const widthClass = WIDTH_OPTIONS[size] ?? WIDTH_OPTIONS["2xl"];
  // Check if the size exists
  if (!WIDTH_OPTIONS[size]) {
    console.warn(
      `Modal: invalid size "${size}" passed. Falling back to "2xl".`,
    );
  }
  // Check if Role exists
  if (!roleOptions.includes(role)) {
    console.error(
      `Invalid role option for dialog ${role}. Must be one of: 'dialog','alertdialog'`,
    );
    console.warn(
      `Defaulting to 'dialog' for role of <Modal modalTitle="${dialogTitle}" .../>`,
    );
    role = "dialog";
  }

  const panelRef = useRef(null);
  // Modal Defaults
  const [dimensions, setDimensions] = useState({ width: 600, height: 400 });
  const [position, setPosition] = useState({ x: 0, y: 0 }); //May not be needed
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [resizing, setResizing] = useState(false);
  const { windowWidth, windowHeight } = useWindowSize();

  //set the plot size dynamically based on the initial screen size
  useEffect(() => {
    if (!windowHeight || !windowWidth) {
      return;
    }
    // use functions to format plot width and height
    //If a phone in portrait, fill most of the screen
    if (windowWidth < 500) {
      setDimensions({ width: windowWidth * 0.75, height: windowHeight * 0.75 });
      return;
    }
    //If a phone in landscape, only fill half the screen
    if (windowHeight < 500) {
      setDimensions({ width: windowWidth * 0.75, height: windowHeight * 0.7 });
      return;
    }
    //if window width is less than window height (portrait mode on tablet or other device), fill most of the screen
    if (windowWidth < windowHeight) {
      setDimensions({ width: windowWidth * 0.75, height: windowHeight * 0.75 });
      return;
    }
    //if landscape mode on large device, limit the width of the plot
    setDimensions({ width: windowWidth * 0.5, height: windowHeight * 0.75 });
  }, [windowWidth, windowHeight]);

  const handlePointerDown = (e) => {
    if (!panelRef.current) return;
    const rect = panelRef?.current?.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMove = (e) => {
    if (!panelRef.current) return;
    if (resizing) {
      const rect = panelRef?.current?.getBoundingClientRect();
      //check if the resized modal window exceeds the height or width of the window
      if (
        e.clientX - rect.left > windowWidth ||
        e.clientY - rect.top > windowHeight
      ) {
        //if yet, set the modal window at the smallest of either the window height/width or user input width/height
        setDimensions({
          width: Math.min(windowWidth, e.clientX - rect.left),
          height: Math.min(windowHeight, e.clientY - rect.top),
        });
      } else {
        //Set the minimum modal size (300 width, 200 height)
        setDimensions({
          width: Math.max(300, e.clientX - rect.left),
          height: Math.max(200, e.clientY - rect.top),
        });
      }
    }
  };

  const handleRelease = () => {
    setResizing(false);
  };

  useEffect(() => {
    //Converted from mouse based events to pointer events. Pointer events handle mouse/stylus/trackpad/finger inputs.
    const onPointerMove = (event) => {
      handleMove(event);
    };

    if (resizing) {
      // handle resizing inputs
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", handleRelease);
      window.addEventListener("pointercancel", handleRelease); // Fired if the OS interrupts the gesture
    }

    return () => {
      // remove event inputs when done
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", handleRelease);
      window.removeEventListener("pointercancel", handleRelease);
    };
    // Ensure all values read by handleMove are in the dependency array to prevent stale closures
  }, [resizing, offset, windowWidth, windowHeight]);

  return (
    <Dialog
      open={opened}
      onClose={onClose}
      onPointerDown={handlePointerDown}
      static={isStatic}
      autoFocus={autoFocus}
      transition={dialogTransition}
      unmount={unmount}
      role={role}
      className={gwMerge("gw-relative", "gw-z-[200]", className)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
        zIndex: 1000 /* Ensure it's on top of other content */,
      }}
    >
      <DialogBackdrop className="gw-fixed gw-inset-0 gw-bg-black/30" />
      <div
        style={
          ({
            background: "white",
            padding: "20px",
            overflow: "hidden",
            borderRadius: "5px",
            zIndex: 1001,
          },
          dimensions.width && dimensions.height
            ? {
                width: dimensions.width,
                height: dimensions.height,
                maxWidth: widthClass,
                maxHeight: "95%",
                //minWidth: "50%",
              }
            : undefined)
        }
      >
        <div className="">
          {" "}
          {/*gw-flex gw-min-h-full gw-items-center gw-justify-center*/}
          <div
            className="gw-relative"
            style={{ top: position.y, left: position.x }}
          ></div>
          <DialogPanel
            ref={panelRef}
            className={gwMerge(
              widthClass,
              "gw-border",
              "gw-rounded-lg",
              "gw-shadow-lg",
              "gw-bg-white",
              "gw-relative",
            )}
            transition={dialogPanelTransition}
          >
            {dialogTitle && (
              <div className="gw-cursor-move gw-p-4 gw-bg-gray-100 gw-rounded">
                <DialogTitle className="gw-font-bold gw-text-center gw-select-none">
                  {dialogTitle}
                </DialogTitle>
              </div>
            )}
            {dialogDescription && (
              <Description className="gw-px-5 gw-my-2">
                {dialogDescription}
              </Description>
            )}
            <div className="gw-overflow-auto gw-h-full gw-px-5 gw-bg-white dark:gw-bg-slate-700 dark:gw-text-white">
              {children}
            </div>
            <div className="gw-flex gw-items-center  gw-bg-gray-100 gw-rounded-b">
              <div className="gw-px-4 gw-py-4">{footer}</div>
              <div
                onPointerDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setResizing(true);
                }}
                className="gw-w-6 gw-h-6 gw-cursor-se-resize gw-ml-auto gw-mt-8"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, transparent 45%, #4b5563 45%, #4b5563 55%, transparent 55%)," +
                    "linear-gradient(135deg, transparent 65%, #4b5563 65%, #4b5563 75%, transparent 75%)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom right",
                  backgroundSize: "100% 100%",
                  touchAction: "none",
                }}
                title="Resize"
              />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
export { Modal };
