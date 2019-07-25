import React from 'react';
import './PageContent.css';

import PageHeader from './header/PageHeader';
import MainField from './main/MainField';

const PageContent = () => {
  return (
    <section className="PageContent" >
      <PageHeader />
      <MainField />
    </section>
  );
};

export default PageContent;
