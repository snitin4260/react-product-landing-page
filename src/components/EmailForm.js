import React from "react";
import styles from "./EmailForm.module.css";
const EmailForm = () => {
  return (
    <section className={styles["form-section"]}>
      <div className={styles["form-container"]}>
        <h3>Stay up-to-date with latest books</h3>
        <form
          className={styles.form}
          action="https://www.freecodecamp.com/email-submit"
        >
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <input type="submit" className={styles.submit} value="SUBMIT" />
        </form>
      </div>
    </section>
  );
};
export default EmailForm;
