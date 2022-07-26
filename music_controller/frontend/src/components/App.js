import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
//import home page is possible because we have exported home page from homepage.js

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">
        <HomePage />
      </div>
    );
  }
}
//document.getElementById is the syntax to get id="app" from html document
const appDiv = document.getElementById("app");
render(<App />, appDiv);