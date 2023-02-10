import "./ProductGrid.scss";

import AllProducts from "../../components/AllProducts/AllProducts.jsx";

const ProductGrid = ({ data }) => {
  return (
    <div>
      <AllProducts data={data} />
    </div>
  );
};

export default ProductGrid;
