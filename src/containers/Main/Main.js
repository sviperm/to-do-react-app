import React from 'react';

import Title from './Title/Title'
import TodoList from './TodoList/TodoList'
import FunctionalButtons from './FunctionalButtons/FunctionalButtons'
import Editor from './Editor/Editor'


import classes from './Main.module.css'

const Main = (props) => {
    return (
        <div className={classes.Main}>
            <Title />
            <TodoList />
            <FunctionalButtons />
            <Editor />
        </div>
    );
};

export default Main;