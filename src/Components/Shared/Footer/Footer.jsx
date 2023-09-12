import { Link } from "react-router-dom";
import "./Footer.css";
import MenuItems from "./menuItemsData";
const Footer = () => {
  return (
    <footer className="font-style">
      <div className="grid  grid-cols-1 lg:grid-cols-5 md:grid-cols-3 mx-10">
        {MenuItems.map((category) => (
          <div key={category.category} className="mt-4">
            <h4 className="text-lg font-semibold">{category.category}</h4>
            <div className="mt-4">
              {category.items.map((item) => (
                <li key={item.label} className="list-none">
                  <Link className="text-sm hover:text-red-500" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-4">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <div className="mt-4">
            <li className="list-none text-sm">
              Nekrojbag, Keranigonj, Dhaka 1207 Dhaka, Dhaka Division,
              Bangladesh
            </li>
            <li className="list-none text-sm">+88 01841 103725</li>
            <li className="list-none text-sm">bluepink@gmail.com</li>
          </div>
        </div>
      </div>
      <p className="text-center mt-6 bg-[#0C4DA1] text-white py-4">
        @ 2023 All Right Reserved Blue Pink Furniture
      </p>
    </footer>
  );
};

export default Footer;
