import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <h1>Contact</h1>
        <p>(+61) 02 9999 0000</p>
      </div>
      <div>
        <h1>Stores</h1>
        <p>Online Only...For now.</p>
      </div>
      <div>
        <h1>Sign up to our Newsletter</h1>

        <p>
          Email:
          <input type="email" />
        </p>
        <p>Instagram</p>
        <p>LinkedIn</p>
        <p>Facebook</p>
      </div>
    </div>
  );
};

export default Footer;
