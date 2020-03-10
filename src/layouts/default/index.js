import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageHeader from '../../components/header/PageHeader';
import PageSideNav from '../../components/sidenav/PageSideNav';
import Backdrop from '../../components/sidenav/Backdrop';
import routes from '../../routes';

function DefaultLayout() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  function handleSideOpen() {
    setSideDrawerOpen((prev) => !prev);
  }

  function handleBackdropClick() {
    setSideDrawerOpen(false);
  }

  const getRoutes = (routes) =>
    routes.map((route, index) =>
      route.layout === '/default' ? <Route path={route.path} component={route.component} key={index} /> : null
    );
  return (
    <>
      <PageSideNav shown={sideDrawerOpen} />
      <main>
        <PageHeader drawerClickHandler={handleSideOpen} />
        <Backdrop shown={sideDrawerOpen} click={handleBackdropClick} />
        <Switch>{getRoutes(routes)}</Switch>
      </main>
      {/* Footer aqui */}
    </>
  );
}

export default DefaultLayout;
