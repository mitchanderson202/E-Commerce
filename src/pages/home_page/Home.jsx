import React from "react";
import Carousel from "../../components/carousel/Carousel.jsx";

const Home = (props) => {
  const { data } = props;

  return (
    <div>
      <Carousel data={data} />
    </div>
  );
};

export default Home;
