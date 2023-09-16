/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Carousel.css";
const NewCarousel = () => {
  const images = [
    {
      title: "NEW ARRIVALS",
      description: "For All Session",
      subtitle: "our biggest launch Ever",
      img: "https://i.ibb.co/fvScQtN/christina-wocintechchat-com-e-F7-HN40-Wb-AQ-unsplash-1.jpg",
      buttonText: "Shop Now",
    },
    {
      title: "SUMMER ARRIVALS",
      description: "For All Session",
      subtitle: "our biggest launch Ever",
      img: "https://i.ibb.co/LZPKFhw/ezgif-1-ad539910b4.jpg",
      buttonText: "New Arrivals",
    },
    // Add more image data as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);
  return (
    <div className="carousel relative font-style py-32 md:py-16 mb-8 ">
      <div className="carousel-content relative ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              src={image.img}
              alt={`Slide ${index}`}
              className={`${
                index === currentIndex
                  ? "active"
                  : "w-full h-[100vh] carousel-image "
              } w-full carousel-image`}
            />
            <div
              className={`carousel-image-overlay ${
                index === currentIndex ? "overlay-visible " : ""
              }`}
            ></div>
          </div>
        ))}
      </div>

      <div className="absolute top-[35%] lg:top-[50%] md:top-[45%] flex flex-col">
        <h2 className="text-2xl md:text-4xl text-center text-white">
          {images[currentIndex].title}
        </h2>
        <p className="text-3xl md:text-7xl text-white text-center mt-0 md:mt-3">
          {images[currentIndex].description}
        </p>
        <p className="uppercase text-xl md:text-2xl text-white text-center md:mt-3">
          {images[currentIndex].subtitle}
        </p>
        <button className="bg-gradient-to-r from-[#ED1F81] to-[#0C4DA1] px-6 py-2 rounded-md text-white mx-auto mt-1 md:mt-3">
          {images[currentIndex].buttonText}
        </button>
      </div>

      <span className="indicators flex absolute bottom-[127px] md:bottom-16 gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`${
              currentIndex === idx
                ? " bg-white h-2 w-2 md:h-2 md:w-2 lg:h-4 lg:w-4 rounded-full border-none outline-none shadow-md my-1"
                : "h-2 w-2 md:h-2 md:w-2 lg:h-4 lg:w-4 rounded-full border-none outline-none shadow-md my-1 active:bg-white bg-gray-400"
            }`}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default NewCarousel;
