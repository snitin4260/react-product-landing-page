import React from "react";
import styles from "./Backdrop.module.css";

class Backdrop extends React.Component {
  componentWillMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = null;
  }
  render() {
    return <div onClick={this.props.onclick} className={styles.backdrop} />;
  }
}
export default Backdrop;
