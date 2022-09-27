import styled from "styled-components";
import Logo from "../images/logo.svg";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({active,setActive}) => {

  return (
    <Container>
      <BlurWrapper active={active} >
        <a href="/" >
          <img src={Logo} alt="Logo"/>
        </a>
        <Menu> 
          <a href="/#ModelS">Model S</a>
          <a href="/#Model3">Model 3</a>
          <a href="/#ModelX">Model X</a>
          <a href="/#ModelY">Model Y</a>
          <a href="/#SolarRoof">Solar Roof</a>
          <a href="/#SolarPanels">Solar Panels</a>
        </Menu>
        <RightMenu>
          <a href="/#">Shop</a>
          <a href="/#">Account</a>
          <CustomMenu onClick={() => setActive(true)}>Menu</CustomMenu>
        </RightMenu>
      </BlurWrapper>
      <BurgerNav show={active} style={{overflowY:"scroll"}}>
        <CloseWrapper>
          <CustomClose onClick={() => setActive(false)} />
        </CloseWrapper>
        <li>
          <a href="/#ModelS">Model S</a>
        </li>
        <li>
          <a href="/#Model3">Model 3</a>
        </li>
        <li>
          <a href="/#ModelX">Model X</a>
        </li>
        <li>
          <a href="/#ModelY">Model Y</a>
        </li>
        <li>
          <a href="/#SolarRoof">Solar Roof</a>
        </li>
        <li>
          <a href="/#SolarPanels">Solar Panels</a>
        </li>
        <li>
          <a href="/#">Existing Inventory</a>
        </li>
        <li>
          <a href="/#">Used Inventory</a>
        </li>
        <li>
          <a href="/#">Trade-In</a>
        </li>
        <li>
          <a href="/#">Test-Drive</a>
        </li>
        <li>
          <a href="/#">Insurance</a>
        </li>
        <li>
          <a href="/#">Powerwall</a>
        </li>
        <li>
          <a href="/#">Commercial Energy</a>
        </li>
        <li>
          <a href="/#">Utilities</a>
        </li>
        <li>
          <a href="/#">Charging</a>
        </li>
        <li>
          <a href="/#">Find Us</a>
        </li>
        <li>
          <a href="/#">Support</a>
        </li>
        <li>
          <a href="/#">Investor Relations</a>
        </li>
        <li>
          <a href="/#">Shop</a>
        </li>
        <li>
          <a href="/#">Account</a>
        </li>
        <li>
          <a href="/#">More</a>
        </li>
      </BurgerNav>
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
  z-index: 1;
  @media (max-width: 300px) {
    padding:0px;
  }
`;

const BlurWrapper = styled.div`
  display:flex;
  width:100%;
  transition: .6s;
  filter: ${(props) => props.active ? "blur(6px)" : null}
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    text-decoration: none;
    font-size:14px;
    transition:2s;
    padding:8px;
  }
  a:hover{
    background-color: rgba(120,125,129, 0.6);
    border-radius:10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  a {
    text-decoration: none;
    font-size:14px;
    transition:2s;
    padding:8px;
  }
  a:hover{
    background-color: rgba(120,125,129, 0.6);
    border-radius:10px;
  }
  @media (max-width: 768px) {
    margin-left:10%;
  }
  @media (max-width: 300px) {
    margin-left:0%;
  }
`;

const CustomMenu = styled.div`
  text-decoration: none;
  margin-right: 10px;
  cursor: pointer;
  font-size:14px;
  transition:2s;
  padding:8px;
  :hover{
    background-color: rgba(120,125,129, 0.6);
    border-radius:10px;
  };
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding:12px;
    font-size:14px;
    line-height:20px;
    letter-spacing:normal
  }

  a {
    text-decoration: none;
  }
`;

const CustomClose = styled(AiOutlineClose)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
