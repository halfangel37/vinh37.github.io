import { Component } from "react";
import { BrowserRouter as Router, } from "react-router-dom";
import DirectionsURL from "../router/DirectionsURL";
import "./../css/App.css";

import Footer from "./Footer";

import Nav from "./Nav";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav/>
        <DirectionsURL/>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
