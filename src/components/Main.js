import React from "react";
import ProductFeatures from "./ProductFeatures";
import EmailForm from "./EmailForm";
import Books from "./Books";
import styles from "./Main.module.css";

class Main extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <ProductFeatures />
        <EmailForm />
        <Books />
      </main>
    );
  }
}

export default Main;
