import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage, Home, About, Collaborate, Download } from "../pages";

const ROUTE_LIST = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/collaborate",
    element: <Collaborate />,
  },
  { path: "/download", element: <Download /> },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

const Router = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        {ROUTE_LIST.map((item) => (
          <Route path={item.path} element={item.element} key={item.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
