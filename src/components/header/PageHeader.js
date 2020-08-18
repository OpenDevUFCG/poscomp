import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.css';
import ToggleButton from '../toggleButton/ToggleButton';
import Menu from '../menu/Menu';

const menuOptions = [
  {
    label: 'Home',
    link: '/'
  }
];

const PageHeader = ({ drawerClickHandler }) => {
  return (
    <header className="page-header">
      <Menu 
        options={menuOptions}
      />
      <ToggleButton className="header-toggle-button" click={drawerClickHandler} />
      <h1>SOLUCIONARIO - POSCOMP</h1>
    </header>
  );
};

PageHeader.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired,
};

export default PageHeader;
