import React, { Component } from "react";

import "./App.css";
import Search from "./components/Search.js";
import Saved from "./components/Saved.js";
import Nav from "./components/Nav";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>

        <div className="jumbotron bgimage">
          <h1 className="display-4 color-white">(React) Google Books Search</h1>
          <p className="lead color-white">Search for and Save Books of Interest.</p>
          <hr className="my-4"/>
        </div>

        <Search/>
        <Saved/>

      </div>
    );
  }
}

export default App;
