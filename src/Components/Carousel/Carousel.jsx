/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Carousel.css";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
const Carousel = () => {
  const images = [
    {
      img: "https://i.ibb.co/vLKSdY0/christina-wocintechchat-com-e-F7-HN40-Wb-AQ-unsplash.jpg",
    },
    {
      img: "https://i.ibb.co/9WPsyvZ/brooke-cagle-g1-Kr4-Ozfoac-unsplash.jpg",
    },

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
    <div className="carousel relative font-style py-16  mb-8">
      <button
        className="carousel-button prev rounded-full    md:w-16 md:h-16 flex items-center z-20"
        onClick={prevSlide}
      >
        <BiSolidLeftArrow className="text-white md:text-black mx-auto "></BiSolidLeftArrow>
      </button>
      <div className="carousel-content relative">
        {images.map((image, index) => (
          <>
            <img
              src={image.img}
              alt={`Slide ${index}`}
              className={`${
                index === currentIndex ? "active" : ""
              } w-full carousel-image`}
            />
            <div
              className={`carousel-image-overlay ${
                index === currentIndex ? "overlay-visible" : ""
              }`}
            ></div>
          </>
        ))}
      </div>
      <div className="absolute top-[35%] md:top-[50%] flex flex-col">
        <h2 className="text-2xl md:text-4xl text-center text-white">
          New Collection
        </h2>
        <p className="text-3xl md:text-7xl text-white text-center md:mt-3">
          For All Session
        </p>
        <p className="uppercase text-xl md:text-2xl text-white text-center md:mt-3">
          our biggest launch Ever
        </p>
        <button className=" bg-gradient-to-r from-[#ED1F81] to-[#0C4DA1] px-6 py-2 rounded-md text-white mx-auto mt-3">
          Shop Now
        </button>
      </div>

      <button
        className="carousel-button next rounded-full    md:w-16 md:h-16 flex items-center"
        onClick={nextSlide}
      >
        <BiSolidRightArrow className="text-white md:text-black mx-auto "></BiSolidRightArrow>
      </button>
    </div>
  );
};

export default Carousel;
