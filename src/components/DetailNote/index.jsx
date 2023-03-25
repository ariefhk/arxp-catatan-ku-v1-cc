import React from "react";
import { showFormattedDate } from "../../utils/data/data";

export default function DetailNote({ title, createdAt, body }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{showFormattedDate(createdAt)}</p>
      <p>{body}</p>
    </div>
  );
}
