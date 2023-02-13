import "./Cart.scss";

import Card from "../../components/Card/Card";

const Cart = ({ data }) => {
  return (
    <>
      <div className="Cart">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
