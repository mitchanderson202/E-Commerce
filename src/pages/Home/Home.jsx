import React from "react";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Welcome from "../Welcome/Welcome.jsx";

const Home = (props) => {
  const { data } = props;

  return (
    <div>
      <Welcome />
      <Carousel data={data} />
    </div>
  );
};

export default Home;
