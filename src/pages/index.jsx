import React from "react";
import "./index.css"; // Import your CSS file like this

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


export const Index = () => {
  return (
    <div className="container">
      <div className="nav-container">
        <div id="squadesflex" className="item">
          <img
            className="BackButton "
            src="/public/Back Button (1).svg"
            alt="svg10"
          />
          <div className="squaddies">
            <p>SQUADDIES</p>
          </div>
        </div>
        <div className="item item-2">
          <div className="Rectangle20">
            <img className="head1" src="/public/Head 1.svg" alt="svg" />
            <div className="tommy">
              <p>TOMMY</p>
            </div>
          </div>
          <div>
            <img className="levelIcon" src="/public/Level Icon.svg" alt="svg" />
          </div>
          <div className="rec16-div">
            <div className="rec-16-container">
              <div className="ROOKIELv1"> ROOKIELV1</div>
              <div className="rec16-11811-20000">11811/20000 </div>
            </div>
            <div className="Rectangle16">
              <div className="Rectangle14" />
            </div>
          </div>
          <img className="frame" src="/public/Frame (1).svg" alt="svg" />
          <div className="rec-13">
            <div className="rec13-2300">2,300</div>
            <div className="image-container">
              <img className="Ellipse4" src="/public/Ellipse 4.svg" alt="svg" />
              <div className="Ellipse4-x">+</div>
            </div>
          </div>
          <img className="frame-gold" src="/public/Frame (2).svg" alt="svg" />
          <div className="rec-21">
            <div className="rec13-2300">56</div>
            <div className="image-container">
              <img
                className="Ellipse4"
                src="/public/Ellipse 4.svg"
                alt="svg3"
              />
              <div className="Ellipse4-x">+</div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="flex-column1">
            <div className="BATTLE">BATTLE</div>
            <div className="SQUADS">SQUADS</div>
            <div className="battle-2052">2052</div>
          </div>
        </div>
      </div>
      <div className="svg_background"></div>
    </div>
  );
};
