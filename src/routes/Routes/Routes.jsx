import { Children } from "react";
import Rootpage from "../../Layouts/Rootpage/Rootpage";
import Homepage from "../../pages/Homepage/Homepage";
import About from "../../pages/About/About";
import { createBrowserRouter } from "react-router-dom";
import Contact from "../../pages/Contact/Contact";
import Shop from "../../pages/Shop/Shop";

export const router = createBrowserRouter([
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
]);
