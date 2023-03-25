import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils/data/data";

export default function NoteItem({ id, title, createdAt, body }) {
  return (
    <article>
      <h3>
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p>{showFormattedDate(createdAt)}</p>
      <p>{body}</p>
    </article>
  );
}
