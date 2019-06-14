import React from "react";
import "../App.css";

function SavedBook() {

    return (
        <div className="savedbook">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                       <h2>Book Title</h2>
                    </div>
                    <div className="col-sm">
                        <button type="button" className="btn btn-secondary">View</button>
                        <button type="button" className="btn btn-secondary">Delete</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        Book Cover
                    </div>
                    <div className="col-sm">
                        <p className="synopsis">This is a synopsis of the book. The book book is about something really cool. Great things happened in the book. The main character is a bit of an enigma.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavedBook;