import Header from "../home/Header";
import "./Result.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { findModelSelector } from "../../redux-manager/result/selectors";
import { getDataSelector } from "../../redux-manager/Filter/selector";

function Result() {
  const allPhonesArr = useSelector(getDataSelector);
  const [clicked, setCLicked] = useState(false);
  const changeState = () => {
    clicked
      ? allPhonesArr.sort((a, b) => a.price - b.price)
      : allPhonesArr.sort((a, b) => b.price - a.price);
    setCLicked(!clicked);
  };
  const logoArr = ["maxi.az", "irshad.az"];
  const inpValue = useSelector(findModelSelector);
  return (
    <div>
      <Header />
      <div className="result__main-elements">
        <div className="result__main-btn-container">
          <button onClick={changeState} className="result__main-compare">
            Сравнить по цене
          </button>
        </div>
        {
          // clicked
          // ? allPhonesArr.sort((a,b)=>a.price - b.price)
          //   :
          allPhonesArr
            // .filter((el) => el.company === inpValue)
            .map((item) => {
              return (
                <div className="result__main-elemets-element">
                  <p>{item.logo}</p>
                  <p className="result__name">{item.name}</p> <br />
                  <img className="result__image" src={item.pictureURL} />
                  <p className="result__price">{item.price} Azn</p> <br />
                </div>
              );
            })
        }
      </div>
    </div>
  );
}

export default Result;
