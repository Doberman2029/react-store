import React from "react";
import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <>
      <h2 className="noMatch">
        Данной страницы не существует, перейдите на главную
      </h2>
      <Link className="btn btn-primary noMatch__btn" to="/">
        Главная
      </Link>
    </>
  );
}
