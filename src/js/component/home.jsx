import React, { useState } from "react";

import Navbar from "./Navbar";
import listaProductos from "./listaProductos";
import Card from "./Card";


//create your first component
const Home = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const handleNewProduct = (producto) => {
    if (shoppingCart.find((element) => element.id === producto.id)) {
      return;
    }
    const newCart = [...shoppingCart, producto];
    setShoppingCart(newCart);
    console.log(shoppingCart);
  };

  return (
    <>
      <Navbar />;
      <div className="container">
        <div>
          <p>Carrito {shoppingCart.length}</p>
        </div>
        <div className="row">
          {listaProductos.map((producto) => {
            return (
              <Card
                key={producto.id}
                image_url={producto.image_url}
                categoria={producto.categoria}
                price={producto.precio}
                content={producto.content}
                title={producto.title}
                handleNewProduct={handleNewProduct}
                id={producto.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
