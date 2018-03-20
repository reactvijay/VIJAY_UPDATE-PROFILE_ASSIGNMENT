import React from "react";
export default props => (
  <div>
    <h1 style={{ paddingTop: "100px" }}>Product Detail</h1>
    <p>Name:{props.match.params.name}</p>
    <p>Price:{props.match.params.price}</p>
  </div>
);
