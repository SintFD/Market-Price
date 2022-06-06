import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import Img8 from "../images/Img8.png";

function Body() {
  const [active, setActive] = useState(false);
  const goToFilter = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="container">
        <div className="nav-bar">
          <div className="mainmenu__list">
            <div className="mainmenu__list-flexboks">
              <div className="mainmenu__list-comp-tel">
                <Link to="/filter">
                  <img
                    onClick={goToFilter}
                    className="devices tel-pk"
                    src={img3}
                    alt=""
                  />
                </Link>
                <Link to="/filter">
                  <img
                    onClick={goToFilter}
                    className="devices"
                    src={img4}
                    alt=""
                  />
                </Link>
              </div>
              <img onClick={goToFilter} className="devices" src={img2} alt="" />
              <img
                onClick={goToFilter}
                className="devices complect"
                src={img1}
                alt=""
              />
            </div>

            <div className="mainmenu__list-flexboks">
              <div>
                <img
                  onClick={goToFilter}
                  className="devices nout"
                  src={img7}
                  alt=""
                />
              </div>
              <div>
                {/* <img className="devices garnit" src={Img8} alt="" /> */}
                <img
                  onClick={goToFilter}
                  className="devices audio "
                  src={img6}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
