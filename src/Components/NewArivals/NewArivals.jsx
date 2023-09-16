import { AiFillStar } from "react-icons/ai";
// import "./NewArivals.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewArivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleImageHover = (id) => {
    const updatedProducts = [...products];
    updatedProducts[id].showHoverImage = true;
    setProducts(updatedProducts);
  };

  const handleImageLeave = (id) => {
    const updatedProducts = [...products];
    updatedProducts[id].showHoverImage = false;
    setProducts(updatedProducts);
  };
  return (
    <div className="font-style mt-32 mb-32 ">
      <div>
        <h4 className=" text-4xl text-center ">NEW ARRIVALS</h4>
        <Link to="/products">
          <button className=" flex mx-auto border rounded px-2 py-2 text-xs tracking-[.3rem]  mt-3">
            VIEW ALL
          </button>
        </Link>
      </div>
      <div className="grid justify-items-center grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 my-16 gap-5">
        {products.map((product, id) => (
          <div className="w-80 mb-4 " key={id}>
            {product.showHoverImage ? (
              <div>
                <img
                  src={product.hoverImage}
                  className="h-80"
                  alt="Product image"
                  onMouseLeave={() => handleImageLeave(id)}
                />
              </div>
            ) : (
              <img
                src={product.image}
                alt=""
                className="h-80"
                onMouseEnter={() => handleImageHover(id)}
              />
            )}
            <Link to="/shop">
              <button className="hover-button w-full bg-black text-white py-3">
                Quick Shop
              </button>
            </Link>
            <h4 className="text-center text-base mt-4">
              {product.productName}
            </h4>
            <p className="text-center">${product.price}</p>
            <div className="flex justify-center">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArivals;
