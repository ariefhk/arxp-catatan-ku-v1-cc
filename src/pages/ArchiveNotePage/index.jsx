import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./style.module.css";
import { getArchivedNotes, searchNotes } from "../../utils/data/data";
import SearchBar from "../../components/SearchBar";
import Notelist from "../../components/NoteList";

export default function ArchivedNotePageWrapper() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  let title = searchParams.get("title");

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };

  return (
    <ArchivedNotePage
      onSearch={changeSearchParams}
      defaultKeyword={title}
      navigate={navigate}
    />
  );
}

class ArchivedNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState({ keyword });
    this.props.onSearch(keyword);
  }

  render() {
    const { notes, keyword } = this.state;
    const notesFiltered = searchNotes(notes, keyword);

    return (
      <section className={styles.archivePageWrapper}>
        <h1 className={styles.archiveTitle}>Cari Catatan</h1>
        <SearchBar search={this.onSearch} />
        <Notelist notes={notesFiltered} />
      </section>
    );
  }
}

ArchivedNotePage.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
  navigate: PropTypes.func.isRequired,
};
