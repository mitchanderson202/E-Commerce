import "./Products.scss";

const Products = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.data.Name}</p>
          <h3>Name: {item.data.Name}</h3>
          <p>Price: {item.data.Price}</p>
          <p>Favourited: {item.data.Favourited}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
