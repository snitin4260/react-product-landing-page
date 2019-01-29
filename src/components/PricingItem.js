import React from "react";
import styles from "./PricingItem.module.css";

const PricingItem = props => {
  let { period, price } = props;
  return (
    <div className={styles.pricing_item}>
      <div className={styles.subscr_type}>{period}</div>
      <div className={styles.price}>{price}$</div>
      <div className={styles.cancel_message}>Cancel anytime</div>
      <button className={styles.price_button}>Select</button>
    </div>
  );
};
export default PricingItem;
