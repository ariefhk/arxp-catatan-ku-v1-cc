import React from "react";
import SearchBar from "../../components/SearchBar";
import Notelist from "../../components/NoteList";
import Button from "../../components/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getActiveNotes, searchNotes } from "../../utils/data/data";
import { FaPlus } from "react-icons/fa";

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
      <section>
        <h1>Catatan Aktif</h1>
        <SearchBar search={this.onSearch} />
        <Notelist notes={notesFiltered} />
        <Button onClick={() => this.props.navigate("/notes/new")}>
          <FaPlus />
        </Button>
      </section>
    );
  }
}
