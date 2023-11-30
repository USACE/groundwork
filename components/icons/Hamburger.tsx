import styled from "styled-components";

const RawHamburger = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
      />
    </svg>
  );
};

const Hamburger = styled(RawHamburger)``;

export default Hamburger;
export { Hamburger };
