import React from 'react'
import classes from './SubmitButton.module.css'
import PropTypes from 'prop-types'

const SubmitButton = ({ isDisabled, color = 'green', text, children }) => {
    const buttonClasses = [classes.SubmitButton, classes[color]]
        .concat(isDisabled ? classes.disabled : null)
        .join(' ')
    return (
        <button disabled={isDisabled} className={buttonClasses}>
            {text || children}
        </button>
    );
}

SubmitButton.propTypes = {
    isDisabled: PropTypes.bool,
    color: PropTypes.oneOf(['green', 'red']),

}

export default SubmitButton
