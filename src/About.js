import React, { Component } from "react";
import laura_image from './images/laura.jpeg';

 
class About extends Component {
  render() {
    return (
      <div class="row justify-content-center">
        <div class="col-5 pt-5">
            <img src={laura_image} class="img-fluid mx-auto"></img>
        </div>
        <div class="col-5 pt-5">
          <p>
            Laura Revness is an award-winning credentialed art teacher, garden specialist, artist, and designer with over 30 years of experience.
            <br></br><br></br>
            She enjoys working one-on-one with clients to create positive transformation, regardless of budget.
            <br></br><br></br>
            By collaborating with Laura, you will finally be able to create the home you have always wanted - the fun and affordable way.
            <br></br><br></br>
          </p>
        </div>
      </div>
    );
  }
}
 
export default About;