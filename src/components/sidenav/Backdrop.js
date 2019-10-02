import React from 'react';
import PropTypes from 'prop-types';
import './Backdrop.css';

const Backdrop = ({ click, shown }) => {
  let classes = shown ? ['backdrop', 'open'] : ['backdrop'];
  return <div className={classes.join(' ')} onClick={click} />;
};

Backdrop.propTypes = {
  click: PropTypes.func,
  shown: PropTypes.bool,
};

export default Backdrop;
