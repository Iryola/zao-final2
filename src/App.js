import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./homepage";
import Catering from "./catering";
import Locations from "./locations";
import Menu from "./menu";
import Tacos from "./tacos";
import Bowls from "./bowls";
import Bahnmi from "./bahnmi";
import Salads from "./salads";
import Soup from "./soup";
import Livezaofully from "./livezaofully";
import Careers from "./careers";
import Donations from "./donations";
import Contact from "./contact";
import Download from "./take-out";
import NoMatch from "./no-match";
import NavigationContainer from "./navigation-container";
import Footer from "./footer";
import Order from "./order";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/menu" component={Menu} />
              <Route path="/locations" component={Locations} />
              <Route path="/catering" component={Catering} />
              <Route path="/livezaofully" component={Livezaofully} />
              <Route path="/order" component={Order} />
              <Route path="/careers" component={Careers} />
              <Route path="/contact" component={Contact} />
              <Route path="/donations" component={Donations} />
              <Route path="/tacos" component={Tacos} />
              <Route path="/bowls" component={Bowls} />
              <Route path="/bahnmi" component={Bahnmi} />
              <Route path="/salads" component={Salads} />
              <Route path="/soup" component={Soup} />
              <Route path="/take-out" component={Download} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}
