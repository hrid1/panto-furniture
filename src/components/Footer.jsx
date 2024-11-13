import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 md:py-14">
      <section className="container mx-auto px-4 md:px-12 py-4  grid grid-cols-2 md:grid-cols-4 gap-6  md:place-items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Panto</h2>
          <p className="">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
        </div>
        {/* services */}
        <div className="">
          <h2 className="text-xl text-primary font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/">Email Marketing</Link>
            </li>
            <li>
              <Link to="/">Campaigns</Link>
            </li>
            <li>
              <Link to="/">Branding</Link>
            </li>
          </ul>
        </div>
        {/* Furniture */}
        <div className="">
          <h2 className="text-xl text-primary font-semibold mb-4">Furniture</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/">Beds</Link>
            </li>
            <li>
              <Link to="/">Chair</Link>
            </li>
            <li>
              <Link to="/">All</Link>
            </li>
          </ul>
        </div>
        {/* services */}
        <div className="">
          <h2 className="text-xl text-primary font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2.5">
              <FaFacebookF />
              <Link to="/">Facebook</Link>
            </li>
            <li className="flex items-center gap-2.5">
              <BsTwitterX />
              <Link to="/">Twitter</Link>
            </li>
            <li className="flex items-center gap-2.5">
              <FaInstagram />
              <Link to="/">Branding</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-12 ">
        <hr />
        <div className="flex justify-between mt-4">
          <p>Copyright &copy; {new Date().getFullYear()} </p>
          <div className="space-x-4">
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
