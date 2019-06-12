import React from "react";
import SavedBook from "./SavedBook.js";

import "../App.css";
  
function SavedBooksList() {

    return (
        <div className="savedbooks">
            <h2>Saved Books</h2>
            <div>
                <SavedBook/>
            </div>

        </div>
    );
}

export default SavedBooksList;