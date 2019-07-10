import React, { Component } from "react";
import Menu from "./menu";

import Pdf from "./ZAO-TakeOutMenu.pdf";

export default class Banhmi extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="menu-page-wrapper">
          <div className="start-with-text">START WITH A BASE</div>
          <div className="start-with-image">
            <img
              src={require("./BanhMiSandwhichBread.png")}
              alt={"logo"}
              className="logo-image"
            />
            TOASTED FRENCH BAGUETTE
          </div>
          <div className="line-break" />
          <div className="start-with-text">CHOOSE A PROTEIN</div>
          <div className="second-image-section-wrapper">
            <div className="second-line-image">
              <img
                src={require("./Natural-Chicken.png")}
                alt={"logo"}
                className="logo-image"
              />
              NATURAL CHICKEN
              <div className="protein-desc">seasoned & grilled</div>
              <div className="health-conscience">GF</div>
            </div>
            <div className="second-line-image">
              <img
                src={require("./Steak.png")}
                alt={"logo"}
                className="logo-image"
              />
              STEAK
              <div className="protein-desc">spice rubbed & seared</div>
              <div className="health-conscience">GF</div>
            </div>
            <div className="second-line-image">
              <img
                src={require("./Meatballs.png")}
                alt={"logo"}
                className="logo-image"
              />
              MEATBALLS
              <div className="protein-desc">seasoned & grilled</div>
            </div>
            <div className="second-line-image">
              <img
                src={require("./Tofu.png")}
                alt={"logo"}
                className="logo-image"
              />
              ORGANIC TOFU
              <div className="protein-desc">thai spiced</div>
              <div className="health-conscience">GF</div>
            </div>
          </div>
          <div className="line-break" />
          <div className="start-with-text">PICK YOUR TOPPINGS</div>
          <div className="third-image-section-wrapper">
            <div className="third-line-image">
              <img
                src={require("./Carrot.png")}
                alt={"logo"}
                className="logo-image"
              />
              CARROT DAIKON
            </div>
            <div className="third-line-image">
              <img
                src={require("./Cilantro.png")}
                alt={"logo"}
                className="logo-image"
              />
              CILANTRO
            </div>

            <div className="third-line-image">
              <img
                src={require("./Cucumber.png")}
                alt={"logo"}
                className="logo-image"
              />
              CUCUMBER
            </div>
            <div className="third-line-image">
              <img
                src={require("./Chili-Lime-Aioli.png")}
                alt={"logo"}
                className="logo-image"
              />
              CHILI LIME AIOLI
            </div>
            <div className="third-line-image">
              <img
                src={require("./Hoisin.png")}
                alt={"logo"}
                className="logo-image"
              />
              HOISIN
            </div>
          </div>
          <div className="start-with-text">
            <a href={Pdf} target="_blank">
              Download Take Out Menu
            </a>
          </div>
        </div>
      </div>
    );
  }
}
