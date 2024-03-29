import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useState } from "react";
import { Button } from "../../components/button";
import { VscClose } from "react-icons/vsc";

function OverlayLink({ link, close }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center text-white text-xl font-semibold px-4 py-2">
        <a href={link.href} onClick={close}>
          {link.text}
        </a>
        <span
          className="grow"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="flex justify-end">
            {link.children && (isOpen ? <FaCaretUp /> : <FaCaretDown />)}
          </span>
        </span>
      </div>
      {link.children && isOpen ? (
        <div className="pl-5">
          <OverlayLinksList links={link.children} close={close} />
        </div>
      ) : null}
    </>
  );
}

function OverlayLinksList({ links, close }) {
  return (
    <ul className="flex flex-col">
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
    <div className="absolute top-0 left-0 bottom-0 right-0 bg-nav-black bg-opacity-90 z-50">
      <div className="flex justify-end">
        <Button style="plain" color="white" size="lg" onClick={handleClose}>
          <VscClose />
        </Button>
      </div>
      <OverlayLinksList links={links} close={handleClose} />
    </div>
  );
}

export default OverlayLinks;
export { OverlayLinks };
