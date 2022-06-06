import React, { useState, useEffect } from "react";
import "./Filter.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { takeFilterValue } from "../../redux-manager/Filter/actions";
import { getValuesAction } from "../../redux-manager/result/actions";

function Body() {
  const dispatch = useDispatch();

  const changeValue = (e) => {
    dispatch(takeFilterValue(e.target.innerText));
    // console.log(e.target.innerText);
  };
  const filterByValue = (e) => {
    dispatch(getValuesAction(e.target.value));
  };
  return (
    <div className="container__all-info">
      <div className="all-info">
        <div className="all-info__cost">
          <div>Телефоны</div>
          <Link className="header-link" to="/filter/result">
            <div className="all-info__cost-choose-flexbox">
              <button
                onClick={filterByValue}
                value={0}
                className="all-info__cost-choose"
              >
                До 300 Azn
              </button>
              <button
                onClick={filterByValue}
                value={300}
                className="all-info__cost-choose"
              >
                300-500 Azn
              </button>
              <button
                onClick={filterByValue}
                value={500}
                className="all-info__cost-choose"
              >
                500-1500 Azn
              </button>
              <button
                onClick={filterByValue}
                value={1500}
                className="all-info__cost-choose"
              >
                1500 и больше Azn
              </button>
            </div>
          </Link>
          {/* <div className="all-info__cost-inputs">
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
          </div> */}
        </div>
        <div className="all-info__companies">
          <Link className="header-link" to="/filter/result">
            <div onClick={changeValue} className="all-info__companies-item">
              Apple
            </div>
            <div onClick={changeValue} className="all-info__companies-item">
              Xiaomi
            </div>
            <div onClick={changeValue} className="all-info__companies-item">
              Honor
            </div>
            <div onClick={changeValue} className="all-info__companies-item">
              Realme
            </div>
            <div onClick={changeValue} className="all-info__companies-item">
              Samsung
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Body;
