import React from 'react';
import PropTypes from 'prop-types';

const getIconColorStyle = (color) => ({ color });

const Icon = ({ icon, iconColor }) => (
  <i className="material-icons" style={getIconColorStyle(iconColor)}>
    {icon}
  </i>
);

Icon.propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.string,
};

export default Icon;
