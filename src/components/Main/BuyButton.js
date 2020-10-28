import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../Content";

export function BuyButton({ vinylName, genre }) {
  const { addItemHandler, item } = useContext(CartItemsContext);

  if (item.find((el) => el.id === vinylName.id)) {
    return (
      <Link className="btn btn-primary about__btn" to="/cart">
        В корзину
      </Link>
    );
  }

  return (
    <button
      className="btn btn-primary about__btn"
      onClick={() => addItemHandler(vinylName, genre)}
    >
      Купить
    </button>
  );
}
