import React from 'react';

import TodoListItem from '../../../components/TodoListItem/TodoListItem'

import classes from './TodoList.module.css'

const TodoList = (props) => {
    const todoList = [
        {
            id: 1, isChecked: true, text: 'Test text', labels: [
                { text: '5 July', color: 'pink' },
                { text: '01:00 PM', color: 'pink' },
                { text: '2h', color: 'red' },
            ]
        },
        {
            id: 2, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
    ].map((todo) => <TodoListItem key={todo.id} {...todo} />);

    return (
        <ul className={classes.TodoList}>
            {todoList}
        </ul>
    );
};

export default TodoList;