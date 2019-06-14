import React, { Component } from "react";

import "./App.css";
import Search from "./components/Search.js";
import ResultsList from "./components/ResultsList.js";
import SavedBooksList from "./components/SavedBooksList.js";

import Jumbotron from "./components/Jumbotron.js";
import Nav from "./components/Nav.js";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Jumbotron/>
          <hr />
          <switch>
            <Route path="/" component={Search} exact/>
            <Route path="/search" component={Search} exact/>
            <Route path="/search/:searchTerm" component={ResultsList} exact />
            <Route path="/save" component={SavedBooksList} />
          </switch>
        </div>
      </BrowserRouter>
        
          
        

      
    );
  }
}

export default App;
