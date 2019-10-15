import React, { useState, useEffect } from 'react';
import classes from './CircleButton.module.css';

const CircleButton = ({ background, size, icon, animationOnActive, isActive, onClick }) => {
    const [btnClasses, setBtnClasses] = useState([
        classes.CircleButton,
        classes[background] || null,
        classes[size] || null,
        classes[`icon-${icon}`] || null,
        classes[animationOnActive] || null,
    ]);

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
