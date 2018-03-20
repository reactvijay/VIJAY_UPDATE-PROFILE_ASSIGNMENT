import React from "react";
import ReactDOM from "react-dom";
import DataTable from './DataTable';
import AddProduct from './AddProduct';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import EditProfile from './components/EditProfile';
import "./style.css";
import "./order.css";

ReactDOM.render(
    <EditProfile />,
  document.getElementById("app")
);