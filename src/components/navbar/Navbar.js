import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

import Icon from '../icon/Icon';

const getNavbarOptionClass = (selected) => 'navbar-option' + (selected ? ' selected-option' : '');

const NavbarOption = ({ name, icon, link, selected }) => (
  <div className={getNavbarOptionClass(selected)}>
    <a href={link}>
      <Icon icon={icon}></Icon>
      <h2>{name.toUpperCase()}</h2>
    </a>
  </div>
);

const navbarOption = (name, icon, link, selected) => ({ name, icon, link, selected });

const navbarOptions = [
  navbarOption('Questões', 'assignment', '/', true),
  navbarOption('Info', 'error_outline', '/info'),
  navbarOption('Ajuda', 'help_outline', '/ajuda'),
  navbarOption('Estatísticas', 'assessment', '/estatisticas'),
];

const Navbar = () => {
  return <nav className="navbar">{navbarOptions.map(NavbarOption)}</nav>;
};

Navbar.propTypes = {};

export default Navbar;
