import { ContainerFluid } from "../../lib";
import React from "react";

interface ComponentDemoProps {
  children?: React.ReactNode;
}

const ComponentDemo = ({ children, ...props }: ComponentDemoProps) => {
  return <ContainerFluid {...props}>{children}</ContainerFluid>;
};

export default ComponentDemo;
export { ComponentDemo };
