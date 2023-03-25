import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

import styles from "./style.module.css";
import { getActiveNotes, searchNotes } from "../../utils/data/data";
import SearchBar from "../../components/SearchBar";
import Notelist from "../../components/NoteList";
import Button from "../../components/Button";

export default function HomePageWrapper() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  let title = searchParams.get("title");

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };

  return (
    <HomePage
      onSearch={changeSearchParams}
      defaultKeyword={title}
      navigate={navigate}
    />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
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
      <section className={styles.homePageWrapper}>
        <h1 className={styles.homePageTitle}>Cari Catatan</h1>
        <SearchBar search={this.onSearch} />
        <Notelist notes={notesFiltered} />
        <Button
          className={styles.homePageButton}
          onClick={() => this.props.navigate("/notes/new")}
        >
          <FaPlus />
        </Button>
      </section>
    );
  }
}

HomePage.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
  navigate: PropTypes.func.isRequired,
};
