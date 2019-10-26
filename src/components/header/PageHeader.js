import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.css';
import ToggleButton from '../toggleButton/ToggleButton';

import Navbar from '../navbar/Navbar';

const PageHeader = ({ drawerClickHandler }) => {
  return (
    <header className="page-header">
      <ToggleButton className="header-toggle-button" click={drawerClickHandler} />
      <h1>SOLUCIONARIO POSCOMP</h1>
      <Navbar />
    </header>
  );
};

PageHeader.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired,
};

export default PageHeader;
