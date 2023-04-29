import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroSectionContainer>
        <LeftContainer>
          <HeroIntroContainer>
            <HeroTitle>Live Stream Music with Fans</HeroTitle>
            <HeroDescription>
              KoRrin lets fans pay you for an Online or Physical performance.
            </HeroDescription>
            <HeroDescription>
              Let your money make you a family to your favorite artistes
            </HeroDescription>
          </HeroIntroContainer>
          <HeroForm>
            <FormGroup>
              <HeroInput type="text" placeholder="Enter Email..." />
              <GetStartedButton>Get Started</GetStartedButton>
            </FormGroup>
          </HeroForm>
          <HeroActionContainer>
            <HeroButton index={0}></HeroButton>
            <HeroButton index={1}></HeroButton>
          </HeroActionContainer>
        </LeftContainer>
        <RightContainer>
          <ImageContainer>
            <HeroImage src={`${require("../../assets/imgs/hero-image.png")}`} />
          </ImageContainer>
        </RightContainer>
      </HeroSectionContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  background: url("${require("../../assets/imgs/hero-background.png")}") gray;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroSectionContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  flex-basis: 45%;
  //   background-color: red;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
const RightContainer = styled.div`
  flex-basis: 45%;
  //   background-color: blue;
`;

const ImageContainer = styled.div`
  width: 80%;
  max-width: 400px;
  margin-left: auto;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
`;
const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroIntroContainer = styled.div``;
const HeroTitle = styled.h1`
  margin-bottom: 0.7rem;
  font-size: 1.75rem;
`;
const HeroDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;

const HeroForm = styled.form`
  width: 80%;
  max-width: 400px;
`;
const FormGroup = styled.div`
  width: 100%;
  background-color: rgba(5, 101, 3, 0.5);
  border-radius: 1rem;
  position: relative;
`;
const HeroInput = styled.input`
  padding: 1.2rem 1.5rem;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  color: #fff;
  font-family: inherit;
  font-weight: 600;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #fff;
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #fff;
  }
`;
const GetStartedButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: #084906;
  border: none;
  outline: none;
  font-family: inherit;
  color: #fff;
  padding: 1.2rem 1.3rem;
  border-radius: 1rem;
`;
export const HeroActionContainer = styled.div``;
export const HeroButton = styled.button`
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

export default Hero;
