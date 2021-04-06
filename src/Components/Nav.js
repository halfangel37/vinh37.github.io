import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              React Router - News
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink activeClassName="selected" activeStyle={{
    fontWeight: "bold",
    color: "black"
  }} className="nav-link js-scroll-trigger" exact to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="selected"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                    className="nav-link js-scroll-trigger"
                    to="/News"
                  >
                    News
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="selected"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                    className="nav-link js-scroll-trigger"
                    to="/Contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
