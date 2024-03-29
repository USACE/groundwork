import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

function NavbarLinkItem({ link, ...props }) {
  const [open, setOpen] = useState(false);

  const menuButtonClass = classNames(
    "inline-block relative h-12 inline-flex w-auto justify-center items-center px-3 text-sm",
    open ? "bg-nav-dark-gray text-white" : "text-nav-light-gray",
    link.children ? "after:content-['▼'] after:text-[10px] after:ml-2" : ""
  );

  return (
    <Menu
      as="li"
      className="relative"
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
          className="absolute left-0 top-13 width-auto bg-nav-dark-gray"
        >
          {link.children.map((child) => {
            return (
              <Menu.Item key={child.id} as={Fragment}>
                <a
                  href={child.href}
                  className="block text-sm border-b border-nav-black bg-nav-dark-gray hover:bg-nav-translucent-gray text-nav-light-gray hover:text-white text-nowrap font-semibold px-[16px] py-[8px] bg-none"
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

// links look like this:
const linksTemplate = [];

function NavbarLinksList({ links, ...props }) {
  return (
    <ul
      role="list"
      className="flex flex-row justify-start m-0 pl-0 w-full"
      {...props}
    >
      {links.map((link) => {
        return <NavbarLinkItem key={link.id} link={link} />;
      })}
    </ul>
  );
}

const NavbarLinks = ({ links = linksTemplate }) => {
  // const [openMobileMenu, setOpenMobileMenu] = useState(false);
  // const mobileMenuClass = classnames({
  //   "nav-links-list": true,
  //   "nav-links-list-open": openMobileMenu,
  // });
  return (
    <div className="flex flex-row flex-wrap content-center justify-between w-full pr-3">
      <NavbarLinksList links={links} />
    </div>
  );
};

export default NavbarLinks;
export { NavbarLinks };
