import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function NavigationBar() {
  return (
    <nav className={styles.navbarWrapper}>
      <h1 className={styles.navbarIcon}>
        <Link to="/" className={styles.navbarIconLink}>
          Catatanku
        </Link>
      </h1>
      <ul className={styles.navbarLink}>
        <li>
          <Link to="/archive" className={styles.navbarLinkText}>
            Arsip
          </Link>
        </li>
      </ul>
    </nav>
  );
}
