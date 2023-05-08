import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ResetPassword = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [e, setE] = useState("");
  const fakeEvent = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    if (e.target.nextElementSibling && e.target.value.length !== 0) {
      e.target.nextElementSibling.focus();
    }
  };

  return (
    <SignUpContainer>
      <ActionContainer>
        <Link to={"/"}> Back</Link>
      </ActionContainer>
      <FormSection>
        <LeftContainer>
          <LogoContainer>
            <Logo src={require("../assets/imgs/logo.png")} />
            <WelcomePara>
              Start having the best moment with your favorite Artists
            </WelcomePara>
          </LogoContainer>
        </LeftContainer>
        <RightContainer>
          <ForgotHeading>Account Verification</ForgotHeading>
          <ResetText>
            A verification code has been sent to the email associated with this
            account, please confirm your email
          </ResetText>
          <FormContainer>
            <FormGroup>
              <OTPInput
                type="text"
                maxLength={1}
                name="a"
                onChange={(e) => {
                  if (Number.isNaN(Number(e.target.value))) return;
                  e.target.value.length < 2 && setA(e.target.value);
                  handleChange(e);
                }}
                value={a}
              />
              <OTPInput
                type="text"
                maxLength={1}
                name="b"
                value={b}
                onChange={(e) => {
                  if (Number.isNaN(Number(e.target.value))) return;
                  e.target.value.length < 2 && setB(e.target.value);
                  handleChange(e);
                }}
              />
              <OTPInput
                type="text"
                maxLength={1}
                name="c"
                value={c}
                onChange={(e) => {
                  if (Number.isNaN(Number(e.target.value))) return;
                  e.target.value.length < 2 && setC(e.target.value);
                  handleChange(e);
                }}
              />
              <OTPInput
                type="text"
                maxLength={1}
                name="d"
                value={d}
                onChange={(e) => {
                  if (Number.isNaN(Number(e.target.value))) return;
                  e.target.value.length < 2 && setD(e.target.value);
                  handleChange(e);
                }}
              />
              <OTPInput
                type="text"
                maxLength={1}
                name="e"
                value={e}
                onChange={(e) => {
                  if (Number.isNaN(Number(e.target.value))) return;
                  e.target.value.length < 2 && setE(e.target.value);
                  handleChange(e);
                }}
              />
            </FormGroup>
            <ConfirmOTP onClick={(e) => fakeEvent(e)}>
              <Link
                to={"/change-password"}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  padding: "0.7rem",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                Confirm OTP
              </Link>
            </ConfirmOTP>
          </FormContainer>
        </RightContainer>
      </FormSection>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.main`
  padding: 1rem;
  width: 100vw;
  height: 100vh;
  background-color: var(--primary-color-B);
  background-image: url(${require("../assets/imgs/guitar.png")});
  background-size: cover;
  background-position: center;
  display: grid;
  place-items: center;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr;
    gap: 1rem;
    overflow: scroll;
    padding: 1rem 0;
  }
`;

const FormSection = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.7);
  height: 90vh;
  //   border-top: 1px solid rgba(255, 255, 255, 0.5);
  //   border-left: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(217, 217, 217, 0.103);
  backdrop-filter: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 100%;
  overflow-hidden;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    border: none;
    height: fit-content;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    overflow: auto;
    min-height: fit-content;
    height: fit-content;
    gap: 3rem;
    padding: 4rem 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  gap: 1.5rem;

  @media (max-width: 1000px) {
    gap: 1rem;
  }
`;
const Logo = styled.img`
  width: 220px;
`;
const WelcomePara = styled.p`
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
`;

const RightContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 4rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1000px) {
    padding: 4rem 1rem;
  }
`;

const ForgotHeading = styled.h1`
  text-align: center;
`;

const ActionContainer = styled.div`
  justify-self: start;
  width: 90%;
  margin: 0 auto;

  a {
    color: #fff;
    transition: 0.5s ease;

    &:hover {
      color: var(--primary-color-B);
    }
  }
`;

const FormContainer = styled.form`
  margin: 1rem 0;
`;
const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
`;

const ConfirmOTP = styled.button`
  border: none;
  outline: none;
  background-color: #42ff00;
  width: 100%;
  margin: 1rem 0;
  color: #fff;
  font-family: inherit;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 0.7rem;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    opacity: 0.8;
  }

  a {
    padding: 1rem !important;

    @media (max-width: 600px) {
      padding: 0.7rem;
    }
  }
`;

const ResetText = styled.p`
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  margin: 1rem auto;
  line-height: 1.5;
  max-width: 400px;
`;

const OTPInput = styled.input`
  padding: 0.5rem;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid #42ff00;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  border-radius: 0.5rem;
  text-align: center;
  max-width: 70px;
  aspect-ratio: 1 /1;

  @media (max-width: 600px) {
    max-width: 60px;
  }
`;

export default ResetPassword;
