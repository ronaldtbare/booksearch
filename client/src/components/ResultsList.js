import React from "react";
import "../App.css";
import ResultBook from "./ResultBook.js";
import { API } from "../utils/API.js";

class ResultsList extends React.Component {
    state = { books: [] };

    handleClick(title, subtitle, authors, cover, description, previewLink) {
        console.log("TRYING TO SAVE BOOK")
        const bookdata = {
            title,
            subtitle: subtitle,
            authors,
            cover,
            description,
            previewLink
        }
        console.log("bookdata is: ", bookdata)

        API.saveBook(bookdata);
        this.setState({books: this.state.books.filter(book => book.title !== title)})
    }

    fetchBooks() {
        console.log("FETCHED BOOKS!!!!!!!!!")
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.match.params.searchTerm}`)
            .then(response => response.json())
            .then(data => this.setState({ books: data.items }))
            .then(data => console.log(data.items))
            .catch(error => console.log);
    }
    
    componentWillMount() {
        this.fetchBooks();  
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
                    handleClick={(...b) => this.handleClick(...b)}
                    />)}
                </div>
            </div>
        )
    }
}

export default ResultsList;