import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const clearInput = () => setInput("");

  return (
    <div className="search">
      <input
        className="search__input"
        onChange={inputHandler}
        value={input}
        placeholder="Ввод на английском языке =("
      />
      <Link
        to={{
          pathname: "/search",
          hash: `#${input}`,
        }}
        className={`btn btn-primary search__btn ${
          input.length > 0 ? "" : "disabled"
        }`}
        onClick={clearInput}
      >
        Найти
      </Link>
    </div>
  );
}
