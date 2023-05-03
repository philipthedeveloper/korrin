import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import "./Navbar.css";

const NAVLIST = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Collaborate", path: "/collaborate" },
  { name: "Download", path: "/download" },
];

const Navbar = () => {
  const nav = useRef(null);
  const toggler = useRef(null);
  const handleToggle = () => {
    if (nav.current.classList.contains("show")) {
      nav.current.classList.remove("show");
      toggler.current.classList.remove("cross");
      // toggleButton(true);
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    } else {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      // toggleButton(false);
      nav.current.classList.add("show");
      toggler.current.classList.add("cross");
    }
  };

  return (
    <Header>
      <LogoContainer>
        <Link to={"/"}>
          <Logo src={logo} />
        </Link>
      </LogoContainer>
      <Nav ref={nav}>
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
      <div
        className="toggle-nav"
        onClick={(e) => handleToggle(e)}
        ref={toggler}
      >
        <span className="a"></span>
        <span className="b"></span>
        <span className="c"></span>
      </div>
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

  @media (max-width: 600px) {
    width: 150px;
  }
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

  @media (max-width: 600px) {
    display: none;
  }
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
