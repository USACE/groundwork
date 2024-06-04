import { Container } from "./layout/container";
import { useState, useEffect } from "react";

/**
 * @name Hero
 * @description A full width, full height hero component with a title, subtitle, and optional image.
 * @param {string} title - The title of the hero.
 * @param {string} subtitle - The subtitle of the hero.
 * @param {string | string[]} image - The image or list of images to display in the hero.
 * @param {string | string[]} alt - The alt text or list of text for the image(s).
 * @param {ReactNode} children - Custom children to display in the hero.
 * @param {integer} duration_ms - given a list of images set the duration between each image
 * @example
 * <Hero
 *  title="Groundwork"
 *  subtitle="React Component Library"
 *  image="/nww-lucky-peak-dam.jpg"
 *  alt="Lucky Peak Dam"
 * >
 * Or a List of Strings
 * <Hero
 *  title="Groundwork"
 *  subtitle="React Component Library"
 *  image=["/nww-lucky-peak-dam.jpg", "/nww-lucky-peak-dam-2.jpg"]
 *  alt=["Lucky Peak Dam", "Lucky Peak Dam 2"]
 *  duration_ms=12000 // 12 seconds
 * >
 */
function Hero({ title, subtitle, image, alt, children, duration_ms = 6000 }) {
  const [currentImage, setCurrentImage] = useState(typeof image === "object" ? image[0] : image);
  const [currentAlt, setCurrentAlt] = useState(typeof alt === "object" ? alt[0] : alt);
  // Make sure the alt count matches the images if both are provided as lists
  if (typeof image === "object" && typeof alt === "object") {
    if (image.length !== alt.length)
      throw new Error(
        "Error rendering hero image. Your image and alt text arrays must be the same length."
      );
  }

  if (typeof image === "object") {
    /**
     * @name getRandomInt
     * @description returns a random integer given a max value
     * @param {integer} max - The max value to return a random integer
     * @example
     * let x = getRandomInt(5)
     * > console.log(x) // 3
     */
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    useEffect(() => {
      const interval = setInterval(() => {
        const RAND_INT = getRandomInt(image.length);
        setCurrentImage(image[RAND_INT]);
        if (alt)
            setCurrentAlt(alt[RAND_INT]);
      }, duration_ms);

      return () => clearInterval(interval);
    }, []);
  }
  return (
    <div className="gw-relative">
      <div className="gw-h-56 gw-w-full gw-overflow-clip gw-bg-zinc-950 md:gw-h-1/5 md:gw-max-h-[500px]">
        <img
          src={currentImage}
          alt={currentAlt}
          className="gw-object-cover gw-object-center gw-w-full gw-h-full"
        />
      </div>
      <div className="gw-absolute gw-inset-0 gw-bg-zinc-950/50" />
      {children && (
        <div className="gw-absolute gw-inset-0 gw-flex gw-items-center gw-justify-center">
          {children}
        </div>
      )}
      {title && (
        <Container className="gw-relative">
          <div className="gw-absolute gw-bottom-0 gw-left-0 gw-max-w-7xl gw-mx-auto gw-px-4">
            <div className="gw-pb-8">
              <h1 className="gw-text-4xl gw-font-extrabold gw-tracking-tight gw-text-white sm:gw-text-5xl lg:gw-text-6xl">
                {title}
              </h1>
              <p className="gw-mt-1 gw-text-xl gw-text-zinc-200">{subtitle}</p>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default Hero;
export { Hero };
