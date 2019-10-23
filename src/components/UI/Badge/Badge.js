import React, { useMemo } from 'react';
import classes from './Badge.module.css';

const Badge = ({ text, color }) => {
    const badgeClasses = useMemo(() => ([
        classes.Badge,
        color ? classes[color] : classes.default,
    ]), [color])
    return <span className={badgeClasses.join(' ')}>{text}</span>;
};

export default Badge;
