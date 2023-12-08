import styled from "styled-components";
import parseStyleProps from "../../util/parseStyleProps";
import { GroundworkCoreStyleProps } from "../../types/groundwork-types";

interface ContainerProps extends GroundworkCoreStyleProps {
  children?: React.ReactNode;
  maxWidth?: string;
  fluid?: boolean;
}

const RawContainer = ({ children, ...props }: ContainerProps) => {
  delete props.fluid;
  delete props.maxWidth;
  return <div {...props}>{children}</div>;
};

const Container = styled(RawContainer)`
  width: 100%;
  max-width: ${(props) => (props.fluid ? "100%" : props.maxWidth || "1140px")};
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;

  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}
`;

export default Container;
export { Container };
export type { ContainerProps };
