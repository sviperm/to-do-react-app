import React, { useState } from 'react';
import CircleButton from '../CircleButton';
import classes from './ButtonWithLabel.module.css';

const ButtonWithLabel = ({ order, onClick, label }) => {
    const [isLabelVisable, setLabelVisability] = useState(false)
    const translateY = (order * 65) + 10;
    return (
        <div className={classes.ButtonWithLabel}
            style={{ transform: `translateY(-${translateY}px)` }}
            onClick={onClick}
            onPointerEnter={() => setLabelVisability(true)}
            onPointerLeave={() => setLabelVisability(false)}
        >
            <CircleButton
                size="small"
                icon={label.toLowerCase()}
            />
            {label && isLabelVisable &&
                <span>{label}</span>
            }
        </div>
    );
};

export default ButtonWithLabel;