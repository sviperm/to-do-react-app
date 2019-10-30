import React from 'react'
import PropTypes from 'prop-types'
import classes from './TextInput.module.css'

const TextInput = ({ name, placeholder = 'Todo something', }) => {
    return (
        <input
            name={name}
            className={classes.TextInput}
            type="text"
            placeholder={placeholder}
            autoComplete="off"
        />
    );
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
}

export default TextInput
