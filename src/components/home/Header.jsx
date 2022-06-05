import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getModel } from "../../redux-manager/result/actions";

function Header() {
  const [value, SetValue] = useState("");
  const dispath = useDispatch();
  const tankeValue = (e) => {
    SetValue(e.target.value);
  };
  const showValue = () => {
    dispath(getModel(value));
  };

  const submiting = (e) => {
    e.preventDefault();
  };
  return (
    <div className="header">
      <div className="container">
        <div className="flex-container">
          <Link className="header-link" to="/">
            <div className="market-price"><div className="market">Market</div> <div className="price">Price</div></div>
          </Link>
          <form className="header__form-flex" onSubmit={submiting}>
            <input
              onChange={tankeValue}
              className="home__header-input home__header"
              type="text"
              width={400}
            />
            <Link className="header-link" to="/filter/result">
              <button
                onClick={showValue}
                type="button"
                className="home__header-button home__header"
              >
                Искать
              </button>
            </Link>
            <button className="home__header-button-in" type="button">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
