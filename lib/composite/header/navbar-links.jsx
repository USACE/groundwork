import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

function NavbarLinkItem({ link, ...props }) {
  const [open, setOpen] = useState(false);

  const menuButtonClass = classNames(
    "gw-inline-block gw-relative gw-h-12 gw-inline-flex gw-w-auto gw-justify-center gw-items-center gw-px-3 gw-text-sm gw-text-nowrap",
    open ? "gw-bg-nav-dark-gray gw-text-white" : "gw-text-nav-light-gray",
    link.children
      ? "after:gw-content-['▼'] after:gw-text-[10px] after:gw-ml-2"
      : ""
  );

  return (
    <Menu
      as="li"
      className="gw-relative"
      onMouseOver={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href={link.href} className={menuButtonClass} {...props}>
        {link.text}
      </a>
      {link.children && open && (
        <Menu.Items
          static
          as="ul"
          className="gw-absolute gw-left-0 gw-top-13 gw-width-auto gw-bg-nav-dark-gray"
        >
          {link.children.map((child) => {
            return (
              <Menu.Item key={child.id || child.text} as={Fragment}>
                <a
                  href={child.href}
                  className="gw-block gw-text-sm gw-border-b gw-border-nav-black gw-bg-nav-dark-gray gw-hover:gw-bg-nav-translucent-gray gw-text-nav-light-gray gw-hover:gw-text-white gw-text-nowrap gw-font-semibold gw-px-[16px] gw-py-[8px] gw-bg-none"
                >
                  {child.text}
                </a>
              </Menu.Item>
            );
          })}
        </Menu.Items>
      )}
    </Menu>
  );
}

function NavbarLinksList({ links, ...props }) {
  return (
    <ul
      role="list"
      className="gw-flex gw-flex-row gw-flex-wrap gw-justify-start gw-m-0 gw-pl-0 gw-w-full"
      {...props}
    >
      {links.map((link) => {
        return <NavbarLinkItem key={link.id || link.text} link={link} />;
      })}
    </ul>
  );
}

const NavbarLinks = ({ links = [] }) => {
  return (
    <div className="gw-hidden md:gw-flex gw-flex-row gw-content-center gw-justify-between gw-w-full gw-pr-3">
      <NavbarLinksList links={links} />
    </div>
  );
};

export default NavbarLinks;
export { NavbarLinks };
