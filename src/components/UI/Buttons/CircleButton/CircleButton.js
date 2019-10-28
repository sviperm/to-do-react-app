import React, { useMemo } from 'react';
import classes from './CircleButton.module.css';

const CircleButton = ({ background, size, icon, animationOnActive, isActive, onClick }) => {
    const btnClasses = useMemo(() => ([].concat(
        classes.CircleButton,
        classes[background],
        classes[size],
        classes[`icon-${icon}`],
        classes[animationOnActive],
        isActive ? classes.active : null,
    )), [isActive, background, size, icon, animationOnActive])

    return (
        <button className={btnClasses.join(' ')} onClick={onClick}>
            <div></div>
        </button>
    );
};

export default CircleButton;
