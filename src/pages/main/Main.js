import React from 'react';

import PageSideNav from '../../components/sidenav/PageSideNav';
import PageHeader from '../../components/header/PageHeader';
import MainField from '../../components/content/main/MainField';

import './Main.css';

const Main = () => {
  return(
    <main className="Main">
      <PageSideNav />
      <section className="pageContent">
        <PageHeader />
        <MainField />
      </section>
    </main>
  );
};

export default Main;