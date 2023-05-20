import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import emailValidator from "../utils/functions/email-validator";
import toaster from "../utils/functions/toaster";
import { toast } from "react-toastify";
import { Database } from "../db/Context";
import axios from "axios";

const ChangePassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otpCode, setOtpCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { BASE_URL } = useContext(Database);

  useEffect(() => {
    const email = location.state?.email;
    const otpCode = location.state?.otpCode;
    if (!email || !otpCode) {
      return navigate("/signin", { replace: true });
    }
    setEmail(email);
    setOtpCode(otpCode);
  }, [navigate, location.state?.email, location.state?.otpCode]);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (password.length < 8 || confirmPassword.length < 8) {
      return toaster("error", "Password cannot be less than 8 characters");
    }
    if (password !== confirmPassword) {
      return toaster("error", "Password does not match");
    }
    if (!emailValidator(email)) {
      return toaster("error", "Enter a valid email");
    }
    const data = { email, newPassword: password, otpCode };
    await toast.promise(submitPassword(data), {
      pending: "Saving account changes",
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

  const submitPassword = async (data) => {
    try {
      let response = await axios.post(
        `${BASE_URL}/auth/change-password`,
        data,
        { withCredentials: true }
      );
      let result = response.data;
      if (response.status === 200) {
        let toasterTimeout = setTimeout(() => {
          navigate("/signin", { replace: true });
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
          <ForgotHeading>Forgot Password</ForgotHeading>
          <FormContainer>
            <FormGroup>
              <Label>New Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
              />
            </FormGroup>
            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value.trim())}
              />
            </FormGroup>
            <ChangeButton onClick={(e) => handleChangePassword(e)}>
              Change Password
            </ChangeButton>
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

const ChangeButton = styled.button`
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

export default ChangePassword;
