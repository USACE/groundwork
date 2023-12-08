import USABanner from "./USABanner";
import { HeaderWrapper, LogoContainer, Nav, Title, Search } from "./styles";
import NavbarLinks from "./NavbarLinks";
import { useEffect } from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const links = {
  Layout: {
    Header: "/components/layout/header",
    Typography: "/typography",
    Display: "/display",
  },
  Forms: {
    Input: "/components/forms/input",
    Select: "/components/forms/select",
    Textarea: "/components/forms/textarea",
  },
  Interaction: {
    Buttons: "/buttons",
  },
};

const PageHeader = ({ title, subtitle }: HeaderProps) => {
  useEffect(() => {
    window.onscroll = () => {
      const el = document.getElementById("header");
      if (window.scrollY > 0) {
        el?.classList.add("sticky");
      } else {
        el?.classList.remove("sticky");
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <USABanner />
      <HeaderWrapper id="header">
        <Title>
          <span className="title">{title}</span>
          <span className="subtitle">{subtitle}</span>
        </Title>
        <Nav>
          <LogoContainer>
            <a href="/">
              <img className="logo" src="/usace-logo-color.svg" />
            </a>
            <div className="reg">®</div>
          </LogoContainer>
          <NavbarLinks links={links} />
          <Search placeholder="Search..." />
        </Nav>
      </HeaderWrapper>
    </>
  );
};

export default PageHeader;
export { PageHeader };
