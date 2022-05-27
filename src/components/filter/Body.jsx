import React from "react";
import "./Filter.css";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="container__all-info">
      <div className="all-info">
        <div className="all-info__cost">
          <div>Телефоны</div>
          <Link className="header-link" to="/filter/result">
            <div className="all-info__cost-choose">До 300 Azn</div>
            <div className="all-info__cost-choose">300-500 Azn</div>
            <div className="all-info__cost-choose">500-1500 Azn</div>
            <div className="all-info__cost-choose">1500 и больше Azn</div>
          </Link>
          <div className="all-info__cost-inputs">
            <div>
              От
              <br />
              <input className="all-info__cost-inputs-value" type="text" />
            </div>
            <div>
              До
              <br />
              <input className="all-info__cost-inputs-value" type="text" />
            </div>
          </div>
        </div>
        <div className="all-info__companies">
          <Link className="header-link" to="/filter/result">
            <div className="all-info__companies-item">Apple</div>
            <div className="all-info__companies-item">Samsung</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Body;
