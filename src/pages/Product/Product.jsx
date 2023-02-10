import "./Product.scss";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";

const Product = ({ data }) => {
  const { name } = useParams();

  const item = data.find((item) => item.data.Name === name);

  return (
    <>
      <div className="Product">
        <Card data={item.data} />
        <div className="Buy__Information">
          <h1>{item.data.Name}</h1>
          <h3>Price: ${item.data.Price}</h3>
          <p>Size</p>
          <button className="Cart">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
