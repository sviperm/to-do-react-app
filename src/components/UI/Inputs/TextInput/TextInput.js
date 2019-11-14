import React from 'react'
import PropTypes from 'prop-types'
import classes from './TextInput.module.css'

const TextInput = ({ placeholder = 'Todo something', onChangeHandler }) => {
    return (
        <input
            className={classes.TextInput}
            type="text"
            placeholder={placeholder}
            autoComplete="off"
            onChange={(e) => onChangeHandler(e.target.value)}
        />
    );
}

TextInput.propTypes = {
    placeholder: PropTypes.string,
    onChangeHandler: PropTypes.func.isRequired,
}

export default TextInput
