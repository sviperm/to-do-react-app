import React from 'react'
import PropTypes from 'prop-types'
import classes from './TextArea.module.css'

const TextArea = ({ placeholder = 'Commentary', onChangeHandler }) => {
    const onTextAreaChangeHandler = e => {
        e.target.style.height = '40px';
        e.target.style.height = `${e.target.scrollHeight}px`;
        onChangeHandler(e.target.value)
    }
    return (
        <textarea
            className={classes.TextArea}
            placeholder={placeholder}
            onChange={onTextAreaChangeHandler}
        />
    );
}

TextArea.propTypes = {
    placeholder: PropTypes.string,
}

export default TextArea
