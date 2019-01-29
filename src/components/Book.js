import React from "react";
import styles from "./Book.module.css";

const Book = props => {
  let { book } = props;
  return (
    <div className={styles.list_item}>
      <div className={styles["list_item-left"]}>
        <img
          className={styles.list_image}
          src={book.book_image}
          alt={book.title}
        />
      </div>
      <div className={styles["list_item-right"]}>
        <p className={styles.list_title}>{book.title}</p>
        <p className={styles.list_author}>{book.author}</p>
      </div>
    </div>
  );
};

export default Book;
