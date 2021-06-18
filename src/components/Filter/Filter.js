import React from "react";
import "./Filter.css";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
  <label className="Filter__label">
    <span className="Filter__text">Find contacts by name</span>
    <input
      className="Filter__input"
      type="text"
      onChange={onChange}
      value={value}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
