import React from "react";

import "../App.css";
import ResultBook from "./ResultBook.js";

class ResultsList extends React.Component {
    state = { books: [] };
    
    componentWillMount() {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.match.params.searchTerm}`)
            .then(response => response.json())
            .then(data => this.setState({ books: data.items }))
            .then(data => console.log)
            .catch(error => console.log);
           
    }
    
    render() {
        return (
            <div className="results">
                <h2>Results for "{this.props.match.params.searchTerm}"</h2>
                <div>
                    {this.state.books.map(el => <ResultBook 
                    title={el.volumeInfo.title}
                    subtitle={el.volumeInfo.subtitle}
                    authors={el.volumeInfo.authors}
                    cover={el.volumeInfo.imageLinks.thumbnail}
                    description={el.volumeInfo.description}
                    previewLink={el.volumeInfo.previewLink}
                    />)}
                </div>
            </div>
        )
    }
}

export default ResultsList;