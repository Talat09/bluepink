import { useEffect, useState } from "react";
import "./Carousel.css";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
const Carousel = () => {
  const images = [
    "https://i.ibb.co/vLKSdY0/christina-wocintechchat-com-e-F7-HN40-Wb-AQ-unsplash.jpg",
    "https://i.ibb.co/9WPsyvZ/brooke-cagle-g1-Kr4-Ozfoac-unsplash.jpg",

    // Add more image paths as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);
  return (
    <div className="carousel relative font-style">
      <button className="carousel-button prev" onClick={prevSlide}>
        <BiSolidLeftArrow></BiSolidLeftArrow>
      </button>
      <div className="carousel-content ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`${
              index === currentIndex ? "active" : ""
            } w-full carousel-image`}
          />
        ))}
      </div>
      <div className="absolute top-[35%] md:top-[50%] flex flex-col">
        <h2 className="text-2xl md:text-4xl text-center text-white">
          New Collection
        </h2>
        <p className="text-3xl md:text-7xl text-white text-center mt-3">
          For All Session
        </p>
        <p className="uppercase text-xl md:text-2xl text-white text-center mt-3">
          our biggest launch Ever
        </p>
        <button className=" bg-gradient-to-r from-[#ED1F81] to-[#0C4DA1] px-6 py-2 rounded-md text-white mx-auto mt-3">
          Shop Now
        </button>
      </div>

      <button className="carousel-button next" onClick={nextSlide}>
        <BiSolidRightArrow></BiSolidRightArrow>
      </button>
    </div>
  );
};

export default Carousel;
