import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './ToggleButton.css';

const ToggleButton = ({ click, className }) => {
  const classes = ['toggle-button', className];

  return (
    <button type="button" onClick={click} className={classes.join(' ')}>
      <FontAwesomeIcon size="lg" icon={faBars} />
    </button>
  );
};

ToggleButton.propTypes = {
  click: PropTypes.func,
  className: PropTypes.string,
};

export default ToggleButton;
