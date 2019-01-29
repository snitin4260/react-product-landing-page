import React from "react";
import styles from "./SideBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SideBar = props => {
  let sideBarClasses = styles.sidebar;
  if (props.show) sideBarClasses = `${styles.sidebar} ${styles.open}`;
  return (
    <div className={sideBarClasses}>
      <ul>
        <li className={styles["close-icon"]} onClick={props.onCloseButtonClick}>
          <FontAwesomeIcon icon="times" size="2x" color="black" />
        </li>
        <li onClick={props.onCloseButtonClick}>
          <a href="#features">Features</a>
        </li>
        <li onClick={props.onCloseButtonClick}>
          <a href="#books">Latest Books</a>
        </li>
        <li onClick={props.onCloseButtonClick}>
          <a href="#pricing">Pricing</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
