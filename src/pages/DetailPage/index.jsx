import React from "react";
import DetailNote from "../../components/DetailNote";
import { useNavigate, useParams } from "react-router-dom";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../../utils/data/data";
import Page404 from "../Page404";
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
          <section>
            <DetailNote
              title={notes.title}
              createdAt={notes.createdAt}
              body={notes.body}
            />
            <div>
              {notes.archived ? (
                <Button onClick={() => this.onArchiveHandler(notes.id)}>
                  <BiArchiveIn />
                  Sudah Archive
                </Button>
              ) : (
                <Button onClick={() => this.onArchiveHandler(notes.id)}>
                  <BiArchiveOut />
                  Belum Archive
                </Button>
              )}
              <Button onClick={() => this.onDelete(notes.id)}>
                <MdDelete />
              </Button>
            </div>
          </section>
        ) : (
          <Page404 />
        )}
      </section>
    );
  }
}
