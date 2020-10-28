import React from "react";
import { Link } from "react-router-dom";
import { BuyButton } from "./BuyButton";

export default function ProductItem({ el, genre }) {
  return (
    <div className="card" key={el.id}>
      <img
        src={process.env.PUBLIC_URL + `/items/${genre}_${el.id}.jpg`}
        className="card-img-top"
        alt="text"
      />
      <div className="card-body">
        <h5 className="card-title">{el.author}</h5>
        <p className="card-text">{el.name}</p>
        <p className="card-text">Цена: {el.price} условных единиц</p>
        <div className="card-link">
          <Link to={`/${genre}/${el.id}`} className="btn btn-primary card-btn">
            Подробнее
          </Link>
          <BuyButton vinylName={el} genre={genre} />
        </div>
      </div>
    </div>
  );
}
