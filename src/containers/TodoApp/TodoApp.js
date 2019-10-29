import React from 'react';
import Title from './Title/Title'
import TodoList from './TodoList/TodoList'
import FunctionalButtons from './FunctionalButtons/FunctionalButtons'
import Editor from './Editor/Editor'
import classes from './TodoApp.module.css'

const Main = () => {
    return (
        <div className={classes.TodoApp}>
            <Title />
            <TodoList />
            <FunctionalButtons />
            <Editor />
        </div>
    );
};

export default Main;