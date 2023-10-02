import React from "react";
import "./content1.css";
import img1 from "../assets/Group 2.png";
// import img2 from "../assets/Path 1379@2x.png"

const Content1 = () => {
  return (
    <>
      <div className="container content1-parent-container">
        {/* <img src={img2} alt="" /> */}
        <div className="content1-heading">
          <div className="line"></div>
          <h2>Food Lab Food Safety Services</h2>
        </div>
        <div className="content">
          <div className="left-content">
            <img src={img1} alt="" />
          </div>

          <div className="right-content">
            <p>
              Aperiam quia sapiente vel consequatur consequatur omnis sed autem
              quae. Ipsa et minus consequatur vero et doloribus. Ex error illum
              consequatur amet ea occaecati odit. Quia similique dolorum
              officiis distinctio magnam ut facilis. Et dolore est inventore ea
              et molestiae earum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content1;
