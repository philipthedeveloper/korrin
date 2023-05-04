import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ErrorPage,
  Home,
  About,
  Collaborate,
  Download,
  SignIn,
  SignUp,
  SignInArtist,
  SignUpArtist,
  ForgotPassword,
  ResetPassword,
  ChangePassword,
} from "../pages";

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
  { path: "/signin-fans", element: <SignIn /> },
  { path: "/signin-artists", element: <SignInArtist /> },
  { path: "/signup-fans", element: <SignUp /> },
  { path: "/signup-artists", element: <SignUpArtist /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/change-password", element: <ChangePassword /> },
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
