import React, { Component } from "react";
import "./Contacts.css";
import PropTypes from "prop-types";

class Contacts extends Component {
  render() {
    return (
      <ul className="Contacts__list">
        {this.props.addList.map(({ name, number, id }) => {
          return (
            <li key={id} className="Contacts__item">
              <span className="Contacts__text">
                {name}: {number}
              </span>
              <button
                className="Contacts__button-delete"
                type="button"
                onClick={() => this.props.onDelete(id)}
              >
                Удалить
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

Contacts.propTypes = {
  addList: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
