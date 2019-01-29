import React from "react";
import PricingItem from "./PricingItem";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <h2>Pricing</h2>
      <div className={styles.pricing_container}>
        <PricingItem period={"Monthly"} price={10} />
        <PricingItem period={"Yearly"} price={100} />
      </div>
    </section>
  );
};

export default Pricing;
