import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

import styles from "./style.module.css";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../../utils/data/data";
import Page404 from "../Page404";
import DetailNote from "../../components/DetailNote";
import Button from "../../components/Button";

export default function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getNote(props.id),
    };

    this.test = this.test.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  test = (id) => {
    console.log(id);
  };

  onDelete(id) {
    deleteNote(id);
    this.props.navigate("/");
  }

  onArchiveHandler(id) {
    if (this.state.notes.archived) {
      unarchiveNote(id);
      this.props.navigate("/");
    } else if (!this.state.notes.archived) {
      archiveNote(id);
      this.props.navigate("/");
    }
  }

  render() {
    const { notes } = this.state;
    return (
      <section>
        {notes ? (
          <>
            <DetailNote
              title={notes.title}
              createdAt={notes.createdAt}
              body={notes.body}
            />
            <div className={styles.detailPageButtonWrapper}>
              {notes.archived ? (
                <Button
                  className={styles.detailPageButton}
                  onClick={() => this.onArchiveHandler(notes.id)}
                >
                  <BiArchiveIn />
                </Button>
              ) : (
                <Button
                  className={styles.detailPageButton}
                  onClick={() => this.onArchiveHandler(notes.id)}
                >
                  <BiArchiveOut />
                </Button>
              )}
              <Button
                className={styles.detailPageButton}
                onClick={() => this.onDelete(notes.id)}
              >
                <MdDelete />
              </Button>
            </div>
          </>
        ) : (
          <Page404 />
        )}
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};
