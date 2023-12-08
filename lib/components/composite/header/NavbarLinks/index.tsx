import { useState } from "react";
import classnames from "../../../../util/classnames";
import {
  NavbarLinkItem,
  NavbarLinkItemMenu,
  NavbarLinkItemMenuItem,
  NavbarLinkItemMenuText,
  NavbarLinkItemText,
  NavbarLinksList,
  NavbarLinksContainer,
  NavbarLinksHamburger,
} from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import IconButton from "../../../buttons/IconButton";

interface NavbarLinkItemProps {
  links: object;
}

const NavbarLinks = ({ links }: NavbarLinkItemProps) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const mobileMenuClass = classnames({
    "nav-links-list": true,
    "nav-links-list-open": openMobileMenu,
  });
  return (
    <NavbarLinksContainer>
      <NavbarLinksList role="list" className={mobileMenuClass}>
        {Object.entries(links).map(([category, links]) => (
          <NavbarLinkItem className="dropdown" key={category}>
            <NavbarLinkItemText className="nav-dropdown">
              {category}
            </NavbarLinkItemText>
            <NavbarLinkItemMenu className="nav-dropdown-menu" role="list">
              {Object.entries(links).map(([name, link]) => (
                <NavbarLinkItemMenuItem key={name}>
                  <NavbarLinkItemMenuText
                    className="nav-menu-item"
                    href={"" + link}
                  >
                    {name}
                  </NavbarLinkItemMenuText>
                  {/* @todo implement submenu here..? */}
                </NavbarLinkItemMenuItem>
              ))}
            </NavbarLinkItemMenu>
          </NavbarLinkItem>
        ))}
      </NavbarLinksList>
      <NavbarLinksHamburger>
        <IconButton
          variant="transparent"
          color="#fff"
          onClick={() => {
            setOpenMobileMenu(!openMobileMenu);
          }}
        >
          <GiHamburgerMenu />
        </IconButton>
      </NavbarLinksHamburger>
    </NavbarLinksContainer>
  );
};

export default NavbarLinks;
export { NavbarLinks };
