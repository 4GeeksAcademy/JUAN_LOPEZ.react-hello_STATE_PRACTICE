import React from "react";

import Navbar from "./Navbar";
import Products from "./Products";

//create your first component
const Home = () => {
  console.log("render home")
  return (
    <>
      <Navbar />;
      <div className="container">
        <Products />
      </div>
    </>
  );
};

export default Home;
