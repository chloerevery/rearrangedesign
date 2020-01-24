import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
        <div class="row justify-content-center">
          <div class="col-9 pt-4">
            <p id="motto" class="text-center">
              <b>The fun and affordable way to redesign your home.</b>
            </p>
            <p class="text-md-justify text-lg-justify text-sm-left pt-1">
              Rearrange Design uses what you already have in your home to create functional, beautiful spaces that fit your style without the high cost of using a designer.
              <br></br><br></br>
              A home consult is entirely free and without obligation - no selling or pressure. If you choose to go forward, Laura charges a very affordable hourly rate of $40, so you can easily move forward at your own pace and schedule.
              <br></br><br></br>
              Laura is a credentialed art teacher, who creates both indoor and outdoor living spaces. She uses design principles to maximize space, explain color choices, revise furniture placement, and display art to create a warm, inviting home.
              <br></br><br></br>
              Working with Laura is a fun, creative process. You'll make the most of what you already own, and transform your home into a personalized place that you love.
            </p>
          </div>
        </div>
    );
  }
}
 
export default Home;