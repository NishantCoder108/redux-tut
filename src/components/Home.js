import React from "react";
import Hc from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <h1> Hi, I am Home</h1>

      <div className={Hc.cart_wrapper}>
        <div className="img-wrapper">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3F1uHClGROs9kuyaN3HnmQHaLl%26pid%3DApi&f=1" />
        </div>

        <div className={Hc.text_wrapper}>
          <span> I-Phone</span>
          <span> Price: $126</span>
        </div>
        <div className="btn-wrapper">
          {" "}
          <div className={Hc.imgcart}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.M5zTod2jHjvsUh2Oe5K5cQHaHa%26pid%3DApi&f=1" />
          </div>
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
