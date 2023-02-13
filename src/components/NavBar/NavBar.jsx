import "./NavBar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1>
        <NavLink to="/">Home</NavLink>
      </h1>
      <h1>
        <NavLink to="/products">All Products</NavLink>
      </h1>
      <h1 className="Cart__Page">
        <NavLink to="/cart">Cart</NavLink>
      </h1>
    </div>
  );
};

export default Navbar;
