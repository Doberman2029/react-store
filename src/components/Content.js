import React, { useState, createContext, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Categories from "./Sidebar/Categories";
import Products from "./Main/Products";
import SearchFilter from "./Main/SearchFilter";
import { CartOrder } from "./Main/CartOrder";
import { allVinyl } from "./Other/AllVinyl";
import Order from "./Main/Order";

export const CartItemsContext = createContext();

export default function Content() {
  let json = localStorage.getItem("itemList");
  let initialState = json ? JSON.parse(json) : [];

  const [active, setActive] = useState(false);
  const [item, setItem] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("itemList", JSON.stringify(item));
  }, [item]);

  const addItemHandler = (vinylName, genre) => {
    setItem((prev) => [...prev, { ...vinylName, genre: genre, count: 1 }]);
  };
  const removeItemHandler = (id) => {
    setItem((prev) => prev.filter((el) => el.id !== id));
  };

  const activeHandler = () => setActive(!active);

  const plusCounterHandler = (id) => {
    setItem((prev) =>
      prev.map((el) => ({
        ...el,
        count: el.id === id ? el.count + 1 : el.count,
      }))
    );
  };
  const minusCounterHandler = (id) => {
    if (item.find((el) => el.id === id).count <= 1) {
      return;
    }
    setItem((prev) =>
      prev.map((el) => ({
        ...el,
        count: el.id === id ? el.count - 1 : el.count,
      }))
    );
  };

  return (
    <CartItemsContext.Provider
      value={{
        item,
        addItemHandler,
        removeItemHandler,
        minusCounterHandler,
        plusCounterHandler,
      }}
    >
      <div className="content">
        <div
          className={`сategories ${active ? "active" : ""}`}
          onClick={activeHandler}
        >
          <ul className="genre__list">
            <li>
              <Link to={`/`} className="genre__link btn btn-primary">
                На главную
              </Link>
            </li>
          </ul>
          {allVinyl.map((
            el,
            index // using index because it's doesn't changes
          ) => (
            <Categories genre={el.genre} name={el.linkName} key={index} />
          ))}
        </div>
        <Switch>
          <Route path="/search">
            <SearchFilter />
          </Route>
          <Route path="/cart">
            <CartOrder />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route
            path="/:id"
            children={
              <div className="main">
                <Products products={allVinyl} />
              </div>
            }
          />
        </Switch>
      </div>
    </CartItemsContext.Provider>
  );
}
