import React, { Component } from "react";
import "./App.css";
import Phonebook from "./components/Phonebook";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {      
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  availabilityProof = (data) => {
    const newValue = data.name.toLowerCase();

    const ability = this.state.contacts.find((contact) =>
      contact.name.toLowerCase().includes(newValue)
    );

    ability !== undefined
      ? alert(`${ability.name} is already in contacts`)
      : this.onSubmitHandler(data);
  };

  onSubmitHandler = (data) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, data],
    }));
  };

  onFilterChange = (e) => {
    const { value } = e.currentTarget;
    this.setState({
      filter: value,
    });
  };

  getFilterRender = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDelete = (deleteId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== deleteId),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getFilterRender();

    return (
      <>
        <h1 className="Title">Phonebook</h1>
        <Phonebook onSubmit={this.availabilityProof} />
        <h2>Contacts</h2>
        <Filter onChange={this.onFilterChange} value={filter} />
        <Contacts addList={visibleContacts} onDelete={this.onDelete} />
      </>
    );
  }
}

export default App;
