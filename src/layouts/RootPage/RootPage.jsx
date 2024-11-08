import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbars from "../../components/Navbar";

const Rootpage = () => {
  return (
    <div>
      <Navbars></Navbars>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Rootpage;
