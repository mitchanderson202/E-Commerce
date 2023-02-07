import "./Card.scss";

const Card = ({ name, price, image }) => {
  return (
    <div className="Card">
      <h1>{name}</h1>
      <h3>${price}</h3>
      <img src={image} alt={name + " Image"} />
      <p className="__favoured">Crowd Favourite</p>
    </div>
  );
};

export default Card;
