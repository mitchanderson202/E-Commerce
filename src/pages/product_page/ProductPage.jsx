import "./ProductPage.scss";

import Products from "../../components/products/Products.jsx";

const ProductPage = ({ data }) => {
  return (
    <div>
      <Products data={data} />
    </div>
  );
};

export default ProductPage;
