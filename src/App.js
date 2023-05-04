import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [currentRoute, setCurrentRoute] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  return (
    <>
      {currentRoute.includes("signin") ||
        currentRoute.includes("signup") ||
        currentRoute.includes("password") || <Navbar />}
    </>
  );
}

export default App;
