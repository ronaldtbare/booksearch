import React from "react";
import API from "../utils/API";
import "../App.css";
import ResultBook from "./ResultBook.js";

class ResultsList extends React.Component {
    state = { books: [] };

    componentWillMount() {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.match.params.searchTerm}`)
            .then(response => response.json())
            .then(data => this.setState({ books: data.items }))
            .catch(error => console.log);
    }

    render() {
        return (
            <div className="results">
                <h2>Results for "{this.props.match.params.searchTerm}"</h2>
                <div>
                    {this.state.books.map(el => <ResultBook title={el.volumeInfo.title}/>)}
                </div>
            </div>
        )
    }
}

export default ResultsList;