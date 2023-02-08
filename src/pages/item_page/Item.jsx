import "./Item.scss";
import { useParams } from "react-router-dom";
import Card from "../../components/card/Card";
import Footer from "../footer/Footer";

const Item = ({ data }) => {
  const { name } = useParams();

  const item = data.find((item) => item.data.Name === name);

  return (
    <>
      <div className="Item">
        <Card
          key={item.id}
          name={item.data.Name}
          price={item.data.Price}
          image={item.data.Image}
          favoured={item.data.Favoured}
        />
      </div>
      <Footer />
    </>
  );
};

export default Item;
