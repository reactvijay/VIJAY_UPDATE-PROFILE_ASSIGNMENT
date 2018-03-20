import React, { Component } from "react";
import { Link } from "react-router-dom";
class EmailPassword extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { emailPasswordInfo, iseditable } = this.props;
    
    return (
        <fieldset>
        <legend><h3 id="" data-name="">
Email &amp; password
</h3>
</legend>
    
        <div>
        <ul className="table main-table">
              <li className="input input-label first last">
          
          
  <div className="table-label login-label">
    <label for="login" title="Email">
      Email          </label>
  </div>
        <div className="star">&nbsp;</div>
  
<div className="table-value login-value">
 
      
{iseditable ? <input type="email" defaultValue={emailPasswordInfo.email} /> : <span maxlength="128" id="login" name="login" className=" label-field input">{emailPasswordInfo.email}</span>}


            </div>

  <div className="clear"></div>

          
        </li>
          </ul>
    </div>

  </fieldset>
    );
  }
}

export default EmailPassword;
