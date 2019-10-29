import React from 'react';
import classes from './Blur.module.css'
import PropTypes from 'prop-types'

const Blur = ({ position, isOpen, onClick }) => {
    const backdropClasses = [classes.Blur].concat(classes[position], isOpen ? classes.active : null).join(' ')
    return <div className={backdropClasses} onClick={onClick}></div>
}

Blur.propTypes = {
    position: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Blur
