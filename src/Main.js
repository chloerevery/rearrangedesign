import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import logo from './images/rearrange_logo.png';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div class="container mt-lg-4 mt-md-4 mt-sm-2 mt-xs-2 mb-5 pt-2 pb-5" id="center-block">
          <div class="row justify-content-center">
            <div class="col-md-12 col-lg-12 col-sm-10 col-xs-8">
              <img src={logo} id="site-logo" class="img-fluid mx-auto"></img>
            </div>
          </div>
        <nav class="navbar justify-content-center navbar-expand-sm navbar-expand-xs">
          <ul class="navbar-nav pt-2 pb-2 pr-4 pl-4 pr-sm-1 pr-xs-1 pl-sm-1 pl-xs-1">
            <li class="nav-item pl-3 pr-3 pl-sm-1 pl-xs-1 text-dark">
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li class="nav-item pl-3 pr-3 pl-sm-1 pl-xs-1 text-dark">
              <NavLink to="/about">About</NavLink>
            </li>
            <li class="nav-item pl-3 pr-3 pl-sm-1 pl-xs-1">
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li class="nav-item pl-3 pr-3 pl-sm-1 pl-xs-1">
              <NavLink to="/testimonials">Testimonials</NavLink>
            </li>
            <li class="nav-item pl-3 pr-3 pl-sm-1 pl-xs-1">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          </nav>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
      </div>
      </HashRouter>
  
    );
  }
}
 
export default Main;