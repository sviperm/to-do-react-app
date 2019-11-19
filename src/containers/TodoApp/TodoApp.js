import React from 'react';
import Title from './Title/Title'
import TodoList from './TodoList/TodoList'
import FunctionalButtons from './FunctionalButtons/FunctionalButtons'
import Editor from './Editor/Editor'
import classes from './TodoApp.module.css'

const Main = () => {
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
        {
            id: 3, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 4, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 5, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 6, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 7, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 8, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 9, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 10, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 11, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 12, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 13, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 14, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 15, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 16, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
        {
            id: 17, isChecked: false, text: 'Test text 2', labels: [
                { text: '6 July', color: 'gray' },
                { text: '02:00 PM', color: 'gray' },
                { text: '3h', color: 'gray' },
            ]
        },
    ]
    return (
        <div className={classes.TodoApp}>
            <Title />
            <TodoList items={todoList} />
            <FunctionalButtons />
            <Editor />
        </div>
    );
};

export default Main;