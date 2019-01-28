import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ToolBar.module.css";

const ToolBar = props => {
  return (
    <header className={styles.toolbar}>
      <nav className={styles.toolbar__navigation}>
        <div className={styles.toolbar__logo}>
          <a href="/">
            <FontAwesomeIcon icon={["fab", "angrycreative"]} />
          </a>
        </div>
        <div className={styles["toolbar__navigation-items"]}>
          <ul>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Latest Books</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className={styles.toolbar__hamicon} onClick={props.onHamClick}>
          <FontAwesomeIcon icon="bars" size="4x" color="white" />
        </div>
      </nav>
    </header>
  );
};

export default ToolBar;
