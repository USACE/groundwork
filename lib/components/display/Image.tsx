import styled from "styled-components";
import parseStyleProps from "../../util/parseStyleProps";
import { GroundworkCoreStyleProps } from "../../types/groundwork-types";

interface ImageProps extends GroundworkCoreStyleProps {
  className?: string;
  src: string;
  alt: string;
}

const RawImage = ({ className, src, alt }: ImageProps) => {
  return <img className={className} src={src} alt={alt} />;
};

const Image = styled(RawImage)`
  width: 100%;
  height: auto;

  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}
`;

export default Image;
export { Image };
export type { ImageProps };
