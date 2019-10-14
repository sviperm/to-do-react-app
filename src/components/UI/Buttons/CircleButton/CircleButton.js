import React, { useState } from 'react';
import classes from './CircleButton.module.css';

const CircleButton = props => {
    const [isActive, setIsActive] = useState(false);
    const [btnClasses, setBtnClasses] = useState([
        classes.CircleButton,
        classes[props.background] || null,
        classes[props.size] || null,
        classes[`icon-${props.icon}`] || null,
    ]);

    const changeActiveHandler = () => {
        if (props.becomeActiveOnClick) {
            setIsActive(prevState => !prevState);
            setBtnClasses(prevState => (
                isActive ?
                    prevState.filter(btnClass => btnClass !== classes.active) :
                    prevState.concat(classes.active)));
        };
    };

    const animationHandler = (animation) => {
        if (animation) {
            setBtnClasses(prevState => (
                isActive ?
                    prevState.filter(btnClass => btnClass !== classes[animation]) :
                    prevState.concat(classes[animation])));
        };
    };

    const onClickHandler = (onClickFunction) => {
        changeActiveHandler();
        animationHandler(props.animationOnClick);
        if (onClickFunction) onClickFunction();
    }
    return (
        <button className={btnClasses.join(' ')} onClick={() => onClickHandler(props.onClick)}>
            <div></div>
        </button>
    );
};

export default CircleButton;