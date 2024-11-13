import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbars from "../../components/Navbar";
import CartProvider from "../../provider/CartProvider";

const Rootpage = () => {
  return (
    <div>
      <CartProvider>
        <div>
          <Navbars></Navbars>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </CartProvider>
    </div>
  );
};

export default Rootpage;
