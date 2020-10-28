import React from "react";
import { useParams } from "react-router-dom";
import { BuyButton } from "./BuyButton";
import EasterEgg from "./EasterEgg";

export default function ProductDescription({ about, genre }) {
  let { id } = useParams();
  let currentProduct = about.find((el) => el.id === id);

  if (id === "10") {
    return <EasterEgg />; // /pop/10
  }

  return (
    <div className="about">
      <h3 className="about__title">
        {currentProduct.author} ({currentProduct.year}) | {genre}
      </h3>
      <div className="about__image-text">
        <img
          src={process.env.PUBLIC_URL + `/items/${genre}_${id}.jpg`}
          className="about__image"
          alt="text"
        />
        <div className="about__text">
          <p className="about__p">
            На этом сайте вы можете купить пластинку группы '
            {currentProduct.author}' изданную в {currentProduct.year} под
            названием {currentProduct.name}. Данную пластинку вы можете забрать
            всего за {currentProduct.price} условных единиц
          </p>
          <BuyButton vinylName={currentProduct} genre={genre} />
        </div>
      </div>
    </div>
  );
}
