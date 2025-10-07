import { NavbarLinks } from "./navbar-links";
import { OverlayLinks } from "./overlay-links";
import usaceLogo from "../../img/usace-logo-color.svg";
import { Button } from "../../components/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import gwMerge from "../../gw-merge";
import Link from "../../components/navigation/link";

function Title({ title = "", subtitle = "" }) {
  return (
    <div
      style={{ order: 2 }}
      className="gw:w-full gw:text-white gw:sm:text-usace-black"
    >
      <strong className="gw:font-normal gw:sm:font-bold gw:text-lg gw:sm:text-sm gw:leading-4 gw:sm:leading-normal gw:block gw:sm:inline gw:mr-1">
        {title}
      </strong>
      <span className="gw:text-md gw:sm:text-sm gw:mt-2 gw:sm:mt-0 gw:font-thin gw:sm:font-normal gw:block gw:sm:inline">
        {subtitle}
      </span>
    </div>
  );
}

function Logo() {
  return (
    <div className="gw:relative gw:w-[70px] gw:sm:w-[82px] gw:shrink-0 gw:sm:top-3">
      <Link href="/">
        <img
          className="gw:w-[50px] gw:sm:w-[60px] gw:h-auto"
          src={usaceLogo}
          alt="U.S. Army Corps of Engineers"
          aria-label="Visit the homepage of this site"
        />
      </Link>
      <div className="gw:absolute gw:left-[55px] gw:sm:left-[65px] gw:bottom-[-10px] gw:sm:bottom-[-9px] gw:text-sm gw:text-gray-400">
        ®
      </div>
    </div>
  );
}

function Header({ links, title, subtitle, navRight, fluidNav }) {
  const [showOverlayLinks, setShowOverlayLinks] = useState(false);
  const navContainerClass = gwMerge(
    "gw:w-full gw:mx-auto gw:px-4 gw:box-border",
    fluidNav ? "gw:max-w-screen" : "gw:max-w-(--gw:breakpoint-2xl)",
  );
  return (
    <>
      <header className="gw:flex gw:flex-col gw:w-full gw:sticky gw:top-0 gw:z-20">
        <div>
          <div className="gw:min-h-12 gw:bg-nav-black gw:text-white">
            <div className={navContainerClass}>
              <div className="gw:flex gw:justify-between gw:items-center">
                <Logo />
                <NavbarLinks links={links} />
                <span className="gw:flex gw:flex-row-reverse gw:justify-end gw:items-center gw:w-full gw:md:max-w-[300px] gw:mr-2">
                  {navRight ? navRight : null}
                </span>
                <Button
                  style="plain"
                  color="white"
                  className="gw:md:hidden"
                  onClick={() => {
                    setShowOverlayLinks(true);
                  }}
                >
                  <GiHamburgerMenu />
                </Button>
              </div>
            </div>
          </div>
          <div className="gw:min-h-4 gw:py-2 gw:sm:py-0 gw:bg-nav-dark-gray gw:sm:bg-nav-gray">
            <div className={navContainerClass}>
              <div className="gw:flex gw:justify-between gw:items-center">
                <span className="gw:sm:w-[94px] gw:shrink-0 "></span>
                <Title title={title} subtitle={subtitle} />
              </div>
            </div>
          </div>
        </div>
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
