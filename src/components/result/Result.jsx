import React from "react";
import Header from "../home/Header";
import { useSelector } from "react-redux";
import { findModelSelector } from "../../redux-manager/result/selectors";

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
  const inpValue = useSelector(findModelSelector);
  const show = () => {
    console.log(inpValue, "inpval");
  };
  return (
    <div>
      <Header />
      <div>
        {localArr
          .filter((el) => el.company === inpValue)
          .map((item) => {
            return (
              <div key={item}>
                <div>
                  <p>{item.company}</p> <br />
                  <p>{item.model}</p> <br />
                  <p>{item.cost}</p> <br />
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
