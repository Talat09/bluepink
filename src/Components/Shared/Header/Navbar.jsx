import { Link } from "react-router-dom";
import "./Header.css";
const Navbar = () => {
  const menu = (
    <>
      <li className="me-6 py-1 md:py-0 text-center">
        <Link className="text-sm hover:text-red-500" to="/">
          Home
        </Link>
      </li>

      <li className="me-6 py-1 md:py-0 text-center ">
        <Link className="text-sm hover:text-red-500" to="/products">
          Products
        </Link>
      </li>
      <li className="me-6 py-1 md:py-0 text-center">
        <Link className="text-sm hover:text-red-500" to="/shop">
          Shop
        </Link>
      </li>
      <li className="me-6 py-1 md:py-0 text-center">
        <Link className="text-sm hover:text-red-500" to="/about">
          About
        </Link>
      </li>
      <li className="me-6 py-1 md:py-0 text-center">
        <Link className="text-sm hover:text-red-500" to="/contact">
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <div className="font-style">
      <ul className="lg:flex md:flex hidden justify-center  items-center">
        {menu}
      </ul>
    </div>
  );
};

export default Navbar;
