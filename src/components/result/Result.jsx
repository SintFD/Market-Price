import "./Result.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getDataSelector } from "../../redux-manager/Filter/selector";
import { findModelSelector } from "../../redux-manager/result/selectors";

function Result() {
  const allPhonesArr = useSelector(getDataSelector);
  let valuesFromFilter = useSelector(findModelSelector);
  const [clicked, setCLicked] = useState(false);
  const changeState = () => {
    clicked
      ? allPhonesArr.sort((a, b) => a.price - b.price)
      : allPhonesArr.sort((a, b) => b.price - a.price);
    setCLicked(!clicked);
  };

  let counter = 0;

  const idGenerator = () => {
    counter = counter + 1;
  };
  const getLogoUrl = (item) => {
    switch (item) {
      case "maxi.az":
        return "https://www.rabitabank.com/uploads/posts/2021/02/maxiaz.png";
      case "irshad.az":
        return "https://upload.wikimedia.org/wikipedia/commons/a/a4/Irshad_logo_%283%29.png";
      case "kontakt.az":
        return "https://1news.az/images/2018/11/07/20181107050325694/beb44fc9-9483-4a82-9879-fc247d224d60.jpg?2021-02-17+09%3A23%3A27";
    }
  };
  return (
    <div>
      <div className="result__main-elements">
        <div className="result__main-btn-container">
          <button onClick={changeState} className="result__main-compare">
            Сравнить по цене
          </button>
        </div>
        {allPhonesArr
          .filter((el) => el.price > valuesFromFilter)
          .map((item) => {
            return (
              <div key={counter} className="result__main-elemets-element">
                <div className="result__main-flexbox">
                  <img src={getLogoUrl(item.logo)} className="result__name" />
                  <div className="result__element-model">{item.name}</div>
                </div>
                <br />
                <img className="result__image" src={item.pictureURL} />
                <p className="result__price">{item.price} Azn</p> <br />
                {idGenerator()}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Result;
