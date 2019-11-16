import React, { useState } from 'react'
import { useTransition, animated, config } from 'react-spring'
import classes from './ButtonWithLabel.module.css'

import CircleButton from '../CircleButton'

const ButtonWithLabel = ({ id, show, onClick, label }) => {
    const [isLabelVisable, setLabelVisability] = useState(false)

    const translateY = `translateY(-${(id * 65) + 10}px)`

    const transitions = useTransition(show, null, {
        from: { transform: `translateY(0px)` },
        enter: { transform: translateY },
        leave: { transform: `translateY(0px)` },
        config: { ...config.wobbly, clamp: !show },
    })

    return transitions.map(({ item, key, props }) => item && (
        <animated.div
            key={key}
            className={classes.ButtonWithLabel}
            style={{ ...props, zIndex: -id }}
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
        </animated.div>
    )
    );
};

export default ButtonWithLabel;