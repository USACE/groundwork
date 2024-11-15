
/**
 * @name Image
 * @param {string} alt - The alt text of the image.
 * @param {string} ariaLabel - Contains the description of the image. 
 * @param {string} image - The image source.
 * @param {integer} imgWidth - The width of the image
 * @param {integer} imgHeight - The width of the image

 * @example
 * <Image
 *  alt="Lucky Peak Dam"
 *  aria-label="Lucky Peak Dam"
 *  image="/nww-lucky-peak-dam.jpg"
 *  imgHeight={400}
 *  imgWidth={800}
 * />
 */
function Image({ alt, ariaLabel, image, imgHeight, imgWidth }) {
    if (!alt) {
        throw new Error(
            "Error rendering image. You must have alt text for image."
        );
    }
    return (
        <div className="gw-relative">
            <img
                src={image}
                alt={alt}
                aria-label={ariaLabel}
                style={{ height: imgHeight, width: imgWidth }}
            />
        </div>
    );
}

export default Image;
export { Image };
