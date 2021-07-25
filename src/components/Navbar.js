import React from "react";
import Hc from "./Home.module.css";
const Home = (props) => {
  console.log("Home", props.data);
  return (
    <div>
      <h1> Hi, I am Nabar</h1>
      <span className={Hc.cart_num}>{props.data.length}</span>

      <div className="btn-wrapper">
        <div className={Hc.navimg}>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.M5zTod2jHjvsUh2Oe5K5cQHaHa%26pid%3DApi&f=1" />
        </div>
        
       
      </div>
    </div>
  );
};

export default Home;
