import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductItem from "./ProductItem";

export default function SearchResult({ vinyl }) {
  if (vinyl.length < 1) {
    return (
      <h2 className="result__text">
        Увы, но ничего не найдео, попробуйте новый запрос
      </h2>
    );
  }

  return (
    <div className="cards">
      {vinyl.map((el) => (
        <ProductItem el={el} genre={el.genre} key={el.id} />
      ))}
      <Switch>
        <Route path={`/:genre/:id`} />
      </Switch>
    </div>
  );
}
