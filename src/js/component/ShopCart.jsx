import React from "react";

const ShopCart = ({ shoppingCart, productRemove }) => {
  return (
    <>
      <div className="cart-fab">
        <div className="container d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="bi bi-cart-fill"></i>
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                {shoppingCart.map((product) => {
                  return (
                    <div
                      className="col-12 my-1 d-flex justify-content-between"
                      key={product.id}
                    >
                      {product.title}
                      <button
                        className="btn btn-danger "
                        onClick={() => productRemove(product)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCart;
