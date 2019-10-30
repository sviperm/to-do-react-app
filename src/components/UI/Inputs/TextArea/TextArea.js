import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import classes from './TextArea.module.css'

const TextArea = ({ name, placeholder = 'Commentary', }) => {

    const autoHeightHandler = useCallback(
        (e) => {
            e.target.style.height = '40px';
            e.target.style.height = `${e.target.scrollHeight}px`;
            console.log(e.target.value)
        }, [],
    )
    return (
        <textarea
            name={name}
            className={classes.TextArea}
            placeholder={placeholder}
            onChange={autoHeightHandler}
        />
    );
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
}

export default TextArea
