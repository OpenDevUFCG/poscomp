import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.css';
import ToggleButton from '../toggleButton/ToggleButton';

const PageHeader = ({ drawerClickHandler }) => {
  return(
    <header className="page-header">
      <div className="header-toggle-button">
        <ToggleButton click={drawerClickHandler} />
      </div>
      <div className="header-title">
        <h1>POSCOMP</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired,
};

export default PageHeader;