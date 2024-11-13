import { Children } from "react";
import Rootpage from "../../Layouts/Rootpage/Rootpage";
import Homepage from "../../pages/Homepage/Homepage";
import About from "../../pages/About/About";
import { createBrowserRouter } from "react-router-dom";
import Contact from "../../pages/Contact/Contact";
import Shop from "../../pages/Shop/Shop";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Auth from "../../pages/Auth/Auth";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Rootpage />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/shop",
          element: <Shop />,
          loader: () => fetch("../products.json"),
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          path: "/auth",
          element: <Login />,
        },
        {
          path: "/auth/register",
          element: <Register />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_skipActionErrorRevalidation: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
  }
);
