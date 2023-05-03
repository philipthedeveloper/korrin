import React from "react";
import styled from "styled-components";
import logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import FOOTER_DATA from "../../constants/footer-data";
import { HeroActionContainer, HeroButton } from "./Hero";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterUpperSection>
        <Logo src={logo} />
        {FOOTER_DATA.map((data, index) => (
          <FooterSubSection {...data} key={index.toString()} />
        ))}
        <Discover />
      </FooterUpperSection>
      <FooterLowerSection>
        <Copyright>All Copyrights Reserved &copy; KoRrin</Copyright>
        <Socails>
          <Link to="/" target={"_blank"} rel="noreferrer" style={linkStyle}>
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link to="/" target={"_blank"} rel={"noreferrer"} style={linkStyle}>
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="/" target={"_blank"} rel="noreferrer" style={linkStyle}>
            <i className="fa-brands fa-twitter"></i>
          </Link>

          <Link to="/" target={"_blank"} rel="noreferrer" style={linkStyle}>
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </Socails>
      </FooterLowerSection>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background: url(${require("../../assets/imgs/footer-background.png")});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 0rem 0;
  padding: 3rem;
`;

const FooterUpperSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem 1rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const FooterLowerSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.img`
  width: 200px;
  @media (max-width: 600px) {
    width: 150px;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #fff;
`;

const Socails = styled.div`
  display: flex;
  gap: 1rem;
`;

const linkStyle = {
  aspectRatio: 1,
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "50%",
  color: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  textDecoration: "none",
  width: "50px",
  transition: "0.4s ease",
  padding: "0.5rem",
  fontSize: "25px",
};

export default Footer;

const FooterSubSection = ({ name, links }) => {
  return (
    <SubSectionContainer>
      <SubSectionTitle>{name}</SubSectionTitle>
      <LinkList>
        {links.map((link, index) => (
          <ListItem key={index.toString()}>
            <Link
              to={link.path}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              {link.name}
            </Link>
          </ListItem>
        ))}
      </LinkList>
    </SubSectionContainer>
  );
};

const SubSectionContainer = styled.div``;
const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ListItem = styled.li`
  font-size: 0.9rem;
  list-style: none;
  color: #fff;
`;
const SubSectionTitle = styled.h3`
  color: #fff;
  margin-bottom: 1rem;
`;

const Discover = () => {
  return (
    <DiscoverContainer>
      <SubSectionTitle>Discover Us</SubSectionTitle>
      <Address>
        651 N Broad St, 201, Middletown,
        <br />
        <br /> Delaware 19709, United States.
        <br />
        <br />
        4, Soretire Street, Ogba, Ikeja, Lagos.
      </Address>
      <SubSectionTitle style={{ marginTop: "1rem" }}>
        Download App
      </SubSectionTitle>
      <HeroActionContainer style={{ display: "flex" }}>
        <HeroButton
          index={0}
          style={{ height: "40px", backgroundSize: "100% 40px" }}
        ></HeroButton>
        <HeroButton
          index={1}
          style={{ height: "40px", backgroundSize: "100% 40px" }}
        ></HeroButton>
      </HeroActionContainer>
    </DiscoverContainer>
  );
};

const Address = styled.address`
  color: #fff;
  font-size: 0.75rem;
`;

const DiscoverContainer = styled.div``;
