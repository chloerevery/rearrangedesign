import React, { Component } from "react";
import email_icon from './images/email_icon.png';
 
class Contact extends Component {
  render() {
    return (
      <div class="row justify-content-center">
        <div class="col-lg-10 col-md-8 col-sm-6 col-xs-4 pt-5">
          <img src={email_icon} class="img-fluid mx-auto" id="email-icon"></img>
          <p class="text-center">
            <br></br>
            Please email Laura at <a href="mailto:larevness@gmail.com">larevness@gmail.com</a> to get in touch!
          </p>
        </div>
      </div>
    );
  }
}
 
export default Contact;