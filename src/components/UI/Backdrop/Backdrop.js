import React from 'react'
import { useTransition, animated } from 'react-spring'
import PropTypes from 'prop-types'
import classes from './Backdrop.module.css'

const Backdrop = ({ show, onCLickHandler }) => {
    const transition = useTransition(show, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    return transition.map(({ item, key, props }) =>
        item && <animated.div className={classes.Backdrop} key={key} style={props} onClick={onCLickHandler} />
    )
}

Backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    onCLickHandler: PropTypes.func,
}

export default Backdrop
