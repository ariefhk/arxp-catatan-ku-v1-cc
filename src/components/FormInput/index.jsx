import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./style.module.css";
import { addNote } from "../../utils/data/data";
import Button from "../Button";

export default function FormInputWrapper() {
  const navigate = useNavigate();

  return <FormInput navigate={navigate} />;
}

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "title") {
      this.setState({ ...this.state, title: value });
    } else if (name === "note") {
      this.setState({ ...this.state, body: value });
    }
  }

  onHandleSubmit(event) {
    event.preventDefault();

    const { title, body } = this.state;

    if (!title || !body) {
      alert("Form tidak boleh Kosong!");
      this.setState({ title: "", body: "" });
      return;
    }

    addNote({
      title: this.state.title,
      body: this.state.body,
    });

    this.props.navigate("/");
  }

  render() {
    return (
      <form className={styles.formInputWrapper} onSubmit={this.onHandleSubmit}>
        <div className={styles.formInputBox}>
          <label htmlFor="title">Judul</label>
          <input
            type="text"
            placeholder="Isi Judul catatan..."
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.onHandleChange}
          />
        </div>

        <div className={styles.formInputBox}>
          <label htmlFor="note">Catatan</label>
          <textarea
            type="text"
            placeholder="Isi deskripsi catatan..."
            id="note"
            name="note"
            cols={3}
            rows={8}
            value={this.state.body}
            onChange={this.onHandleChange}
          />
        </div>

        <Button className={styles.formInputButton} type="submit">
          Submit
        </Button>
      </form>
    );
  }
}

FormInput.propTypes = {
  navigate: PropTypes.func.isRequired,
};
