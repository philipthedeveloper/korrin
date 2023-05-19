import React, { useContext } from "react";
import { Database } from "../db/Context";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logoutUser, user } = useContext(Database);
  const { name, email, account_type } = user;
  const navigate = useNavigate();

  return (
    <>
      <div>Dashboard</div>
      <h1>Welcome {name}</h1>
      <h2>Your email is: {email}</h2>
      <h3>Your account type is a {account_type}</h3>
      <button onClick={() => logoutUser(navigate)}>logout</button>
    </>
  );
};

export default Dashboard;
