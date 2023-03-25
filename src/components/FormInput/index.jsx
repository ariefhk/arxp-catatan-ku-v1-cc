import React from "react";
import Button from "../Button";
import { addNote } from "../../utils/data/data";
import { useNavigate } from "react-router-dom";

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
      return;
    }

    addNote({
      title: this.state.title,
      body: this.state.body,
    });

    this.props.navigate("/");
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label htmlFor="title">Judul</label>
        <input
          type="text"
          id="title"
          name="title"
          value={this.state.title}
          onChange={this.onHandleChange}
        />
        <br />
        <label htmlFor="note">Catatan</label>
        <input
          type="text"
          id="note"
          name="note"
          value={this.state.body}
          onChange={this.onHandleChange}
        />
        <br />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
