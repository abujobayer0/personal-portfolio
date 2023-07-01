import { useState } from "react";
import styled from "styled-components";
import LogoGlitch from "../../components/logo/logo";

const Nav = styled.nav`
  padding: 10px 20px;
  max-width: 1300px;
  min-height: 9vh;
  background: #00051a;
  margin: 0 auto;
  display: flex;
  border-bottom: 2px solid #161f42b0;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white !important;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  margin: 0 20px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration: none;
    color: #00ffff;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;
const MainContaienrNav = styled.div`
  width: 100%;
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100vw;
  z-index: 3;
  background: #00051a;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  margin: 0 auto;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  const handleClick = () => {
    toggleNav(false);
  };

  return (
    <MainContaienrNav>
      <Nav>
        <Logo>
          <LogoGlitch />
        </Logo>
        <Menu>
          <Item>
            <Link href="#home">Home</Link>
          </Item>
          <Item>
            <Link href="#skills">Skills </Link>
          </Item>
          <Item>
            <Link href="#about">About </Link>
          </Item>
          <Item>
            <Link href="#project">Projects </Link>
          </Item>

          <Item>
            <Link href="#contact">Contact</Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item onClick={handleClick}>
            <Link href="#home">Home</Link>
          </Item>
          <Item onClick={handleClick}>
            <Link href="#skills">Skills</Link>
          </Item>
          <Item onClick={handleClick}>
            <Link href="#about">About</Link>
          </Item>

          <Item onClick={handleClick}>
            <Link href="#project">Projects</Link>
          </Item>

          <Item onClick={handleClick}>
            <Link href="#contact">Contact</Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </MainContaienrNav>
  );
};

export default Header;
