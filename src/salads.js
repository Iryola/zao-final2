import React, { Component } from "react";
import Menu from "./menu";

import img from "./ZAO-TakeOutMenu.png";

export default class Salads extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="menu-page-wrapper">
          <div className="start-with-text">START WITH A BASE</div>
          <div className="start-with-image-salad2">
            <img
              src={require("./Lettuce.png")}
              alt={"logo"}
              className="logo-image"
            />
            LETTUCE MIX
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
          <div className="start-with-text">CHOOSE A FLAVORFUL DRESSING</div>
          <div className="bottom-toppings salad-sauce">
            <div className="third-line-image">
              <img
                src={require("./Chili-Lemongrass.png")}
                alt={"logo"}
                className="logo-image"
              />
              CILI LEMONGRASS
              <div className="protein-desc">
                Tangy, sweet, with lemongrass and chili spice
              </div>
              <div className="health-conscience">V/GF</div>
            </div>
            <div className="third-line-image">
              <img
                src={require("./Sesame-Ginger-Vinaigrette.png")}
                alt={"logo"}
                className="logo-image"
              />
              SESAME VINAIGRETTE
              <div className="protein-desc">for salad</div>
              <div className="health-conscience">V/GF</div>
            </div>
          </div>
          <div className="line-break" />
          <div className="start-with-text">PICK YOUR TOPPINGS</div>
          <div className="second-image-section-wrapper">
            <div className="second-line-image">
              <img
                src={require("./Cucumber.png")}
                alt={"logo"}
                className="logo-image"
              />
              CUCUMBER
            </div>
            <div className="second-line-image">
              <img
                src={require("./RiceNoodles.png")}
                alt={"logo"}
                className="logo-image"
              />
              RICE NOODLES
            </div>
            <div className="second-line-image">
              <img
                src={require("./Carrot.png")}
                alt={"logo"}
                className="logo-image"
              />
              CARROT DAIKON
            </div>
            <div className="second-line-image">
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
            <div className="start-with-image-salad">
              <img
                src={require("./Peanuts.png")}
                alt={"logo"}
                className="logo-image"
              />
              PEANUTS
            </div>
            <div className="start-with-image-salad">
              <img
                src={require("./Crispy-Onions.png")}
                alt={"logo"}
                className="logo-image"
              />
              CRISPY ONIONS
            </div>
            <div className="start-with-image-salad">
              <img
                src={require("./Chili-Paste.png")}
                alt={"logo"}
                className="logo-image"
              />
              CHILI PASTE
            </div>
          </div>
          {/* <div className="start-with-text">
            <a href={img}>Download Take Out Menu</a>
          </div> */}
        </div>
      </div>
    );
  }
}
