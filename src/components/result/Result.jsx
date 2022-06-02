import React from "react";
import Header from "../home/Header";
import { useSelector } from "react-redux";
import { findModelSelector } from "../../redux-manager/result/selectors";
import { getDataSelector } from "../../redux-manager/Filter/selector";

function Result() {
  const localArr = [
    {
      company: "apple",
      cost: "900",
      model: "Iphone 13 Pro",
      // url: '',
      logo: "Kontakt",
    },
    {
      company: "samsung",
      cost: "800",
      model: "Samsung S22",
      // url: '',
      logo: "MaxiAz",
    },
    {
      company: "samsung",
      cost: "700",
      model: "Samsung NOTE10",
      // url: '',
      logo: "IRSHAD",
    },
    {
      company: "apple",
      cost: "1000",
      model: "Iphone 12 Pro",
      // url: '',
      logo: "Kontakt",
    },
    {
      company: "samsung",
      cost: "850",
      model: "Samsung S20",
      // url: '',
      logo: "IRSHAD",
    },
    {
      company: "apple",
      cost: "900",
      model: "Iphone 11 s",
      // url: '',
      logo: "MaxiAz",
    },
  ];
  const allPhonesArr = useSelector(getDataSelector);
  const inpValue = useSelector(findModelSelector);
  return (
    <div>
      <Header />
      <div>
        {allPhonesArr
          // .filter((el) => el.company === inpValue)
          .map((item) => {
            return (
              <div key={item}>
                <div>
                  <p>{item.company}</p> <br />
                  <p>{item.name}</p> <br />
                  <p>{item.price}</p> <br />
                  <p>{item.logo}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Result;
