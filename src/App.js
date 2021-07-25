import React from "react";
import HomeContainer from "./containers/HomeContainer";
import NavbarContainer from "./containers/NavbarContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <hr/>
      <hr/>
      <hr/>
      <HomeContainer />
    </div>
  );
}

export default App;
