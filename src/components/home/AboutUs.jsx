import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <AboutContainer id="about-us">
      <LeftContainer>
        <AboutHeading>About Us</AboutHeading>
        <AboutUsText>
          With KoRrin, it is easy to find the find the right music and hire your
          favorite artistes for your events physically or virtually.
          <br />
          <br />
          There are millions of tracks, genres and artiste, so whether you’re
          behind the wheel, working out, partying or relaxing, the right music
          is always at your fingertips.
          <br />
          <br />
          Artiste can collaborate with one another for your events and you can
          also invite your friends, family, relatives and well-wishes.
        </AboutUsText>
      </LeftContainer>
      <RightContainer>
        <ImageContainer>
          <AboutImage src={require("../../assets/imgs/about.png")} />
        </ImageContainer>
      </RightContainer>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
  padding: 8rem 3rem;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    padding: 5rem 0rem;
  }
`;

const AboutHeading = styled.h2`
  // text-align: center;
  // padding: 3rem 0 1rem;
  margin-bottom: 2rem;
  background: transparent;
  font-size: 1.8rem;
`;

const AboutUsText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  // text-align: center;
  // max-width: 600px;
  // width: 80%;
  // margin: 0 auto;
`;
const LeftContainer = styled.div`
  flex-basis: 45%;
  @media (max-width: 768px) {
    flex-basis: 100%;
    width: 100%;
  }
`;
const RightContainer = styled.div`
  flex-basis: 45%;
  align-items: center;

  @media (max-width: 768px) {
    flex-basis: 100%;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  align-items: center;
  display: flex;
`;
const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default AboutUs;
