import axios from "axios";

export const API = {
  
  // Deletes the book with the given id
  deleteBook: function(bookID) {
    return axios.delete(`/deletebook/${bookID}`);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/savebook", bookData);
  },

  // grabs books from the database
  getBookList: function(){
    return axios.get("/bookList");
  }
  
};
