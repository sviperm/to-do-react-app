import React, { useState, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group';
import CircleButton from '../CircleButton'
import classes from './ButtonWithLabel.module.css'

const ButtonWithLabel = ({ order, onClick, label, visability }) => {
    const [isLabelVisable, setLabelVisability] = useState(false)
    const [style, setStyle] = useState({})

    const showLabel = useCallback(
        () => { setLabelVisability(true) }, [],
    )
    const hideLabel = useCallback(
        () => { setLabelVisability(false) }, [],
    )
    const translateY = useCallback(
        () => {
            setStyle({
                transform: `translateY(-${(order * 65) + 10}px)`
            })
        }, [order],
    )
    const removeTranslateY = useCallback(
        () => { setStyle({}) }, [],
    )

    return (
        <CSSTransition
            in={visability}
            unmountOnExit
            timeout={300}
            classNames={{
                enter: classes.enter,
                enterActive: classes.enterActive,
                exit: classes.exit,
                exitActive: classes.exitActive,
            }}
            onEntering={translateY}
            onExiting={removeTranslateY}

        >
            <div className={classes.ButtonWithLabel}
                style={{
                    zIndex: 100 - order,
                    ...style,
                }}
                onClick={onClick}
                onPointerEnter={showLabel}
                onPointerLeave={hideLabel}
            >
                <CircleButton
                    size="small"
                    icon={label.toLowerCase()}
                />
                {label && isLabelVisable &&
                    <span>{label}</span>
                }
            </div>
        </CSSTransition >
    );
};

export default ButtonWithLabel;