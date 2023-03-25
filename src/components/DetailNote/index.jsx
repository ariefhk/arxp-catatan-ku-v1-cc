import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.css";
import { showFormattedDate } from "../../utils/data/data";

export default function DetailNote({ title, createdAt, body }) {
  return (
    <div className={styles.detailNoteWrapper}>
      <h3 className={styles.detailNoteTitle}>{title}</h3>
      <p className={styles.detailNoteDate}>{showFormattedDate(createdAt)}</p>
      <p className={styles.detailNoteBody}>{body}</p>
    </div>
  );
}

DetailNote.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
