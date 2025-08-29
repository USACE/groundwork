import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useState } from "react";
import { Button } from "../../components/button";
import { VscClose } from "react-icons/vsc";
import Link from "../../components/navigation/link";

function OverlayLink({ link, close }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="gw:flex gw:justify-between gw:items-center gw:text-white gw:text-xl gw:font-semibold gw:px-4 gw:py-2">
        <Link href={link.href} onClick={close}>
          {link.text}
        </Link>
        <span
          className="gw:grow"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="gw:flex gw:justify-end">
            {link.children && (isOpen ? <FaCaretUp /> : <FaCaretDown />)}
          </span>
        </span>
      </div>
      {link.children && isOpen ? (
        <div className="gw:pl-5">
          <OverlayLinksList links={link.children} close={close} />
        </div>
      ) : null}
    </>
  );
}

function OverlayLinksList({ links, close }) {
  return (
    <ul className="gw:flex gw:flex-col">
      {links.map((link) => {
        return (
          <OverlayLink key={link.id || link.text} link={link} close={close} />
        );
      })}
    </ul>
  );
}

function OverlayLinks({ links = [], onClose }) {
  const handleClose = () => {
    if (onClose && typeof onClose === "function") {
      onClose();
    }
  };
  return (
    <div className="gw:fixed gw:top-0 gw:left-0 gw:h-full gw:right-0 gw:bg-nav-black gw:bg-opacity-90 gw:z-50">
      <div className="gw:flex gw:justify-end">
        <Button style="plain" color="white" size="lg" onClick={handleClose}>
          <VscClose />
        </Button>
      </div>
      <div className="gw:relative  gw:h-full gw:overflow-y-auto gw:hide-scrollbar">
        <OverlayLinksList links={links} close={handleClose} />
      </div>
    </div>
  );
}

export default OverlayLinks;
export { OverlayLinks };
