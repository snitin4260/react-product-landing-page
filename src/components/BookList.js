import React from "react";
import Book from "./Book";
import styles from "./BookList.module.css";

const BookList = props => {
  let booklist = props.books;

  return (
    <div className={styles.list}>
      <h3 className={styles.list_name}>{booklist.list_name}</h3>
      <div className={styles["list_grid-container"]}>
        {booklist.books.map((book, i) => {
          return <Book key={i} book={book} />;
        })}
      </div>
    </div>
  );
};

export default BookList;
