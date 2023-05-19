import React, { createContext, useState } from "react";
import axios from "axios";
import toaster from "../utils/functions/toaster";
import emailValidator from "../utils/functions/email-validator";
import { toast } from "react-toastify";

export const Database = createContext();
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Context = ({ children }) => {
  const [user, setUser] = useState({});

  const authChecker = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/isauth`, {
        withCredentials: true,
      });
      const result = response.data;
      setUser(result.user);
      return result.isAuth;
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = async (navigate) => {
    try {
      let response = await axios.post(
        `${BASE_URL}/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toaster("success", "Logout successfully");
        let toasterTimeout = setTimeout(() => {
          navigate("/signin");
          clearTimeout(toasterTimeout);
        }, 1500);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const createAccount = async (
    name,
    email,
    password,
    confirmPassword,
    account_type,
    checked,
    callback
  ) => {
    if (!name || !email || !password || !confirmPassword) {
      return toaster("error", "Please fill all credentials");
    }
    if (name.length < 3) {
      return toaster("error", "Name cannot be less than 3 characters");
    }
    if (!emailValidator(email)) {
      return toaster("error", "Enter a vaild email.");
    }
    if (password.length < 8 || confirmPassword.length < 8) {
      return toaster("error", "Password cannot be less than 8 characters");
    }
    if (password !== confirmPassword) {
      return toaster("error", "Password does not match");
    }
    if (!checked) {
      return toaster("error", "You have to accept the terms to proceed");
    }
    const data = { name, email, password, account_type };
    await toast.promise(registerUser(data, callback), {
      pending: "Creating account",
      success: "Account created successfully!",
      error: {
        render({ data }) {
          return data.message;
        },
      },
    });
  };

  const registerUser = async (data, callback) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, data, {
        withCredentials: true,
      });
      const result = response.data;
      if (response.status === 201) {
        callback();
      }
      setUser(result.user);
      return true;
    } catch (error) {
      throw new Error(error.response.data.msg);
      // return toaster("error", error.response.data.msg);
    }
  };

  return (
    <Database.Provider
      value={{
        setUser,
        user,
        authChecker,
        logoutUser,
        createAccount,
        BASE_URL,
      }}
    >
      {children}
    </Database.Provider>
  );
};

export default Context;
