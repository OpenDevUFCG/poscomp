import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './ToggleButton.css';

const ToggleButton = ({ click }) => {
  return (
    <button type="button" onClick={click} className="toggle-button">
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

ToggleButton.propTypes = {
  click: PropTypes.func,
};

export default ToggleButton;
