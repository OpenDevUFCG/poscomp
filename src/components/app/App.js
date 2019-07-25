import React from 'react';
import './App.css';

import PageSideNav from './sidenav/PageSideNav';
import PageContent from './content/PageContent';

const App = () => {
  return (
    <div className="App fill-container" >
      <PageSideNav />
      <PageContent />
    </div>
  );
};

export default App;
