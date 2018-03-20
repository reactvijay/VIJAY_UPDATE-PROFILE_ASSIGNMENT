import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import EditProfile from './components/EditProfile';
import "./style.css";

ReactDOM.render(
  <EditProfile />,
  document.getElementById("app")
);