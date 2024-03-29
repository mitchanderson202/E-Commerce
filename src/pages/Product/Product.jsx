import "./Product.scss";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";

const Product = ({ data, addToCart, added }) => {
  const { name } = useParams();

  const item = data.find((item) => item.data.Name === name);

  return (
    <>
      <div className="Product">
        <Card data={item.data} />
        <div className="Buy__Information">
          <h1>{item.data.Name}</h1>
          <h3>Price: ${item.data.Price}</h3>

          <button className="Cart__btn" onClick={() => addToCart(item.data)}>
            Add to Cart
          </button>
          {added && <p>{added}</p>}
        </div>
      </div>
    </>
  );
};

export default Product;
