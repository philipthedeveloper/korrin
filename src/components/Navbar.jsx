import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png";

const NAVLIST = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Collaborate", path: "/collaborate" },
  { name: "Download", path: "/download" },
];

const Navbar = () => {
  return (
    <Header>
      <LogoContainer>
        <Link to={"/"}>
          <Logo src={logo} />
        </Link>
      </LogoContainer>
      <Nav>
        <NavList>
          {NAVLIST.map((item, index) => (
            <NavItem key={index.toString()}>
              <Link to={item.path} style={{ textDecoration: "none" }}>
                {item.name}
              </Link>
            </NavItem>
          ))}
        </NavList>
      </Nav>
      <ActionContainer>
        <ActionButton>Sign In</ActionButton>
        <ActionButton>Sign Up</ActionButton>
      </ActionContainer>
    </Header>
  );
};

const Header = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const LogoContainer = styled.div`
  //   flex: 2;
`;
const Logo = styled.img`
  width: 200px;
`;
const Nav = styled.nav`
  //   flex: 3;
  flex-basis: 45%;
`;
const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;

  a {
    font-size: 0.9rem;
    transition: 0.5s;
    font-weight: 600;
    color: var(--primary-color-B);

    &:hover {
      //   color: green;
      opacity: 0.8;
    }
  }
`;
const NavItem = styled.li``;
export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const ActionButton = styled.button`
  padding: 0.7rem 2rem;
  border: none;
  outline: none;
  border-radius: 15px;
  color: #fff;
  background-color: var(--primary-color-B);
  font-family: inherit;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export default Navbar;
