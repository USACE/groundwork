import React from "react";
import styled from "styled-components";
import {
  GroundworkCoreStyleProps,
  GroundworkSize,
} from "../../types/groundwork-types";
import parseStyleProps from "../../util/parseStyleProps";

interface GridProps extends GroundworkCoreStyleProps {
  children?: React.ReactNode;
  className?: string;
  colGap?: GroundworkSize;
}

const RawGrid = ({ children, ...props }: GridProps) => {
  delete props.colGap;
  return <div {...props}>{children}</div>;
};

const Grid = styled(RawGrid)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${(p) => p.theme.spacing[p.colGap || "md"]};
  width: 100%;
  margin: 0 auto;

  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}
`;

interface GridColProps extends GroundworkCoreStyleProps {
  children?: React.ReactNode;
  className?: string;
  span?: number;
}

const RawGridCol = ({ children, className }: GridColProps) => {
  return <div className={className}>{children}</div>;
};

const GridCol = styled(RawGridCol)`
  grid-column: ${(p) => (p.span ? `span ${p.span}` : "span 12")};

  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}
`;

interface GridRowProps extends GroundworkCoreStyleProps {
  children?: React.ReactNode;
  className?: string;
}

const RawGridRow = ({ children, className }: GridRowProps) => {
  return <div className={className}>{children}</div>;
};

const GridRow = styled(RawGridRow)`
  grid-column: 1 / -1;

  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}
`;

export default Grid;
export { Grid, GridCol, GridRow };
export type { GridProps, GridColProps, GridRowProps };
