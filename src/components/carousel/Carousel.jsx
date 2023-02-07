import "./Carousel.scss";

import Card from "../card/Card";

import { useState } from "react";

const Carousel = ({ data }) => {
  const favouritedData = data.filter((item) => item.data.Favoured === true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
    if (currentIndex - 1 < 0) {
      setCurrentIndex(favouritedData.length - 3);
    }
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex + 3 > favouritedData.length) {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="Carousel__Grid">
      {favouritedData.slice(currentIndex, currentIndex + 3).map((item) => (
        <Card
          key={item.id}
          name={item.data.Name}
          price={item.data.Price}
          image={item.data.Image}
          favoured={item.data.Favoured}
        />
      ))}
      <div className="Buttons">
        <button className="Button Button__left" onClick={handlePrevClick}>
          L
        </button>
        <button className="Button Button__right" onClick={handleNextClick}>
          R
        </button>
      </div>
    </div>
  );
};

export default Carousel;
