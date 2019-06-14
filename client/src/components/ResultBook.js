import React from "react";
import "../App.css";

function ResultBook({ title, subtitle, authors, cover, description, previewLink }) {

    return (
        <div className="savedbook">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h2>{title}</h2>
                        <h4>{subtitle}</h4>
                        <h5>Author: {authors}</h5>
                        
                    </div>
                    <div className="col-sm">
                        <a class="btn btn-primary" href={previewLink} target="_blank" role="button">View</a>
                        <a class="btn btn-primary" href={previewLink} target="_blank" role="button">Save</a>
                        {/* <button type="button" className="btn btn-secondary">View</button>
                        <button type="button" className="btn btn-secondary">Save</button> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <img src ={cover} alt="book cover pic"/>
                    </div>
                    <div className="col-sm">
                        <p className="synopsis">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultBook;