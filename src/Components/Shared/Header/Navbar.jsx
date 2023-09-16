/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import "./Header.css";
export const menu = (
  <>
    <li className="me-6 py-1 md:py-0 text-center">
      <Link className="text-sm hover:text-red-500" to="/">
        Home
      </Link>
    </li>

    <li className="me-6 py-1  md:py-0 text-center relative">
      <Link className="text-sm   hover:text-red-500" to="/products">
        Products
      </Link>
      <div className="w-80 text-start  hidden absolute top-full left-0 bg-white text-black shadow-lg p-4 subLink">
        {/* Content of the div */}
        <ul>
          <li className="me-6 py-1 md:py-0 ">
            <Link className="text-sm hover:text-red-500" to="/officeRoom">
              Office Room
            </Link>
          </li>
          <li className="me-6 py-1 md:py-0 ">
            <Link className="text-sm hover:text-red-500" to="/playRoom">
              Play Room
            </Link>
          </li>
          <li className="me-6 py-1 md:py-0 ">
            <Link className="text-sm hover:text-red-500" to="/bedRoom">
              Bed Room
            </Link>
          </li>
          <li className="me-6 py-1 md:py-0 ">
            <Link className="text-sm hover:text-red-500" to="/bed">
              Bed
            </Link>
          </li>
          <li className="me-6 py-1 md:py-0 ">
            <Link className="text-sm hover:text-red-500" to="/sofas">
              Sofas
            </Link>
          </li>
          <li className="me-6 py-1 md:py-0 ">
            <Link className="text-sm hover:text-red-500" to="/livingRoom">
              Living Room
            </Link>
          </li>
          <li className="me-6 py-1 md:py-0 ">
            <Link
              className="text-sm hover:text-red-500"
              to="/dining-table-chair"
            >
              Dining Table & Chair
            </Link>
          </li>
          <li className="me-6 py-1 md:py-0 ">
            <Link
              className="text-sm hover:text-red-500"
              to="/hammering-delivery"
            >
              Hammering Delivery
            </Link>
          </li>
          <li className="me-6 py-1 md:py-0 ">
            <Link className="text-sm hover:text-red-500" to="/arm-chair">
              Arm Chair
            </Link>
          </li>
          <li className="me-6 py-1 md:py-0 ">
            <Link className="text-sm hover:text-red-500" to="/console-table">
              Console Table
            </Link>
          </li>
          <li className="me-6 py-1 md:py-0 ">
            <Link className="text-sm hover:text-red-500" to="/centre-table">
              Centre Table
            </Link>
          </li>
          <li className="me-6 py-1 md:py-0 ">
            <Link
              className="text-sm hover:text-red-500"
              to="/corners-l-shapes-sofas"
            >
              Corners / L-Shape Sofas
            </Link>
          </li>
        </ul>
      </div>
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
const Navbar = () => {
  return (
    <div className="font-style">
      <ul className="lg:flex md:hidden hidden justify-center  items-center">
        {menu}
      </ul>
    </div>
  );
};

export default Navbar;
