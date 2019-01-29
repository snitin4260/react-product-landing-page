import React from "react";
import Loader from "./Loader.js";
import BookGroup from "./BookGroup.js";
import nyt from "../api/newYorkTimes";
import styles from "./BooksSection.module.css";
class BooksSection extends React.Component {
  state = {
    books: null
  };
  componentDidMount() {
    const getResponseFromNYT = async () => {
      let response = await nyt;
      let allBookLists = response.data.results.lists;
      this.setState({
        books: allBookLists
      });
    };
    getResponseFromNYT();
  }

  render() {
    return (
      <section className={styles["books-section"]}>
        <h2>Latest Books</h2>
        {!this.state.books ? (
          <Loader />
        ) : (
          <BookGroup books={this.state.books} />
        )}
      </section>
    );
  }
}

export default BooksSection;
