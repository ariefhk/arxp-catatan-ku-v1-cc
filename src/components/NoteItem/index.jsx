import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./style.module.css";
import { showFormattedDate } from "../../utils/data/data";

export default function NoteItem({ id, title, createdAt, body }) {
  return (
    <article className={styles.noteItemWrapper}>
      <h3 className={styles.noteItemTitle}>
        <Link to={`/notes/${id}`} className={styles.noteItemTitleLink}>
          {title}
        </Link>
      </h3>
      <p className={styles.noteItemDate}>{showFormattedDate(createdAt)}</p>
      <p className={styles.noteItemText}>{body}</p>
    </article>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
