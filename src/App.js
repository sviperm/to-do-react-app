import React, { Fragment } from 'react';
import './App.css';
import Sidebar from './containers/Sidebar/Sidebar';
import TodoApp from './containers/TodoApp/TodoApp'

const App = () => (
  <Fragment>
    <Sidebar />
    <TodoApp />
  </Fragment>
)

export default App;
