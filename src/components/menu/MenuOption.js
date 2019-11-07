import React from 'react';

const MenuOption = ({ label, link }) =>
  <a href={link} className="MenuOption">
    {label}
  </a>


export default MenuOption;
