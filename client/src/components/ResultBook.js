import React from "react";
import "../App.css";

function ResultBook() {

    return (
        <div className="savedbook">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h2>Book Title</h2>
                    </div>
                    <div className="col-sm">
                        <button type="button" className="btn btn-secondary">View</button>
                        <button type="button" className="btn btn-secondary">Save</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        Book Cover
                    </div>
                    <div className="col-sm">
                        Synopsis
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultBook;