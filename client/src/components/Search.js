import React from "react";

import "../App.css";

function Search() {
   
        return (
            <div className="search">
                <h1>Book Search</h1>
                <form>
                    <div className="form-group">
                        
                        <input type="email" className="form-control" id="search" aria-describedby="searchHelp" placeholder="Enter a search title."></input>
                            
                    </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
}


export default Search;