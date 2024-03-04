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
    <div className="relative">
      <div className="h-56 w-full overflow-clip bg-zinc-950 md:h-1/5 md:max-h-[500px]">
        <img
          src={image}
          alt={alt}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-zinc-950/50" />
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
      {title && (
        <Container className="relative">
          <div className="absolute bottom-0 left-0 max-w-7xl mx-auto px-4">
            <div className="pb-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-1 text-xl text-zinc-200">{subtitle}</p>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default Hero;
export { Hero };
