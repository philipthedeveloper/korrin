import React from "react";
import styled from "styled-components";

const Download = () => {
  return (
    <DownloadContainer>
      <DownloadHeading>Download</DownloadHeading>
      <ImageContainer>
        <LaptopImage src={require("../../assets/imgs/laptop.png")} />
        <MockupImage src={require("../../assets/imgs/phone-mockup.png")} />
        <TabletMockup src={require("../../assets/imgs/tablet-mockup.png")} />
      </ImageContainer>
      <HeroActionContainer>
        <HeroButton index={0}></HeroButton>
        <HeroButton index={1}></HeroButton>
      </HeroActionContainer>
    </DownloadContainer>
  );
};

const DownloadContainer = styled.div`
  background-color: #dee2ed;
  margin: 0rem 0;
  padding: 8rem 0;
  padding-top: 4rem;
`;

const DownloadHeading = styled.h2`
  text-align: center;
  padding: 3rem 0 1rem;
  background: transparent;
  font-size: 1.8rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 2rem auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const LaptopImage = styled.img`
  flex-basis: 33%;
  max-height: 500px;
  object-fit: contain;
`;
const MockupImage = styled.img`
  flex-basis: 33%;
  max-height: 500px;
  object-fit: contain;
`;

const TabletMockup = styled.img`
  flex-basis: 33%;
  max-height: 500px;
  object-fit: contain;
`;

const HeroActionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
const HeroButton = styled.button`
  background: url("${(props) =>
    props.index === 0
      ? require("../../assets/imgs/appstore.png")
      : require("../../assets/imgs/playstore.png")}");
  width: 225.52px;
  height: 55px;
  background-position: center;
  background-size: 225.52px 55px;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  cursor: pointer;

  @media (max-width: 600px) {
    margin: 0;
    width: 200px;
    height: 50px;
    background-size: 200px 50px;
  }
`;

export default Download;
