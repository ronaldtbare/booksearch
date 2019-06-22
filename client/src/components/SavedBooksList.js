import React from "react";
import SavedBook from "./SavedBook.js";
import { API } from "../utils/API.js";
import "../App.css";
  
class SavedBooksList extends React.Component {
    state = { books: [] };

    deleteBook(bookID) {
        console.log(bookID);
        API.deleteBook(bookID);
        // console.log("previous state: ", this.state.books)
        // console.log("filtered array: ", this.state.books.filter(book => book._id !== bookID))
        this.setState({ ...this.state, books: this.state.books.filter(book => book._id !== bookID)})
        // console.log("updated state: ", this.state.books)
    }

    fetchBooks() {
        fetch(`/booklist`)
            .then(response => response.json())
            .then(data => this.setState({ books: data }))
            .then(data => console.log)
            .catch(error => console.log);
    }

    componentWillMount() {
        this.fetchBooks()
    }
    
    render() {
        return (
            <div className="results">
                <h2>Saved Books List</h2>
                <div>
                    {this.state.books.map(el => <SavedBook
                        title={el.title}
                        subtitle={el.subtitle}
                        authors={el.authors}
                        cover={el.cover}
                        description={el.description}
                        previewLink={el.previewLink}
                        bookID={el._id}
                        deleteBook={(bookID)=>this.deleteBook(bookID)}
                    />)}
                </div>
            </div>
        )
    }
}
export default SavedBooksList;