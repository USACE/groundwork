import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import Link from "../../components/navigation/link";

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
      : "",
  );

  return (
    <Menu
      as="li"
      className="gw-relative"
      onMouseOver={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={link?.href}
        target={link?.target}
        rel={link?.rel}
        className={menuButtonClass}
        {...props}
      >
        {link.text}
      </Link>
      {link.children && open && (
        <Menu.Items
          static
          as="ul"
          className="gw-absolute gw-left-0 gw-top-13 gw-bg-nav-dark-gray !gw-z-20 gw-w-max gw-p-0" // Removed padding and added gw-p-0
        >
          {link.children.map((child) => (
            <Menu.Item key={child.id || child.text} as={Fragment}>
              {child.children ? (
                <div className="gw-relative gw-group">
                  <Link
                    href={child?.href}
                    target={child?.target}
                    rel={child?.rel}
                    className="after:gw-content-['►'] after:gw-ml-2 after:gw-text-[10px] gw-block gw-text-sm gw-border-b gw-border-nav-black gw-bg-nav-dark-gray gw-hover:gw-bg-nav-translucent-gray gw-text-nav-light-gray gw-hover:gw-text-white gw-text-nowrap gw-font-semibold gw-px-3 gw-py-2 gw-bg-none"
                  >
                    {child.text}
                  </Link>
                  <Menu.Items
                    static
                    as="ul"
                    className="gw-absolute gw-left-full gw-top-0 gw-bg-nav-dark-gray !gw-z-30 gw-w-max gw-p-0 gw-shadow-lg gw-hidden group-hover:gw-block" // Removed padding and added gw-p-0
                  >
                    {child.children.map((grandChild) => {
                      if (!grandChild.children)
                        console.warn(
                          "Header items can only be 2 levels deep. Please reorganize your header links. This helps to avoid CSS issues.",
                        );
                      return (
                        <Menu.Item key={grandChild.id || grandChild.text}>
                          <Link
                            href={grandChild?.href}
                            target={grandChild?.target}
                            rel={grandChild?.rel}
                            className="gw-block gw-text-sm gw-border-b gw-border-nav-black gw-bg-nav-dark-gray gw-hover:gw-bg-nav-translucent-gray gw-text-nav-light-gray gw-hover:gw-text-white gw-text-nowrap gw-font-semibold gw-px-3 gw-py-2 gw-bg-none"
                          >
                            {grandChild.text}
                          </Link>
                        </Menu.Item>
                      );
                    })}
                  </Menu.Items>
                </div>
              ) : (
                <Link
                  href={child?.href}
                  target={child?.target}
                  rel={child?.rel}
                  className="gw-block gw-text-sm gw-border-b gw-border-nav-black gw-bg-nav-dark-gray gw-hover:gw-bg-nav-translucent-gray gw-text-nav-light-gray gw-hover:gw-text-white gw-text-nowrap gw-font-semibold gw-px-3 gw-py-2 gw-bg-none"
                >
                  {child.text}
                </Link>
              )}
            </Menu.Item>
          ))}
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
    <div className="gw-hidden md:gw-flex gw-flex-row gw-content-center gw-justify-between gw-w-full gw-min-h-12 gw-pr-3">
      <NavbarLinksList links={links} />
    </div>
  );
};

export default NavbarLinks;
export { NavbarLinks };
