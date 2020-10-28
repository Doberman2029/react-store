import React, { useContext } from "react";
import { CartItemsContext } from "../Content";

export default function CartOrderItem({ vinyl, genre }) {
  let {
    removeItemHandler,
    minusCounterHandler,
    plusCounterHandler,
  } = useContext(CartItemsContext);

  return (
    <div className="cart-order__item">
      <p className="cart-order__item-description">
        <img
          src={process.env.PUBLIC_URL + `/items/${genre}_${vinyl.id}.jpg`}
          className="cart-order__image"
          alt="text"
        />
        <span className="cart-order__item-text">
          {vinyl.author} | {vinyl.year} <br />
          {vinyl.name}
        </span>
      </p>
      <div className="cart-order__item-description-order">
        <button
          type="button"
          className="cart-order__item-delete-btn"
          onClick={() => removeItemHandler(vinyl.id)}
        >
          &#10006;
        </button>
        <p className="cart-order__item-price">Цена: {vinyl.price} у. е.</p>
        <form className="cart-order__item-form">
          <input
            type="button"
            className={`btn btn-primary btn__cart-order-counter minus ${
              vinyl.count > 1 ? "" : "disabled"
            }`}
            value="-"
            onClick={() => minusCounterHandler(vinyl.id)}
          />
          <span className="cart-order__number-input">{vinyl.count}</span>
          <input
            type="button"
            className="btn btn-primary btn__cart-order-counter"
            value="+"
            onClick={() => plusCounterHandler(vinyl.id)}
          />
        </form>
      </div>
    </div>
  );
}
