import React, { useState, useEffect } from 'react';
import classes from './CircleButton.module.css';

const CircleButton = ({ background, size, icon, animationOnActive, isActive, onClick }) => {
    const [btnClasses, setBtnClasses] = useState([].concat(
        classes.CircleButton,
        classes[background],
        classes[size],
        classes[`icon-${icon}`],
        classes[animationOnActive],
    ));

    useEffect(() => {
        setBtnClasses(prevState => (
            isActive ?
                prevState.concat(classes.active) :
                prevState.filter(btnClass => btnClass !== classes.active)
        ));
    }, [isActive])

    return (
        <button className={btnClasses.join(' ')} onClick={onClick}>
            <div></div>
        </button>
    );
};

export default CircleButton;
