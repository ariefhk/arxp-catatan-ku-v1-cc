import React from "react";
import PropTypes from "prop-types";

import styles from "./style.module.css";
import NoteItem from "../NoteItem";

export default function Notelist({ notes }) {
  return (
    <section
      className={
        notes.length ? styles.noteListWrapper : styles.noteListWrapperNoData
      }
    >
      {notes.length ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            createdAt={note.createdAt}
            title={note.title}
            body={note.body}
          />
        ))
      ) : (
        <h1 className={styles.noteListNoData}>Tidak Ada Catatan!</h1>
      )}
    </section>
  );
}

Notelist.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
