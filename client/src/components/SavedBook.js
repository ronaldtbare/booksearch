import React from "react";
import "../App.css";

function SavedBook({title, subtitle, authors, cover, previewLink, description}) {

    function deleteBook(){

    }

    return (
        <div className="savedbook">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h2>{title}</h2>
                        <h4>{subtitle}</h4>
                        <h5>Author:{authors}</h5>
                    </div>
                    <div className="col-sm">
                        <a className="btn btn-primary" href={previewLink} target="_blank" role="button">View</a>
                        <a className="btn btn-primary" onClick={()=>deleteBook} role="button">Delete</a>                      
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src= {cover} alt="book cover pic" />
                    </div>
                    <div className="col-sm">
                        <p className="synopsis">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavedBook;