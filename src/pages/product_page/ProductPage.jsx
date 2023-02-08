import "./ProductPage.scss";

import Products from "../../components/products/Products.jsx";
import Footer from "../footer/Footer.jsx";

const ProductPage = ({ data }) => {
  return (
    <div>
      <Products data={data} />
      <Footer />
    </div>
  );
};

export default ProductPage;
