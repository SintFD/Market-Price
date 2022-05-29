import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="flex-container">
          <Link className="header-link" to="/">
            <div className="market-price">Market Price</div>
          </Link>
          <input className="home__header-input" type="text" width={400} />
          <button className="home__header-button">Искать</button>
          <button className="home__header-button-in">Войти</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
