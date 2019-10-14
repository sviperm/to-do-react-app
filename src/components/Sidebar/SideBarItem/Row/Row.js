import React from 'react';
import classes from './Row.module.css';

const Row = props => {
    const rowClasses = [
        classes.Row,
        props.title ? classes.title : classes.text,
    ].join(' ');

    const rowIcon = props.title ? null
        : [
            classes.icon,
            props.icon ? classes[props.icon] : classes.task,
        ].join(' ');

    return (
        <li className={rowClasses}>
            <span className={rowIcon}></span>
            <span className={props.title ? classes.title : classes.text}>{props.text}</span>
        </li>
    );
};

export default Row;
