import React, { Fragment } from 'react';
import './App.css';

import Sidebar from './containers/Sidebar/Sidebar';
import Main from './containers/Main/Main'

function App() {
  return (
    <Fragment>
      <Sidebar />
      <Main />
    </Fragment>
  );
}

export default App;
