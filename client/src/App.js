import React, { Component } from "react";

import "./App.css";
import Search from "./components/Search.js";
import ResultsList from "./components/ResultsList.js";
import SavedBooksList from "./components/SavedBooksList.js";

import Jumbotron from "./components/Jumbotron.js";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>

        <Jumbotron/>

        <Search/>
        <hr/>
        <ResultsList/>
        <SavedBooksList/>
          
        

      </div>
    );
  }
}

export default App;
