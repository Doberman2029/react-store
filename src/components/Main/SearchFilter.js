import React from "react";
import { useLocation } from "react-router-dom";
import { allVinyl } from "../Other/AllVinyl";
import SearchResult from "./SearchResult";

export default function SearchFilter() {
  let { hash } = useLocation();
  hash.length > 0 ? (hash = hash.slice(1).toLowerCase()) : (hash = "");
  let searchArray = [];
  allVinyl.map((el) =>
    el.vinilName.map((e) =>
      e.name.toLowerCase().includes(hash)
        ? searchArray.push({ ...e, genre: el.genre })
        : e.author.toLowerCase().includes(hash)
        ? searchArray.push({ ...e, genre: el.genre })
        : null
    )
  ); // find elements in all vinil witch contain hash in music name or author name

  return (
    <div className="main">
      <SearchResult vinyl={searchArray} />
    </div>
  );
}
