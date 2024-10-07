import { useState, useEffect } from "react";

/**
 * Determines if the current screen width is below a specified breakpoint.
 * This hook listens for changes to the screen width and updates the state accordingly.
 *
 * @function useIsMobile
 * @param {string} [breakpoint='768px'] - The maximum width (in pixels) to be considered as mobile. Defaults to '768px' which is the md breakpoint in Tailwind CSS. This can also be sm, md, lg, xl, and 2xl breakpoints.
 * @returns {boolean} `true` if the screen width is less than or equal to the specified breakpoint, `false` otherwise.
 *
 * @example
 * // Usage in a component
 * const isMobile = useIsMobile(); // Returns true if screen width is <= 768px
 *
 * @example
 * // Usage with a custom breakpoint
 * const isMobile = useIsMobile('1024px'); // Returns true if screen width is <= 1024px
 * * @example
 * // Usage with a custom TailwindCSS breakpoint
 * const isMobile = useIsMobile('xl'); // Returns true if screen width is <= 1280px
 */
export function useIsMobile(breakpoint = "768px") {
  breakpoint = breakpoint.replace("px", "");
  breakpoint = parseInt(breakpoint);
  if (isNaN(breakpoint)) {
    throw new Error("Invalid breakpoint. Must be number > 1.");
  } else if (breakpoint <= 0) {
    throw new Error("Breakpoint must be greater than 0.");
  }
  // Convert tailwind breakpoint to pixels
  switch (breakpoint) {
    case "sm":
      breakpoint = 640;
      break;
    case "md":
      breakpoint = 768;
      break;
    case "lg":
      breakpoint = 1024;
      break;
    case "xl":
      breakpoint = 1280;
      break;
    case "2xl":
      breakpoint = 1536;
      break;
    default:
      break;
  }
  breakpoint = breakpoint + "px";
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint})`);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [breakpoint]);

  return isMobile;
}
