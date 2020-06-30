import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, getName }) => (
  <>
    <p>Find contact by name</p>
    <input 
    type="text"
    onChange={getName}
    value={value}
    />
  </>
);

export default Filter;