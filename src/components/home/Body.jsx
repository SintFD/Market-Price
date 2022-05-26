import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";

function Body() {
  return (
    <>
      <div className="container">
        <div className="nav-bar">
          <div className="mainmenu__list">
            <div className="mainmenu__list-flexboks">
              <div className="mainmenu__list-comp-tel">
                <img src={img3} alt="" />
                <img src={img4} alt="" />
              </div>
              <img src={img2} alt="" />
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img7} alt="" />
              <img src={img6} alt="" />
            </div>
            <div className="mainmenu__list-flexboks"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
