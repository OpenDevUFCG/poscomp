import React from 'react';
import PropTypes from 'prop-types';
import './PageSideNav.css';
import NavContent from './NavContent/NavContent';

const PageSideNav = ({ shown }) => {
  let classes = (shown) ? ['drawer', 'open'] : ['drawer'];

  return(
    <aside className={classes.join(' ')} >
      <NavContent />
    </aside>
  );
};

PageSideNav.propTypes = {
  shown: PropTypes.bool.isRequired,
};

export default PageSideNav;