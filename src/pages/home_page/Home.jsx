import React from "react";
import Carousel from "../../components/carousel/Carousel.jsx";
import Welcome from "../welcome_page/Welcome.jsx";
import Footer from "../footer/Footer.jsx";

const Home = (props) => {
  const { data } = props;

  return (
    <div>
      <Welcome />
      <Carousel data={data} />
      <Footer />
    </div>
  );
};

export default Home;
