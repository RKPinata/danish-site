import React from "react";

import styles from "./ContactForm.module.css";

function ContactForm() {
  async function submitHandler(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks for reaching out, I will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("Unable to submit the form, try again later?");
    }
  }

  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <h1>Get in touch</h1>
      <div className={`${styles.email} ${styles.block}`}>
        <label htmlFor="frm-email">Email</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className={`${styles.phone} ${styles.block}`}>
        <label htmlFor="frm-phone">Phone</label>
        <input
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>
      <div className={`${styles.name} ${styles.block}`}>
        <div>
          <label htmlFor="frm-name">Name</label>
          <input
            id="frm-name"
            type="text"
            name="name"
            autoComplete="name"
            required
          />
        </div>
      </div>
      <div className={`${styles.message} ${styles.block}`}>
        <label htmlFor="frm-message">Message</label>
        <textarea id="frm-message" rows="6" name="message"></textarea>
      </div>
      <div className={`${styles.button} ${styles.block}`}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ContactForm;
