import "./Products.scss";

import Card from "../card/Card";

const Products = ({ data }) => {
  return (
    <div className="Products">
      {data.map((product) => (
        <Card
          key={product.id}
          name={product.data.Name}
          price={product.data.Price}
          image={product.data.Image}
          favoured={product.data.Favoured}
        />
      ))}
    </div>
  );
};

export default Products;
