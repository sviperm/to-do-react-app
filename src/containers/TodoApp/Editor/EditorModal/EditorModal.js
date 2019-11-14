import React from 'react'
import { useTransition, animated } from 'react-spring'
import PropTypes from 'prop-types'

import SquareButton from '../../../../components/UI/Buttons/SquareButton/SquareButton'
import image from '../../../../media/images/editor.svg'
import classes from './EditorModal.module.css'

const EditorModal = ({ show, onCloseClickHandler, children }) => {
    const transition = useTransition(show, null, {
        from: { transform: 'translateX(0px)' },
        enter: { transform: 'translateX(-500px)' },
        leave: { transform: 'translateX(0px)' },
    })
    return transition.map(({ item, key, props }) =>
        item && (
            <animated.div className={classes.Editor} key={key} style={props}>
                <div className={classes.CloseButton}>
                    <SquareButton color="red" icon="failed" bordered onClick={onCloseClickHandler} />
                </div>
                {children}
                <img src={image} alt="" />
            </animated.div>
        )
    )
}

EditorModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onCloseClickHandler: PropTypes.func,
    children: PropTypes.any,
}

export default EditorModal
