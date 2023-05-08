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
      {(currentRoute === "/" || currentRoute.includes("collaborate")) && (
        <Navbar />
      )}
    </>
  );
}

export default App;
