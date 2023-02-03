import "./Home.scss";

import Carousel from "../../components/carousel/Carousel";

const Home = () => {
  return (
    <div className="Home">
      <header>
        <h1>... Shop</h1>
      </header>
      <main>
        <Carousel />
      </main>
      <footer>
        <p>Links</p>
      </footer>
    </div>
  );
};

export default Home;
