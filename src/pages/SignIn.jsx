import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Database } from "../db/Context";
import toaster from "../utils/functions/toaster";
import emailValidator from "../utils/functions/email-validator";
import axios from "axios";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, BASE_URL } = useContext(Database);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toaster("error", "Please fill all credentials");
    }
    if (!emailValidator(email)) {
      return toaster("error", "Enter a vaild email.");
    }
    if (password.length < 8) {
      return toaster("error", "Password cannot be less than 8 characters");
    }
    const data = { email, password };

    await toast.promise(loginUser(data), {
      pending: "Verify credentials",
      success: "Login Successful",
      error: {
        render({ data }) {
          return data.message;
        },
      },
    });
  };

  const loginUser = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, data, {
        withCredentials: true,
      });
      const result = response.data;
      if (response.status === 200) {
        // toaster("success", "Login success");
        let toasterTimeout = setTimeout(() => {
          navigate("/dashboard");
          clearTimeout(toasterTimeout);
        }, 1500);
      }
      setUser(result.user);
    } catch (error) {
      throw new Error(error.response.data.msg);
      // return toaster("error", error.response.data.msg);
    }
  };

  return (
    <SignUpContainer>
      <ActionContainer>
        <Link to={"/"}> Back</Link>
      </ActionContainer>
      <FormSection>
        <LeftContainer>
          <WelcomeHeading>Welcome back</WelcomeHeading>
          <LogoContainer>
            <Logo src={require("../assets/imgs/logo.png")} />
            <WelcomePara>
              Start having the best moment with your favorite Artists
            </WelcomePara>
          </LogoContainer>
          {/* <Footer>
            <Link to={"/signin-fans"} className={"underline-focus"}>
              FANS HERE
            </Link>
            <VerticalStroke />
            <Link to={"/signin-artists"}>ARTISTS HERE</Link>
          </Footer> */}
        </LeftContainer>
        <RightContainer>
          <LoginHeading>Login to your account</LoginHeading>
          <LoginWith>Login with</LoginWith>
          <OauthContainer>
            <OauthButton>
              <i className="fa-brands fa-google"></i>
            </OauthButton>
            <OauthButton>
              <i className="fa-brands fa-facebook"></i>
            </OauthButton>
            <OauthButton>
              <i className="fa-brands fa-twitter"></i>
            </OauthButton>
          </OauthContainer>
          <OrContainer>
            <HorizontalStroke />
            <OrText>OR</OrText>
            <HorizontalStroke />
          </OrContainer>
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
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
              />
            </FormGroup>
            <RememberContainer>
              <div>
                <Input type="checkbox" value={"agreed"} name="agreed" />
                <RememberText>Remember me</RememberText>
              </div>
              <Link to={"/forgot-password"} style={linkStyle}>
                Forgot Password?
              </Link>
            </RememberContainer>
            <LoginButton onClick={handleSubmit}>Login</LoginButton>
            <AlreadyHaveAccount>
              Don't have an account? <Link to={"/signup-fans"}>Sign Up</Link>
            </AlreadyHaveAccount>
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
  background-image: url(${require("../assets/imgs/artiste.jpg")});
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
  justify-content: space-between;
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

const WelcomeHeading = styled.h2`
  color: #fff;
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
`;

// const Footer = styled.footer`
//   display: flex;
//   gap: 1.5rem;
//   align-items: center;

//   a {
//     color: #fff;
//     text-decoration: none;

//     &.underline-focus {
//       text-decoration: underline;
//     }
//   }
// `;
// const VerticalStroke = styled.span`
//   width: 2px;
//   height: 25px;
//   background-color: #fff;
//   border-radius: 0.2rem;
// `;

const RightContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 4rem;
  color: #fff;

  @media (max-width: 1000px) {
    padding: 4rem 1rem;
  }
`;

const LoginHeading = styled.h1`
  text-align: center;
`;
const LoginWith = styled.p`
  margin: 1.5rem 0;
`;
const OauthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 1rem;
  margin: 1rem 0;

  @media (max-width: 548px) {
    display: flex;
    flex-direction: column;
  }
`;
const OauthButton = styled.button`
  padding: 0.7rem 1rem;
  background: none;
  outline: none;
  border: 2px solid #14f400;
  border-radius: 1rem;
  transition: 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #14f400;
  }

  i {
    font-size: 1.5rem;
    color: #110cf6;
  }
`;
const OrContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 2rem 0;
`;
const OrText = styled.p`
  font-weight: 600;
`;
const HorizontalStroke = styled.span`
  display: inline-block;
  flex: 1;
  height: 2px;
  background-color: #42ff00;
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

const RememberContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    transition: 0.5s ease;
    font-size: 0.9rem;

    &:hover {
      color: #42ff00 !important;
    }
  }
`;
const RememberText = styled.p`
  font-size: 0.9rem;
`;

const LoginButton = styled.button`
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
`;
const AlreadyHaveAccount = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;

  a {
    text-decoration: none;
    color: #14f400;
  }
`;

const linkStyle = {
  color: "#fff",
  cursor: "pointer",
  textDecoration: "none",
};
export default SignIn;
