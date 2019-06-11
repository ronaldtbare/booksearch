import React from "react";

import "../App.css";

function Search() {
   
        return (
            <div className="Search">
                <h1>Book Search</h1>
                <form>
                    <div className="form-group">
                        <label for="search">Book </label>
                        <input type="email" className="form-control" id="search" aria-describedby="searchHelp" placeholder="Enter a search term."></input>
                            
                    </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
}


export default Search;