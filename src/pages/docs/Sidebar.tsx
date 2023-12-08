import { NavLink } from "../../../lib/components/navigation/NavLink";
import { Text } from "../../../lib/components/display/Text";
import { GoChevronRight } from "react-icons/go";

const links = {
  layout: [
    {
      title: "Container",
      href: "/docs/container",
    },
    {
      title: "Flex",
      href: "/docs/flex",
    },
  ],
  types: [
    {
      title: "GroundworkCoreStyleProps",
      href: "/docs/core-style-props",
    },
    {
      title: "GroundworkSize",
      href: "/docs/groundwork-size",
    },
  ],
};

const Sidebar = () => {
  return (
    <div>
      <Text size="md" $fw="bold">
        Layout
      </Text>
      {links.layout.map((link) => {
        return (
          <NavLink
            isActive={window.location.href.indexOf(link.href) !== -1}
            key={link.href}
            forwardedAs="a"
            href={link.href}
            rightSection={<GoChevronRight />}
          >
            {link.title}
          </NavLink>
        );
      })}
      <Text size="md" $fw="bold">
        Types
      </Text>
      {links.types.map((link) => {
        return (
          <NavLink
            isActive={window.location.href.indexOf(link.href) !== -1}
            key={link.href}
            forwardedAs="a"
            href={link.href}
            rightSection={<GoChevronRight />}
          >
            {link.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
