import React, { Component } from "react";
import Menu from "./menu";

import Pdf from "./ZAO-TakeOutMenu.pdf";

export default class Bowls extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="menu-page-wrapper">
          <div className="start-with-text">START WITH A BASE</div>
          <div className="bowls-base">
            <div className="start-with-image-bowls">
              <img
                src={require("./WhiteRice.png")}
                alt={"logo"}
                className="logo-image"
              />
              WHITE RICE
            </div>
            <div className="start-with-image-bowls">
              <img
                src={require("./BrownRice.png")}
                alt={"logo"}
                className="logo-image"
              />
              BROWN RICE
            </div>
            <div className="start-with-image-bowls">
              <img
                src={require("./RiceNoodles.png")}
                alt={"logo"}
                className="logo-image"
              />
              RICE NOODLES
            </div>
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
              <div className="protein-desc">hand made with chicken</div>
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
          <div className="start-with-text">SELECT A VEGETABLE</div>
          <div className="third-image-section-wrapper-bowls">
            <div className="third-line-image-bowls">
              <img
                src={require("./BroccoliOnions.png")}
                alt={"logo"}
                className="logo-image"
              />
              WOK SEARED VEGETABLES
              <div className="health-conscience">GF</div>
            </div>
            <div className="third-line-image-bowls">
              <img
                src={require("./SesameCorn.png")}
                alt={"logo"}
                className="logo-image"
              />
              CORN
              <div className="health-conscience">GF</div>
            </div>
          </div>
          <div className="line-break" />
          <div className="start-with-text">CHOOSE A FLAVORFUL SAUCE</div>
          <div className="bottom-toppings bowls-sauce">
            <div className="third-line-image">
              <img
                src={require("./Teriyaki.png")}
                alt={"logo"}
                className="logo-image"
              />
              TERIYAKI
            </div>
            <div className="third-line-image">
              <img
                src={require("./Green-Curry.png")}
                alt={"logo"}
                className="logo-image"
              />
              GREEN CURRY
            </div>
            <div className="third-line-image">
              <img
                src={require("./Chili-Lemongrass.png")}
                alt={"logo"}
                className="logo-image"
              />
              CHILI LEMONGRASS
            </div>
            <div className="third-line-image">
              <img
                src={require("./Yellow-Curry.png")}
                alt={"logo"}
                className="logo-image"
              />
              YELLOW CURRY
            </div>
          </div>
          <div className="line-break" />
          <div className="start-with-text">PICK YOUR TOPPINGS</div>
          <div className="third-image-section-wrapper-bowls">
            <div className="third-line-image-bowls">
              <img
                src={require("./Carrot.png")}
                alt={"logo"}
                className="logo-image"
              />
              CARROT DAIKON
            </div>
            <div className="third-line-image-bowls">
              <img
                src={require("./Cilantro.png")}
                alt={"logo"}
                className="logo-image"
              />
              CILANTRO
            </div>
          </div>
          <div className="line-break" />
          <div className="start-with-text">PICK YOUR GARNISH</div>
          <div className="bowls-base">
            <div className="start-with-image-bowls">
              <img
                src={require("./Peanuts.png")}
                alt={"logo"}
                className="logo-image"
              />
              PEANUTS
            </div>
            <div className="start-with-image-bowls">
              <img
                src={require("./Crispy-Onions.png")}
                alt={"logo"}
                className="logo-image"
              />
              CRISPY ONIONS
            </div>
            <div className="start-with-image-bowls">
              <img
                src={require("./Chili-Paste.png")}
                alt={"logo"}
                className="logo-image"
              />
              CHILI PASTE
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
