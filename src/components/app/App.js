import React from 'react';
import './App.css';

import PageSideNav from './sidenav/PageSideNav';
import Content from './content/Content';

const App = () => {
  return (
    <div className="App" >
      <PageSideNav />
      <Content />
      
    </div>
  );
}

export default App;
