import "./Carousel.scss";

import Card from "../card/Card";

const Carousel = ({ data }) => {
  const favouritedData = data.filter((item) => item.data.Favoured === true);

  return (
    <div className="Carousel__Grid">
      {favouritedData.map((item) => (
        <Card
          key={item.id}
          name={item.data.Name}
          price={item.data.Price}
          image={item.data.Image}
        />
      ))}
    </div>
  );
};

export default Carousel;
