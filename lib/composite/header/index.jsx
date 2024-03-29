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
      className="w-full pl-[15px] sm:pl-[100px] pr-[15px] py-3 sm:py-0 bg-nav-dark-gray sm:bg-nav-gray"
    >
      <span className="text-lg sm:text-sm font-semibold sm:font-bold text-white sm:text-usace-black leading-4 sm:leading-normal block sm:inline mr-1">
        {title}
      </span>
      <span className="text-md sm:text-sm text-white sm:text-usace-black font-thin sm:font-normal block sm:inline">
        {subtitle}
      </span>
    </div>
  );
}

function Nav({ children }) {
  return (
    <nav
      style={{ order: 1 }}
      className="flex flex-row relative justify-between content-center bg-nav-black text-white pl-[91px] pr-2 z-80"
    >
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="absolute left-[15px] sm:bottom-[-15px] w-[48px] sm:w-[82px] z-10">
      <a href="/">
        <img className="h-[50px] w-auto" src={usaceLogo} />
      </a>
      <div className="absolute left-[50px] sm:left-[65px] bottom-[-3px] sm:bottom-[-9px] text-sm text-gray-400">
        ®
      </div>
    </div>
  );
}

function Header({ links, title, subtitle, navRight }) {
  const [showOverlayLinks, setShowOverlayLinks] = useState(false);
  return (
    <>
      <header className="flex flex-col w-full sticky top-0 z-20">
        <Title title={title} subtitle={subtitle} />
        <Nav>
          <Logo />
          <NavbarLinks links={links} />
          <span className="w-full md:max-w-[300px] mr-2">
            {navRight ? navRight : null}
          </span>
          <Button
            style="plain"
            color="white"
            className="md:hidden"
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
