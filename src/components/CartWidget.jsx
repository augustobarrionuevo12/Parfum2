import React from "react";

const CartWidget = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary position-relative bg-secondary"
        style={{ display: "flex", alignItems: "center" }}
      >
        Mis compras
        <img
          src="/images/bx-cart-add.svg"
          alt="carrito"
          style={{ marginLeft: "8px" }}
        />
        <span
          className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
          style={{ marginLeft: "8px" }}
        >
          <span className="visually-hidden">New alerts</span>
        </span>
      </button>
    </div>
  );
};

export default CartWidget;
