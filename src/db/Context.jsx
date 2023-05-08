import React, { createContext, useState, useEffect } from "react";

export const Database = createContext();

const Context = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("authenticated");
    if (!auth) return;
    setAuthenticated(auth);
  }, []);

  const login = (cb) => {
    setAuthenticated(true);
    localStorage.setItem("authenticated", "true");
    cb();
  };

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("authenticated");
  };

  return (
    <Database.Provider value={{ authenticated, login, logout }}>
      {children}
    </Database.Provider>
  );
};

export default Context;
