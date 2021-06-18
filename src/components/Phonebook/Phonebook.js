import React, { Component } from "react";
import "./Phonebook.css";
import shortid from "shortid";
import PropTypes from "prop-types";

class Phonebook extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      id: shortid.generate(),
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <label className="Label" htmlFor={this.nameInputId}>
          Name
        </label>
        <input
          className="Input"
          type="text"
          onChange={this.handleChange}
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          id={this.nameInputId}
          required
        />
        <label className="Label" htmlFor={this.numberInputId}>
          Number
        </label>
        <input
          className="Input"
          type="tel"
          onChange={this.handleChange}
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          id={this.numberInputId}
          required
        />
        <button className="Button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Phonebook;
