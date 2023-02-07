import "./Card.scss";

const Card = ({ name, price, image, favoured }) => {
  return (
    <div className="Card">
      <h1>{name}</h1>
      <h3>${price}</h3>
      <img src={image} alt={name + " Image"} />
      {favoured ? <p className="Favoured">Crowd Favourite</p> : null}
    </div>
  );
};

export default Card;
