import React from "react";
import { Link } from "react-router-dom";

export default function Categories({ genre, name }) {
  return (
    <ul className={"genre__list"}>
      <li>
        <Link to={`/${genre}`} className="genre__link btn btn-primary">
          {name}
        </Link>
      </li>
    </ul>
  );
}
