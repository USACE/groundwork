import { NavbarLinks } from "./navbar-links";
import usaceLogo from "../../img/usace-logo-color.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Title({ title = "Title", subtitle = "Subtitle" }) {
  return (
    <div
      style={{ order: 2 }}
      className="font-usace w-full pl-[100px] bg-nav-gray"
    >
      <span className="text-sm font-bold mr-1">{title}</span>
      <span className="text-sm">{subtitle}</span>
    </div>
  );
}

function Nav({ children }) {
  return (
    <nav
      style={{ order: 1 }}
      className="flex flex-row relative justify-between content-center bg-nav-black text-white h-12 pl-[91px] z-80"
    >
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="absolute left-[15px] bottom-[-15px] w-[82px] z-10">
      <a href="/">
        <img className="h-[50px] w-auto" src={usaceLogo} />
      </a>
      <div className="absolute left-[65px] bottom-[-9px] text-sm text-black">
        ®
      </div>
    </div>
  );
}

function Header({ links, title, subtitle, navRight }) {
  const headerClass = classNames(
    "flex",
    "flex-col",
    "w-full",
    "sticky",
    "top-0",
    "z-20"
  );

  return (
    <header className={headerClass}>
      <Title title={title} subtitle={subtitle} />
      <Nav>
        <Logo />
        <NavbarLinks links={links} />
        {navRight ? navRight : null}
      </Nav>
    </header>
  );
}

export default Header;
export { Header };
