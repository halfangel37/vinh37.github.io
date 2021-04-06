import React, { Component } from "react";
import {   Route, } from "react-router-dom";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import News from "../Components/News";
import NewsDetails from "../Components/NewsDetails";

class DirectionsURL extends Component {
  render() {
    return (
     
        <div>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/news">
            <News/>
          </Route>
          <Route exact path="/news-detail/:slug.:id.html"
            component={NewsDetails}
          />
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </div>
      
    );
  }
}

export default DirectionsURL;
