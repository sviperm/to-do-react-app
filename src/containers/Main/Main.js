import React from 'react';

import Title from './Title/Title'
import TodoList from './TodoList/TodoList'

import classes from './Main.module.css'

const Main = (props) => {
    return (
        <div className={classes.Main}>
            <Title />
            <TodoList />
            {/* Filters */}
            {/* AddTodoButton */}
            {/* AddTodoModal */}
        </div>
    );
};

export default Main;