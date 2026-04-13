import { NavbarLinks } from "./navbar-links";
import { OverlayLinks } from "./overlay-links";
import usaceLogo from "../../img/usace-logo-color.svg";
import { Button } from "../../components/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import gwMerge from "../../gw-merge";
import Link from "../../components/navigation/link";

const BASE_URL = import.meta.env.BASE_URL;

function Title({ title = "", subtitle = "" }) {
  return (
    <div
      style={{ order: 2 }}
      className="gw-w-full gw-text-white sm:gw-text-usace-black"
    >
      <strong className="gw-font-normal sm:gw-font-bold gw-text-lg sm:gw-text-sm gw-leading-4 sm:gw-leading-normal gw-block sm:gw-inline gw-mr-1">
        {title}
      </strong>
      <span className="gw-text-md sm:gw-text-sm gw-mt-2 sm:gw-mt-0 gw-font-thin sm:gw-font-normal gw-block sm:gw-inline">
        {subtitle}
      </span>
    </div>
  );
}

function Logo() {
  return (
    <div className="gw-relative gw-w-[70px] sm:gw-w-[82px] gw-shrink-0 sm:gw-top-3">
      <Link href={BASE_URL + "/"}>
        <img
          className="gw-w-[50px] sm:gw-w-[60px] gw-h-auto"
          src={usaceLogo}
          alt="U.S. Army Corps of Engineers"
          aria-label="Visit the homepage of this site"
        />
      </Link>
      <div className="gw-absolute gw-left-[55px] sm:gw-left-[65px] gw-bottom-[-10px] sm:gw-bottom-[-9px] gw-text-sm gw-text-gray-400">
        ®
      </div>
    </div>
  );
}

function Header({ links, title, subtitle, navRight, fluidNav }) {
  const [showOverlayLinks, setShowOverlayLinks] = useState(false);
  const navContainerClass = gwMerge(
    "gw-w-full gw-mx-auto gw-px-4 gw-box-border",
    fluidNav ? "gw-max-w-screen" : "gw-max-w-screen-2xl",
  );
  return (
    <>
      <header className="gw-flex gw-flex-col gw-w-full gw-sticky gw-top-0 gw-z-20">
        <div>
          <div className="gw-min-h-12 gw-bg-nav-black gw-text-white">
            <div className={navContainerClass}>
              <div className="gw-flex gw-justify-between gw-items-center">
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
              </div>
            </div>
          </div>
          <div className="gw-min-h-4 gw-py-2 sm:gw-py-0 gw-bg-nav-dark-gray sm:gw-bg-nav-gray">
            <div className={navContainerClass}>
              <div className="gw-flex gw-justify-between gw-items-center">
                <span className="sm:gw-w-[94px] gw-shrink-0 "></span>
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
