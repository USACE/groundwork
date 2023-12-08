import React from "react";
import styled from "styled-components";
import parseStyleProps from "../../util/parseStyleProps";
import {
  GroundworkColor,
  GroundworkCoreStyleProps,
  GroundworkRadius,
  GroundworkSize,
} from "../../types/groundwork-types";

interface TableProps extends GroundworkCoreStyleProps {
  children?: React.ReactNode;
  className?: string;
  striped?: boolean;
  stripedColor?: GroundworkColor;
  border?: boolean;
  shadow?: boolean;
  radius?: GroundworkRadius;
  verticalSpacing?: GroundworkSize;
  horizontalSpacing?: GroundworkSize;
}

const RawTable = ({ children, className }: TableProps) => {
  return <table className={className}>{children}</table>;
};

const Table = styled(RawTable)`
  width: 100%;
  border-spacing: 0;
  background-color: ${(p) => p.theme.colors.light[0]};
  ${(p) => (p.border ? `border: 1px solid ${p.theme.colors.light[4]};` : "")}
  box-shadow: ${(p) => (p.shadow ? p.theme.shadows.md : "")};
  border-radius: ${(p) => p.theme.radius[p.radius || "xs"]};

  overflow: hidden;

  ${(p) => {
    return parseStyleProps(p, p.theme);
  }}

  & > thead > tr > th {
    padding: ${(p) => {
      const hSpacing = p.horizontalSpacing || "md";
      const vSpacing = p.verticalSpacing || "md";
      return `${p.theme.spacing[`${vSpacing}`]} ${
        p.theme.spacing[`${hSpacing}`]
      }`;
    }};
    border-bottom: 1px solid ${(p) => p.theme.colors.dark[2]};
    font-weight: 600;
    text-align: left;
    vertical-align: middle;
  }

  & > tbody > tr > td {
    padding: ${(p) => {
      const hSpacing = p.horizontalSpacing || "md";
      const vSpacing = p.verticalSpacing || "md";
      return `${p.theme.spacing[`${vSpacing}`]} ${
        p.theme.spacing[`${hSpacing}`]
      }`;
    }};
    border-bottom: 1px solid ${(p) => p.theme.colors.dark[2]};
    vertical-align: middle;
  }

  & > tbody > tr:nth-child(even) > td {
    background-color: ${(p) =>
      p.striped ? p.theme.colors[p.stripedColor || "gray"][0] : ""};
  }

  & > tbody > tr:last-child > td {
    border-bottom: none;
  }

  & > tfoot > tr > td {
    padding: ${(p) => {
      const hSpacing = p.horizontalSpacing || "md";
      const vSpacing = p.verticalSpacing || "md";
      return `${p.theme.spacing[`${vSpacing}`]} ${
        p.theme.spacing[`${hSpacing}`]
      }`;
    }};
    border-top: 1px solid ${(p) => p.theme.colors.dark[2]};
    vertical-align: middle;
  }

  & > tfoot > tr:last-child > td {
    border-bottom: none;
  }

  & > tbody > tr > td:first-child {
    padding-left: ${(p) => {
      const spacing = p.horizontalSpacing || "md";
      return `${p.theme.spacing[`${spacing}`]}`;
    }};
  }
`;

interface THeadProps {
  children?: React.ReactNode;
}

const THead = ({ children }: THeadProps) => {
  return <thead>{children}</thead>;
};

interface TBodyProps {
  children?: React.ReactNode;
}

const TBody = ({ children }: TBodyProps) => {
  return <tbody>{children}</tbody>;
};

interface TFootProps {
  children?: React.ReactNode;
}

const TFoot = ({ children }: TFootProps) => {
  return <tfoot>{children}</tfoot>;
};

interface ThProps {
  children?: React.ReactNode;
}

const Th = ({ children }: ThProps) => {
  return <th>{children}</th>;
};

interface TrProps {
  children?: React.ReactNode;
}

const Tr = ({ children }: TrProps) => {
  return <tr>{children}</tr>;
};

interface TdProps {
  children?: React.ReactNode;
  as?: string;
}

const Td = ({ children, as }: TdProps) => {
  return React.createElement(as || "td", {}, children);
};

export default Table;
export { Table, THead, TBody, TFoot, Th, Tr, Td };
export type {
  TableProps,
  THeadProps,
  TBodyProps,
  TFootProps,
  ThProps,
  TrProps,
  TdProps,
};
