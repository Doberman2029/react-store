import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <Link to="/cart">
      <div className="cart">
        <span role="img" aria-label="cart">
          &#128722;
        </span>
      </div>
    </Link>
  );
}
