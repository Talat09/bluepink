import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CategoriShop.css";
const CategoriShop = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);
  return (
    <div className="font-style">
      <h4 className=" text-4xl text-center ">SHOP BY CATEGORY</h4>
      <div className="max-w-[1240px] mx-auto">
        <div className="grid justify-items-center grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 my-16 gap-5 md:mx-8">
          {categories.map((item, i) => (
            <div key={i} className="relative mx-4  ">
              <div className="image-container duration-300  cursor-pointer">
                <img className="w-[263px] h-[263px]" src={item.img} alt="" />
              </div>

              <Link to="shop">
                <button className="text-center bg-white w-[180px] py-2 border-1 border-black absolute bottom-2 left-[20%] uppercase  mx-auto text-base">
                  {item.Category}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriShop;
