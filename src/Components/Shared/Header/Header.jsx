import { useState } from "react";
import Navbar, { menu } from "./Navbar";
import Search from "./Search";
import Logo from "./logo";
import { HiBars4, HiXMark } from "react-icons/hi2";
const Header = () => {
  // State to track the visibility of the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="shadow-md ">
      <div className="flex justify-between  items-center md:mx-32 h-28 mx-4 ">
        <Navbar></Navbar>
        <Logo></Logo>
        <Search></Search>
        {/* Conditionally render the icon for mobile devices */}
        <div className="lg:hidden md:block block ">
          {/* Toggle the "bars" or "X" icon based on menu visibility */}
          {isMobileMenuOpen ? (
            <HiXMark className="text-xl" onClick={toggleMobileMenu} />
          ) : (
            <HiBars4 className="text-xl" onClick={toggleMobileMenu} />
          )}
        </div>

        {/* Conditionally render the mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden md:hidden block absolute top-0 left-0 h-full ">
            {/* Add your mobile menu content here */}
            <ul className=" h-full  bg-white text-black  w-40 shadow-md py-8">
              {menu}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
