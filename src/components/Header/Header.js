import React from "react";
import Search from "./Search";
import Logo from "./Logo";
import Cart from "./Cart";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Search />
      <Cart />
    </header>
  );
}
