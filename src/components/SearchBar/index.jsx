import React from "react";

export default function SearchBar({ search }) {
  return (
    <section>
      <input type="text" onChange={(event) => search(event.target.value)} />
    </section>
  );
}
