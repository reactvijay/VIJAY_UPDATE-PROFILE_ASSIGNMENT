import React, { Component } from "react";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input type="number" id="id" />
        </div>
        <div className="form-group">
          <label htmlFor="pname">Product name</label>
          <input type="text" id="pname" />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" />
        </div>
        <div className="form-group">
          <label htmlFor="rol">R.O.L.</label>
          <input type="number" id="rol" />
        </div>
      </div>
    );
  }
}
