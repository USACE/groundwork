import styled from "styled-components";

const NavbarLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 8px;

  @media (max-width: 768px) {
    order: 2;
    justify-content: flex-end;
    width: 50px;
  }
`;

const NavbarLinksList = styled.ul`
  display: flex;
  flw-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  padding-left: 0;
  width: 100%;

  .nav-dropdown {
    color: #fff;
    display: block;
    font-size: 14px;
    line-height: 44px;
    padding: 0 10px;
    text-decoration: none;
  }

  .nav-dropdown:hover {
    background-color: rgba(85, 85, 85, 0.98);
  }

  .nav-dropdown:has(+ ul > li:hover) {
    background-color: rgba(85, 85, 85, 0.98);
  }

  .nav-dropdown:after {
    content: "▼";
    font-size: 10px;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    // position: absolute;
    display: none;

    &.nav-links-list-open {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: #18181b;
      border-top: 1px solid #d0d0d0;
      right: 0;
      top: 45px;
      padding-top: 20px;
      z-index: 1;
    }
  }
`;

const NavbarLinkItem = styled.li`
  display: inline-block;
  width: auto;

  &.dropdown {
    position: relative;
  }
`;

const NavbarLinkItemText = styled.span``;

const NavbarLinkItemMenu = styled.ul`
  position: absolute;
  width: auto;
  display: none;
  top: auto;
  left: 0px;
  margin-left: 0px;
  margin-top: 0px;
  min-width: 10em;
  max-width: 26em;
  background-color: rgba(85, 85, 85, 0.98);
  border: none;
  border-radius: 0;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
  padding: 0;

  .dropdown:hover > & {
    display: block;
  }

  @media (max-width: 768px) {
    position: static;
    display: none;
    width: 100%;
    margin-top: 0;
    margin-left: 0;
    padding: 0;
    background-color: transparent;
    box-shadow: none;

    .dropdown:hover > & {
      display: block;
    }
  }
`;

const NavbarLinkItemMenuItem = styled.li`
  color: #fff;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  & > a {
    text-decoration: none;
    background: none !important;
    color: #d0d0d0;
    display: block;
    font-size: 13px;
    font-weight: 600;
    padding: 8px 16px;
    white-space: nowrap;
  }

  &:hover > a {
    color: #fff;
    background-color: hsla(0, 0%, 100%, 0.2) !important;
  }
`;

const NavbarLinkItemMenuText = styled.a``;

// need to figure out the responsive stuff
// so we show the hamburger menu on mobile
const NavbarLinksHamburger = styled.div`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: none;
  font-size: 20px;
  height: 36px;
  width: 36px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export {
  NavbarLinksList,
  NavbarLinkItem,
  NavbarLinkItemText,
  NavbarLinkItemMenu,
  NavbarLinkItemMenuItem,
  NavbarLinkItemMenuText,
  NavbarLinksHamburger,
  NavbarLinksContainer,
};
