import { Container } from "./layout/container";
/**
 * @name Hero
 * @description A full width, full height hero component with a title, subtitle, and optional image.
 * @param {string} title - The title of the hero.
 * @param {string} subtitle - The subtitle of the hero.
 * @param {string} image - The image to display in the hero.
 * @param {string} alt - The alt text for the image.
 * @param {ReactNode} children - Custom children to display in the hero.
 * @example
 * <Hero
 *  title="Groundwork"
 *  subtitle="React Component Library"
 *  image="/nww-lucky-peak-dam.jpg"
 *  alt="Lucky Peak Dam"
 * >
 */
function Hero({ title, subtitle, image, alt, children }) {
  return (
    <div className="gw-relative">
      <div className="gw-h-56 gw-w-full gw-overflow-clip gw-bg-zinc-950 md:gw-h-1/5 md:gw-max-h-[500px]">
        <img
          src={image}
          alt={alt}
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
