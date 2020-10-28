import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartOrderItem from "./CartOrderItem";
import { CartItemsContext } from "../Content";

export function CartOrder() {
  let { item } = useContext(CartItemsContext);

  if (item.length === 0) {
    return (
      <div className="main">
        <h2 className="cart-order__empty">
          Увы, а может и к счастью, но корзина пуста
        </h2>
      </div>
    );
  }

  let totalPrice = item
    .map((el) => el.price * el.count)
    .reduce((init, v) => init + v);

  return (
    <div className="main">
      <div className="cart-order__inner">
        <h3 className="cart-order__text">Корзина</h3>
        <div className="cart-order__items">
          {item.map((el) => (
            <CartOrderItem vinyl={el} key={el.id} genre={el.genre} />
          ))}
        </div>
        <div className="cart-order__order">
          <p className="cart-order__order-text">
            Общая цена: {totalPrice} у. е.
          </p>
          <Link to="/order" className="btn btn-primary btn__cart-order">
            Оформить
          </Link>
        </div>
      </div>
    </div>
  );
}
