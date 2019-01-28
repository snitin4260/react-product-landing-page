import React from "react";
import styles from "./SideBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SideBar = props => {
  let sideBarClasses = styles.sidebar;
  if (props.show) sideBarClasses = `${styles.sidebar} ${styles.open}`;

  return (
    <div className={sideBarClasses}>
      <ul>
        <li onClick={props.onCloseButtonClick}>
          <FontAwesomeIcon icon="times" size="2x" color="black" />
        </li>
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
  );
};

export default SideBar;
