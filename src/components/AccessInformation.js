import React, { Component } from "react";
import { Link } from "react-router-dom";
class AccessInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { accessInfo } = this.props;
    
    return (
        <fieldset>
        <legend><h3 id="" data-name="">
Access information
</h3>
</legend>
    
        <div>
        <ul className="table access-table">
              <li className="input input-label first">
          
          
  <div className="table-label access-level-label">
    <label for="access-level" title="Access level">
      Access level          </label>
  </div>
        <div className="star">&nbsp;</div>
  
<div className="table-value access-level-value">
      
<span id="access-level" name="access_level" className=" label-field input">{accessInfo.accesslevel}</span>
            </div>

  <div className="clear"></div>

          
        </li>
              <li className="input input-checkbox-enabled last">
          
          
  <div className="table-label forcechangepassword-label">
    <label for="forcechangepassword" title="Require to change password on next log in">
      Require to change password on next log in          </label>
  </div>
        <div className="star">&nbsp;</div>
  
<div className="table-value forcechangepassword-value">
      <span className="input-field-wrapper checkbox input input-checkbox-enabled">
  
  <input type="hidden" name="forceChangePassword" value="" />
        <input id="forcechangepassword" name="forceChangePassword" type="checkbox" value="1" className="form-control" />
  </span>
            </div>

  <div className="clear"></div>

          
        </li>
          </ul>
    </div>

  </fieldset>
    );
  }
}

export default AccessInformation;
