import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ name, price, image, favoured }) => {
  return (
    <div className="Card">
      <Link to={`/products/${name}`}>
        <h1>{name}</h1>
        <h3>${price}</h3>
        <img src={image} alt={name + " Image"} />
        {favoured ? <p className="Favoured">Crowd Favourite</p> : null}
      </Link>
    </div>
  );
};

export default Card;
