import axios from "axios";

export const API = {
  
  // Deletes the book with the given id
  deleteBook: function(bookData) {
    return axios.delete("/deletebook/", bookData);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/savebook", bookData);
  }
};
