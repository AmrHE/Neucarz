import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../Logo";
import NavItems from "./NavItems";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
  `}
`;

const LogoContainer = styled.div``;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <NavItems />
    </NavbarContainer>
  );
};

export default Navbar;
