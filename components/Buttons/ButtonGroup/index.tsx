import React from "react";
import styled from "styled-components";

interface ButtonGroupProps {
  borderWidth?: string | number;
  children?: React.ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
  radius?: number;
}

const RawButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return <div {...props}>{children}</div>;
};

const ButtonGroup = styled(RawButtonGroup)`
  display: flex;
  flex-direction: ${({ orientation }: ButtonGroupProps) =>
    orientation === "horizontal" ? "row" : "column"};
  align-items: center;
  justify-content: flex-start;
  ${({ borderWidth }: ButtonGroupProps) => {
    return borderWidth ? `border: ${borderWidth}rem solid #ccc` : "";
  }}
  overflow: hidden;

  & > button:first-child {
    border-radius: ${({ radius }: ButtonGroupProps) =>
      `${radius}rem 0 0 ${radius}rem`};
  }

  & > button:last-child {
    border-radius: ${({ radius }: ButtonGroupProps) =>
      `0 ${radius}rem ${radius}rem 0`};
  }
`;

export default ButtonGroup;
export { ButtonGroup };
export type { ButtonGroupProps };
