import React, { Component } from "react";
import "./App.css";
import Search from "./search";

class App extends Component {
  render() {
    return (
      <div>
        {" "}
        <h1>Best MemeGenrator</h1>;
        <Search />;
      </div>
    );
  }
}

export default App;
