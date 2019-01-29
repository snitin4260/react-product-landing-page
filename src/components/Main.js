import React from "react";
import ProductFeatures from "./ProductFeatures";
import EmailForm from "./EmailForm";
import BooksSection from "./BooksSection";
import Pricing from "./Pricing";
import Video from "./Video";
import styles from "./Main.module.css";

class Main extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <ProductFeatures />
        <EmailForm />
        <BooksSection />
        <Pricing />
        <Video />
      </main>
    );
  }
}

export default Main;
