import { NavbarLinks } from "./navbar-links";
import { OverlayLinks } from "./overlay-links";
import usaceLogo from "../../img/usace-logo-color.svg";
import { Button } from "../../components/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Title({ title = "", subtitle = "" }) {
  return (
    <div
      style={{ order: 2 }}
      className="gw-w-full gw-pl-[15px] sm:gw-pl-[100px] gw-pr-[15px] gw-py-3 sm:gw-py-0 gw-bg-nav-dark-gray sm:gw-bg-nav-gray"
    >
      <span className="gw-text-lg sm:gw-text-sm gw-font-semibold sm:gw-font-bold gw-text-white sm:gw-text-usace-black gw-leading-4 sm:gw-leading-normal gw-block sm:gw-inline gw-mr-1">
        {title}
      </span>
      <span className="gw-text-md sm:gw-text-sm gw-text-white sm:gw-text-usace-black gw-font-thin sm:gw-font-normal gw-block sm:gw-inline">
        {subtitle}
      </span>
    </div>
  );
}

function Nav({ children }) {
  return (
    <nav
      style={{ order: 1 }}
      className="gw-flex gw-flex-row gw-relative gw-justify-between gw-content-center gw-bg-nav-black gw-text-white gw-pl-[91px] gw-pr-2 gw-z-80"
    >
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="gw-absolute gw-left-[15px] sm:gw-bottom-[-15px] gw-w-[48px] sm:gw-w-[82px] gw-z-10">
      <a href="/">
        <img className="gw-h-[50px] gw-w-auto" src={usaceLogo} />
      </a>
      <div className="gw-absolute gw-left-[50px] sm:gw-left-[65px] gw-bottom-[-3px] sm:gw-bottom-[-9px] gw-text-sm gw-text-gray-400">
        ®
      </div>
    </div>
  );
}

function Header({ links, title, subtitle, navRight }) {
  const [showOverlayLinks, setShowOverlayLinks] = useState(false);
  return (
    <>
      <header className="gw-flex gw-flex-col gw-w-full gw-sticky gw-top-0 gw-z-20">
        <Title title={title} subtitle={subtitle} />
        <Nav>
          <Logo />
          <NavbarLinks links={links} />
          <span className="gw-flex gw-flex-row-reverse gw-justify-end gw-items-center gw-w-full md:gw-max-w-[300px] gw-mr-2">
            {navRight ? navRight : null}
          </span>
          <Button
            style="plain"
            color="white"
            className="md:gw-hidden"
            onClick={() => {
              setShowOverlayLinks(true);
            }}
          >
            <GiHamburgerMenu />
          </Button>
        </Nav>
      </header>
      {showOverlayLinks ? (
        <OverlayLinks
          links={links}
          onClose={() => {
            setShowOverlayLinks(false);
          }}
        />
      ) : null}
    </>
  );
}

export default Header;
export { Header };
