import React from "react";
import "../App.css";

class Search extends React.Component {
    state = { searchTerm: ''};

    onChangeHandler = e => {
        e.preventDefault();
        this.setState({ searchTerm: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.history.push(`/search/${this.state.searchTerm}`);
    }

    render() {
        return (
            <div className="search">
                <h1>Book Search</h1>
                <form>
                    <div className="form-group">
                        <input type="text" onChange={this.onChangeHandler} value={this.state.searchTerm} className="form-control" id="search" aria-describedby="searchHelp" placeholder="Enter a search term."/>
                    </div>
                    <button onClick={this.submitHandler} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Search;