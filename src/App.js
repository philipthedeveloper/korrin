import "./App.css";
// import Navbar from "./components/Navbar";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  // const [currentRoute, setCurrentRoute] = useState("/");
  // const location = useLocation();

  // useEffect(() => {
  //   setCurrentRoute(location.pathname);
  // }, [location]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* {(currentRoute === "/" || currentRoute.includes("collaborate")) && (
        <Navbar />
      )} */}
    </>
  );
}

export default App;
