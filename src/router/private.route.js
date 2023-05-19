import React, { useContext, useEffect, useState } from "react";
// import { Route, RedirectFunction } from "react-router-dom";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Database } from "../db/Context";
import styled from "styled-components";

const PrivateRoute = () => {
  const { authChecker } = useContext(Database);
  const [isAuth, setIsAuth] = useState(null);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const isAuth = await authChecker();
      setIsAuth(isAuth);
    })();
  }, []);

  if (isAuth === null) {
    return <LoadingContainer></LoadingContainer>;
  }

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={"/signin"} state={{ from: location }} replace />
  );
};

const LoadingContainer = styled.div`
  background-color: #24282c;
  width: 100%;
  height: 100%;
  width: 100
  height: 100vh;
  display: grid;
  place-items: center;
`;

export default PrivateRoute;
