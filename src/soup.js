import React, { Component } from "react";
import Menu from "./menu";

import Pdf from "./ZAO-TakeOutMenu.pdf";

export default class Soup extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="menu-page-wrapper">
          <div className="start-with-text">START WITH A BASE</div>
          <div className="start-with-image">
            <img
              src={require("./Soup.png")}
              alt={"logo"}
              className="logo-image"
            />
            PORK & CHICKEN BROTH
          </div>
          <div className="line-break" />
          <div className="start-with-text">ALSO CHOOSE ONE</div>
          <div className="bowls-base">
            <div className="start-with-image">
              <img
                src={require("./WhiteRice.png")}
                alt={"logo"}
                className="logo-image"
              />
              WHITE RICE
            </div>
            <div className="start-with-image">
              <img
                src={require("./BrownRice.png")}
                alt={"logo"}
                className="logo-image"
              />
              BROWN RICE
            </div>
            <div className="start-with-image">
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
          <div className="start-with-text">SELECT A VEGETABLE</div>
          <div className="start-with-image">
            <img
              src={require("./SesameCorn.png")}
              alt={"logo"}
              className="logo-image"
            />
            CORN
            <div className="health-conscience">V/GF</div>
          </div>
          <div className="line-break" />
          <div className="start-with-text">PICK YOUR TOPPINGS</div>
          <div className="bottom-toppings salad-sauce">
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
                src={require("./Jalapeno.png")}
                alt={"logo"}
                className="logo-image"
              />
              JALAPENO
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
