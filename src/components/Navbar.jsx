import { useState } from "react";
import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// declar navitems
const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact " },
];

// for display navitems
const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row md:space-x-8 gap-6">
      {navItems.map((item, idx) => (
        <li key={idx} onClick={toggleMenu}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold text-primary" : "hover:text-primary"
            }
            to={item.path}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

// Navbar start here
const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className=" absolute z-50 w-full text-white">
      <header className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
        <section>
          <h2 className="font-bold text-xl italic opacity-80">Panto</h2>
        </section>

        <section className="hidden md:flex">
          <NavItems></NavItems>
        </section>

        {/* hamberger menu */}

        <div
          onClick={toggleMenu}
          className="md:hidden text-xl cursor-pointer hover:text-primary "
        >
          {/* <FaBars></FaBars> */}
          {isMenuOpen ? null : <FaBars />}
        </div>

        {/* mobile menu items */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black opacity-70 flex flex-col items-center justify-center text-white space-y-6 transition-transform transform  ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div
            className="cursor-pointer absolute top-4 right-2 text-xl"
            onClick={toggleMenu}
          >
            <FaTimes></FaTimes>
          </div>

          <NavItems toggleMenu={toggleMenu} />
        </div>

        {/* shoping cart */}
        <section className="hidden md:block cursor-pointer relative">
          <FaShoppingBag className="text-xl" />
          <sup className=" absolute -top-2 -right-2.5 bg-primary h-4 w-4 rounded-full flex items-center justify-center text-white text-xs">
            0
          </sup>
        </section>
      </header>
    </div>
  );
};

export default Navbars;
