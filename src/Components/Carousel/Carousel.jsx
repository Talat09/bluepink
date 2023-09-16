/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Carousel.css";
// import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
const Carousel = () => {
  const images = [
    {
      title: "First Slide",
      description: "This is the first slider Image of our carousel",
      img: "https://i.ibb.co/vLKSdY0/christina-wocintechchat-com-e-F7-HN40-Wb-AQ-unsplash.jpg",
    },
    {
      title: "Second Slide",
      description: "This is the first slider Image of our carousel",
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

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };
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
      <div className="carousel-content relative">
        {images.map((image, index, i) => (
          <div key={i}>
            <img
              src={image.img}
              alt={`Slide ${index}`}
              className={`${
                index === currentIndex ? "active" : ""
              } w-full  carousel-image`}
            />

            <div
              className={`carousel-image-overlay ${
                index === currentIndex ? "overlay-visible" : ""
              }`}
            ></div>
          </div>
        ))}
      </div>

      <div className="absolute top-[35%] md:top-[50%] flex flex-col">
        <h2 className="text-2xl md:text-4xl text-center text-white">
          New Collection
        </h2>
        <p className="text-3xl md:text-7xl text-white text-center mt-0 md:mt-3">
          For All Session
        </p>
        <p className="uppercase text-xl md:text-2xl text-white text-center md:mt-3">
          our biggest launch Ever
        </p>
        <button className=" bg-gradient-to-r from-[#ED1F81] to-[#0C4DA1] px-6 py-2 rounded-md text-white mx-auto mt-1 md:mt-3">
          Shop Now
        </button>
      </div>

      <span className="indicators flex absolute bottom-[65px] md:bottom-[80px] gap-3">
        {images.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`${
                currentIndex === idx
                  ? " bg-white h-2 w-2 md:h-4 md:w-4 rounded-full border-none outline-none shadow-md my-1"
                  : "h-2 w-2 md:h-4 md:w-4 rounded-full border-none outline-none shadow-md my-1 active:bg-white bg-gray-400"
              }`}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
