import React from "react";
import styled from "styled-components";

const Download = () => {
  return (
    <DownloadContainer>
      <DownloadHeading>Download</DownloadHeading>
      <DownloadSection>
        <LeftContainer>
          <LaptopImage src={require("../../assets/imgs/laptop.png")} />
          <MockupImage src={require("../../assets/imgs/phone-mockup.png")} />
        </LeftContainer>
        <RightContainer>
          <AboutUs>About Us</AboutUs>
          <Description>
            With KoRrin, it is easy to find the find the right music and hire
            your favorite artistes for your events physically or virtually.
            <br />
            <br />
            There are millions of tracks, genres and artiste, so whether you’re
            behind the wheel, working out, partying or relaxing, the right music
            is always at your fingertips.
            <br />
            <br />
            Artiste can collaborate with one another for your events and you can
            also invite your friends, family, relatives and well-wishes.
          </Description>
        </RightContainer>
      </DownloadSection>
      <HeroActionContainer>
        <HeroButton index={0}></HeroButton>
        <HeroButton index={1}></HeroButton>
      </HeroActionContainer>
    </DownloadContainer>
  );
};

const DownloadContainer = styled.div`
  background-color: #dee2ed;
  min-height: 80vh;
  margin: 0rem 0;
  padding-bottom: 3rem;
`;

const DownloadHeading = styled.h2`
  text-align: center;
  padding: 3rem 0 1rem;
  background: transparent;
  font-size: 1.8rem;
`;

const DownloadSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
  padding: 3rem;
`;
const LeftContainer = styled.div`
  flex-basis: 45%;
  display: flex;
`;
const RightContainer = styled.div`
  flex-basis: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const LaptopImage = styled.img``;
const MockupImage = styled.img``;
const AboutUs = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
const Description = styled.p`
  font-size: 0.9rem;
  line-height: 120%;
`;

const HeroActionContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const HeroButton = styled.button`
  background: url("${(props) =>
    props.index === 0
      ? require("../../assets/imgs/appstore.png")
      : require("../../assets/imgs/playstore.png")}");
  margin-right: ${(props) => props.index === 0 && "2rem"};
  width: 225.52px;
  height: 55px;
  background-position: center;
  background-size: 225.52px 55px;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default Download;
