import "./Carousel.scss";

import Card from "../card/Card";

import { useState } from "react";

const Carousel = ({ data }) => {
  const favouritedData = data.filter((item) => item.data.Favoured === true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(favouritedData.length - 3);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(favouritedData.length - 3);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <div className="Carousel__Grid">
      {favouritedData
        .slice(
          currentIndex,
          currentIndex + (width >= 1200 ? 3 : width >= 800 ? 2 : 1)
        )
        .map((item) => (
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
          &#8249;
        </button>
        <button className="Button Button__right" onClick={handleNextClick}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
