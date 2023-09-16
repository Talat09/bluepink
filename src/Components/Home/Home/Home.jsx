// import Carousel from "../../Carousel/Carousel";
import CategoriShop from "../../CategoriShop/CategoriShop";

import NewArivals from "../../NewArivals/NewArivals";

import NewCarousel from "../../Carousel/NewCarousel";

const Home = () => {
  return (
    <div>
      {/* <Carousel></Carousel> */}
      <NewCarousel></NewCarousel>
      <NewArivals></NewArivals>
      <CategoriShop></CategoriShop>
    </div>
  );
};

export default Home;
