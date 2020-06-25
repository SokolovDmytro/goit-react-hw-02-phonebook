import React from "react";
import PropTypes from "prop-types";

const Filter = ({ filter, getName }) => (
  <>
    <p>Find contact by name</p>
    <input 
    type="text"
    onChange={getName}
    value={filter}
    />
  </>
);

Filter.propTypes = {
  getName: PropTypes.func.isRequired
};

export default Filter;