import React, { useState } from "react";
import listaProductos from "../listaProductos";
import Card from "./Card";

const Products = () => {
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
      <div>
        <p>Carrito {shoppingCart.length}</p>
      </div>

      <div className="row gap-5">
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
      <div className="cart-fab">
        <div className="container d-flex justify-content-end">
          <button className="btn btn-warning">
            <span>Modal</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
