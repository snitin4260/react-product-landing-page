import React from "react";
import styles from "./ProductFeatures.module.css";
import contactImg from "../images/contact.svg";
import discountImg from "../images/discount.svg";
import droneImg from "../images/drone.svg";
import mobileImg from "../images/mobile.svg";

const ProductFeatures = () => {
  return (
    <section
      id="features"
      className={[styles.clearfix, styles.features].join(" ")}
    >
      <h2>Features</h2>
      <div className={styles.features__container}>
        <img src={discountImg} alt="discount" />
        <div className={styles.features__para}>
          <p>We offer heavy discounts for AC prime members</p>
        </div>
      </div>
      <div className={styles.features__container}>
        <img src={mobileImg} alt="mobile app" />
        <div className={styles.features__para}>
          <p>We have our own ios, Android app</p>
        </div>
      </div>
      <div className={styles.features__container}>
        <img src={droneImg} alt="drone delivery" />
        <div className={styles.features__para}>
          <p>Our drone will deliver the product within 2 hours of purchase</p>
        </div>
      </div>

      <div className={styles.features__container}>
        <img src={contactImg} alt="customer support" />
        <div className={styles.features__para}>
          <p>Our customer care is available 24x7</p>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
