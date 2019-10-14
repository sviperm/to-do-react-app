import React, { useState } from 'react';
import CircleButton from '../CircleButton';
import classes from './ButtonWithLabel.module.css';

const ButtonWithLabel = props => {
    const [isLabelVisable, setLabelVisability] = useState(false)
    const translateY = (props.order * 65) + 20;
    return (
        <div className={classes.ButtonWithLabel}
            style={{ transform: `translateY(-${translateY}px)` }}
            onClick={props.onClick}
            onPointerEnter={() => setLabelVisability(true)}
            onPointerLeave={() => setLabelVisability(false)}
        >
            <CircleButton
                size="small"
                icon={props.label.toLowerCase()}
            />
            {props.label && isLabelVisable &&
                <span>{props.label}</span>
            }
        </div>
    );
};

export default ButtonWithLabel;