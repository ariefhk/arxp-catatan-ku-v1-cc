import React from "react";

import styles from "./style.module.css";
import FormInput from "../../components/FormInput";

export default function AddNotePage() {
  return (
    <section className={styles.addNotePageWrapper}>
      <h1>Input data</h1>
      <FormInput />
    </section>
  );
}
