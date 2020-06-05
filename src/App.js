import React, { Component } from "react";
import "./App.css";
//import Dictionary from "./components/Dictionary";
import Zip from "./components/Zip";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Enter Zip Code</h1>
        <Zip code = "11214"/>
      </div>
    );
  }
}

export default App;
