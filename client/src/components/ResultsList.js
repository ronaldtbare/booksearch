import React from "react";
import API from "../utils/API";
import "../App.css";
import ResultBook from "./ResultBook.js";

function ResultsList() {

    return (
        <div className="results">
            <h2>Results</h2>
            <div>
                <ResultBook/>

            </div>

        </div>
    );
}

export default ResultsList;