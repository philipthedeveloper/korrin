import React, { useContext } from "react";
// import { Route, RedirectFunction } from "react-router-dom";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Database } from "../db/Context";

const PrivateRoute = () => {
  const { authenticated } = useContext(Database);
  const location = useLocation();

  return authenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/signin-fans"} state={{ from: location }} replace />
  );
};

export default PrivateRoute;
