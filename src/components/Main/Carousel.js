import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { allVinyl } from "../Other/AllVinyl";
import ProductDescription from "./ProductDescription";

export default function Carousel() {
  const [click, setClick] = useState(false);
  const randomArrayIndex = (arr) => Math.floor(Math.random() * arr.length);
  const { genre, vinilName } = allVinyl[randomArrayIndex(allVinyl)];
  const vinyl = vinilName[randomArrayIndex(vinilName)];
  const btnHandler = (e) => {
    e.preventDefault();
    setClick(!click);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setClick(!click);
    }, 5000);
    return () => clearInterval(timer);
  });

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={process.env.PUBLIC_URL + `/items/${genre}_${vinyl.id}.jpg`}
            className="d-block"
            alt="..."
          />
          <h2 className="carousel__title">
            {vinyl.author} | {vinyl.year}
          </h2>
          <p className="carousel__text">{vinyl.name}</p>
          <Link
            to={`/${genre}/${vinyl.id}`}
            className="btn btn-primary card-btn"
          >
            Подробнее
          </Link>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="/"
        role="button"
        data-slide="prev"
        onClick={btnHandler}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="/"
        role="button"
        data-slide="next"
        onClick={btnHandler}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <Switch>
        <Route
          path={`/${genre}/:id`}
          children={<ProductDescription about={vinilName} genre={genre} />}
        />
      </Switch>
    </div>
  );
}
