import React from "react";
import Hc from "./Home.module.css";
const Home = (props) => {
  console.log("Home", props);
  return (
    <div>
      <h1> Hi, I am Home</h1>
      {/* <span className={Hc.cart_num}>{props.data.length}</span> */}
      <div className={Hc.cart_wrapper}>
        <div className="img-wrapper">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3F1uHClGROs9kuyaN3HnmQHaLl%26pid%3DApi&f=1" />
        </div>

        <div className={Hc.text_wrapper}>
          <span> I-Phone</span>
          <span> Price: $126</span>
        </div>

        <div className="btn-wrapper">
          {/* <div className={Hc.imgcart}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.M5zTod2jHjvsUh2Oe5K5cQHaHa%26pid%3DApi&f=1" />
          </div> */}
          <button
            onClick={() => {
              props.addToCartHandler({ price: 1000, name: "iphone3" });
            }}
            // Here ,we click then this data spread in whole components
          >
            Add To Cart
          </button>
          <button
            onClick={() => {
              props.removeToCartHandler();
            }}
            // Here ,we click then this data spread in whole components
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
