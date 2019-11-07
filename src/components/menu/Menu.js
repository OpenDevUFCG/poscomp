import React from 'react';
import MenuOption from './MenuOption';
import './Menu.css';

const Menu = ({ options }) =>
  <div className="Menu--container">
    <ul className="Menu__options">
      {
        options.map(({ label, link }) =>
          <li className="Menu__option">
            <MenuOption
              label={label}
              link={link}
            />
          </li>
        )
      }
    </ul>
  </div>

export default Menu;
