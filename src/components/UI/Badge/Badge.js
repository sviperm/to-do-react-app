import React from 'react';
import classes from './Badge.module.css';

const Badge = ({ text, color }) => {
    const badgeClasses = [
        classes.Badge,
        color ? classes[color] : classes.default,
    ]
    return <span className={badgeClasses.join(' ')}>{text}</span>;
};

export default Badge;
