import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <Container>
      <a>
        <img src={Logo} />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu>Menu</CustomMenu>
      </RightMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    text-decoration: none;
    font-weight: 600;
    padding: 0 10px;
  }
  @media (max-width:768px){
    display:none;
  }

`;

const RightMenu = styled.div`
  display: flex;
  a {
    text-decoration: none;
    font-weight: 600;
    margin-right: 10px;
  }
`;

const CustomMenu = styled.div`
  text-decoration: none;
  font-weight: 600;
  margin-right: 10px;
  cursor:pointer;

`;
