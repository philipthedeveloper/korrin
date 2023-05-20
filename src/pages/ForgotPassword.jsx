import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import toaster from "../utils/functions/toaster";
import emailValidator from "../utils/functions/email-validator";
import axios from "axios";
import { Database } from "../db/Context";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { BASE_URL } = useContext(Database);
  const navigate = useNavigate();
  const location = useLocation();

  const handleReset = async (e) => {
    e.preventDefault();
    if (!emailValidator(email)) {
      return toaster("error", "Please enter a valid email");
    }
    await toast.promise(sendEmail(email), {
      pending: "Verifying email",
      success: {
        render({ data }) {
          return data;
        },
      },
      error: {
        render({ data }) {
          return data.message;
        },
      },
    });
  };

  const sendEmail = async (email) => {
    try {
      let response = await axios.post(
        `${BASE_URL}/auth/get-otp`,
        { email },
        { withCredentials: true }
      );
      const result = response.data;
      if (response.status === 200) {
        let toasterTimeout = setTimeout(() => {
          navigate("/reset-password", {
            state: { email, from: location.pathname },
          });
          clearTimeout(toasterTimeout);
        }, 1500);
      }
      return result.msg;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  };

  return (
    <SignUpContainer>
      <ActionContainer>
        <Link
          to={"/"}
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Back
        </Link>
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
          <ForgotHeading>Forgot Password</ForgotHeading>
          <FormContainer>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
              />
            </FormGroup>
            <ResetButton onClick={(e) => handleReset(e)}>
              Reset Password
            </ResetButton>
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
  gap: 30%;

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
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;
const Label = styled.label`
  font-weight: 600;
`;
const Input = styled.input`
  padding: 0.8rem 0 0.2rem;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 4px solid #42ff00;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;

  &[type="checkbox"] {
    width: 15px;
    height: 15px;
  }
`;

const ResetButton = styled.button`
  border: none;
  outline: none;
  background-color: #42ff00;
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
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

export default ForgotPassword;
