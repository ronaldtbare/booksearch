import React, { Component } from "react";

import "./App.css";
import Search from "./components/Search.js";
import Saved from "./components/Saved.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Google Books</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#">Search <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="#">Save</a>
              
            </div>
          </div>
        </nav>

        <div className="jumbotron">
          <h1 className="display-4">(React) Google Books Search</h1>
          <p className="lead">Search for and Save Books of Interest.</p>
          <hr className="my-4"/>
        </div>

        <Search/>
        <Saved/>

      </div>
    );
  }
}

export default App;
