import styled from "styled-components";
// import React from "react";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;

  &.sticky {
    position: sticky;
    top: 0;
    z-index: 1000;
  }
`;

const LogoContainer = styled.div`
  bottom: -15px;
  left: 15px;
  position: absolute;
  width: 82px;
  z-index: 2;

  .logo {
    height: 50px !important;
    width: auto;
  }

  .reg {
    bottom: -9px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 11px;
    left: 65px;
    position: absolute;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  background-color: #18181b;
  color: #fff;
  height: 45px;
  order: 1;
  padding-left: 91px;
`;

const Title = styled.div`
  background: hsla(0, 0%, 80%, 0.9);
  font-size: 12px;
  line-height: 28px;
  order: 2;
  width: 100%;
  padding-left: 100px;

  .title {
    font-size: 14px;
    font-weight: 700;
    margin-right: 8px;
  }

  .subtitle {
    font-size: 14px;
    font-weight: 400;
  }
`;

const Search = styled.input`
    background-color: #fff;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
    color: #000;
    font-size: 14px;
    height: 28px;
    line-height: 28px;
    margin: 8px 8px;
    width: 300px;
    padding: 0 8px 0 30px;
    background-image: url("/Magnifying_glass_icon.svg");
    background-size: 13px;
    background-repeat: no-repeat;
    background-position: 10px center;
    order: 2

    &:focus {
      background-color: #fff;
      outline: none;
    }

  @media (max-width: 768px) {
    order: 1;
    width: 100%;
  }
`;

export { Nav, LogoContainer, HeaderWrapper, Title, Search };
