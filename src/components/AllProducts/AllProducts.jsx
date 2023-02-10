import "./AllProducts.scss";

import Card from "../Card/Card";

const AllProducts = ({ data }) => {
  return (
    <div className="All__Products">
      {data.map((product) => (
        <Card key={product.id} data={product.data} />
      ))}
    </div>
  );
};

export default AllProducts;
