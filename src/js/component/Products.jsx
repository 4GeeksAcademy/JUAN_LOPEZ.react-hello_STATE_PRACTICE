import React, { useState } from "react";
import listaProductos from "../listaProductos";
import Card from "./Card";
import ShopCart from "./ShopCart";
import { element } from "prop-types";
const Products = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const handleNewProduct = (producto) => {
    if (shoppingCart.find((element) => element.id === producto.id)) {
      return;
    }
    const newCart = [...shoppingCart, producto];
    setShoppingCart(newCart);
  };
  const productRemove = (product) => {
    const newCart = shoppingCart.filter((element) => element.id !== product.id);
    setShoppingCart(newCart);
  };
  return (
    <>
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
      <ShopCart shoppingCart={shoppingCart} productRemove={productRemove} />
    </>
  );
};

export default Products;
