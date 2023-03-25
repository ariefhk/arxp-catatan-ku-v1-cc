import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <h1>
        <Link to="/">Catatanku-App</Link>
      </h1>
      <nav>
        <button>
          <Link to="/archive">Arsip</Link>
        </button>
      </nav>
    </>
  );
}
