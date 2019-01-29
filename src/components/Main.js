import React from "react";
import ProductFeatures from "./ProductFeatures";
import EmailForm from "./EmailForm";
import BooksSection from "./BooksSection";
import styles from "./Main.module.css";

class Main extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <ProductFeatures />
        <EmailForm />
        <BooksSection />
      </main>
    );
  }
}

export default Main;
