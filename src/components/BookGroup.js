import React from "react";
import BookList from "./BookList";

const BookGroup = props => {
  let bookListArray = [];
  for (let i = 0; i < 4; i++) {
    bookListArray.push(<BookList books={props.books[i]} key={i} />);
  }
  return bookListArray;
};

export default BookGroup;
