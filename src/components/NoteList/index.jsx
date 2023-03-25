import React from "react";
import NoteItem from "../NoteItem";

export default function Notelist({ notes }) {
  return (
    <section>
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
        <h1>Tidak Ada Data!</h1>
      )}
    </section>
  );
}
