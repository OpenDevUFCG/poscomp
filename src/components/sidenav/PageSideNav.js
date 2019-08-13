import React from 'react';
import PropTypes from 'prop-types';
import './PageSideNav.css';

const PageSideNav = ({ shown }) => {
  let classes = (shown) ? ['drawer', 'open'] : ['drawer'];

  return(
    <aside className={classes.join(' ')} >
      <div className="side-nav-content">
        <p className="filters-title">Filtros:</p>
        {/* Adicionar filtros da aplicação. */}
      </div>
    </aside>
  );
};

PageSideNav.propTypes = {
  shown: PropTypes.bool.isRequired,
};

export default PageSideNav;