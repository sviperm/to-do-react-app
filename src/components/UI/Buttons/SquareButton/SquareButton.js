import React from 'react'
import classes from './SquareButton.module.css'
import PropTypes from 'prop-types'

const SquareButton = ({ color, icon, bordered, onClick }) => {
    const buttonClasses = [].concat(
        classes.SquareButton,
        color ? classes[color] : null,
        icon ? classes[icon] : null,
        bordered ? classes.bordered : null,
    ).join(' ')

    return <div className={buttonClasses} onClick={onClick} />
}

SquareButton.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string,
    bordered: PropTypes.bool,
    onClick: PropTypes.func,
}

export default SquareButton
