import React from "react";
import styles from "./style.module.css";
import PropTypes from "prop-types";

export default function SearchBar({ search }) {
  return (
    <div className={styles.searchBarWrapper}>
      <input
        className={styles.searchBarInput}
        type="text"
        onChange={(event) => search(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};
