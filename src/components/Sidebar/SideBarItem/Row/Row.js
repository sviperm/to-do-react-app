import React, { useMemo } from 'react';
import classes from './Row.module.css';

const Row = ({ title, icon, text }) => {
    const rowClasses = useMemo(() => ([].concat(
        classes.Row,
        title ? classes.title : classes.text,
    ).join(' ')), [title]);

    const rowIcon = useMemo(() => (
        title ? null : [
            classes.icon,
            icon ? classes[icon] : classes.task,
        ].join(' ')
    ), [title, icon]);

    return (
        <li className={rowClasses}>
            <span className={rowIcon}></span>
            <span className={title ? classes.title : classes.text}>{text}</span>
        </li>
    );
};

export default Row;
