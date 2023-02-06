import "./Carousel.scss";

const Carousel = (props) => {
  const { data } = props;
  const favouritedData = data.filter((item) => item.data.Favoured === true);

  return (
    <div>
      {favouritedData.map((item) => (
        <div key={item.id} className="Product__Box">
          <h3>Name: {item.data.Name}</h3>
          <p>Price: {item.data.Price}</p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
