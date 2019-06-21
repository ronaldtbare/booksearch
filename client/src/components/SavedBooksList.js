import React from "react";
import SavedBook from "./SavedBook.js";

import "../App.css";
  
class SavedBooksList extends React.Component {
    state = { books: [] };

    componentWillMount() {
        fetch(`/booklist`)
            .then(response => response.json())
            .then(data => this.setState({ books: data }))
            .then(data => console.log)
            .catch(error => console.log);
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
                    />)}
                </div>
            </div>
        )
    }
}
export default SavedBooksList;