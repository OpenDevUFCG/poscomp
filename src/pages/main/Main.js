import React, { useState } from 'react';
import PageSideNav from '../../components/sidenav/PageSideNav';
import PageHeader from '../../components/header/PageHeader';
import MainField from '../../components/content/main/MainField';
import Backdrop from '../../components/sidenav/Backdrop';
import './Main.css';

const Main = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const handleDrawerClick = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const handleBackdropClick = () => {
    setSideDrawerOpen(false);
  };

  return(
    <main className="Main">
      <PageSideNav shown={sideDrawerOpen}/>
      <section className="pageContent">
        <PageHeader
          drawerClickHandler={handleDrawerClick} />
        
        <Backdrop 
          shown={sideDrawerOpen}
          click={handleBackdropClick}
        />
        <MainField />
      </section>
    </main>
  );
};

export default Main;