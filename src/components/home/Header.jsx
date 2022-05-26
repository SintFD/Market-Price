import React from "react";

function Header() {
  return (
    <div class="header">
      <div className="container">
        <div className="flex-container">
          <div className="market-price">Market Price</div>
          <input className="home__header-input" type="text" width={400} />
          <button className="home__header-button">Искать</button>
          <button className="home__header-button-in">Войти</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
