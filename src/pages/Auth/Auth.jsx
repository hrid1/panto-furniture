//  React from 'react';
import banner from "../../assets/banner.png";
import fcover from "../../assets/fcover.jpg";

import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div
      className="h-screen bg-cover flex items-center justify-center bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${fcover})` }}
    >
      <Outlet></Outlet>
    </div>
  );
};

export default Auth;

