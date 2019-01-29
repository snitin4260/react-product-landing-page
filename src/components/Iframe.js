import React from "react";
import styles from "./Iframe.module.css";

const Iframe = props => {
  return <iframe className={styles.iframe} {...props} />;
};

export default Iframe;
