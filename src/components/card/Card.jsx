import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="Card">
      <Link to={`/products/${data.Name}`}>
        <h1>{data.Name}</h1>
        <h3>${data.Price}</h3>
        <img src={data.Image} alt={data.Name + " Image"} />
        {data.Favoured ? <p className="Favoured">Crowd Favourite</p> : null}
      </Link>
    </div>
  );
};

export default Card;
