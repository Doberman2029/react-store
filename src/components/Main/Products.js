import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import NoMatch from "./NoMatch";
import ProductDescription from "./ProductDescription";
import ProductItem from "./ProductItem";

export default function Products({ products }) {
  let { id } = useParams();

  if (!products.find((el) => el.genre === id)) {
    return <NoMatch />;
  }

  let [{ vinilName }] = products.filter((el) => el.genre === id);
  return (
    <div className="cards">
      {vinilName.map((el) => (
        <ProductItem el={el} genre={id} key={el.id} />
      ))}
      <Switch>
        <Route
          path={`/${id}/:id`}
          children={<ProductDescription about={vinilName} genre={id} />}
        />
      </Switch>
    </div>
  );
}
