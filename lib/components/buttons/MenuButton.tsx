import React from "react";
import { Button, ButtonProps } from "./Button";
import { FaCaretDown } from "react-icons/fa6";

interface MenuButtonProps extends ButtonProps {
  expandOnHover?: boolean;
}

// const MenuButtonItem;

const MenuButton = ({ children, ...props }: MenuButtonProps) => {
  return (
    <Button rightSection={<FaCaretDown />} {...props}>
      {children}
    </Button>
  );
};

export default MenuButton;
export { MenuButton };
