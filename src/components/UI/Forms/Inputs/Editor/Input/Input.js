import React from 'react'
import PropTypes from 'prop-types'
import classes from './Input.module.css'

const EditorInput = ({ placeholder, }) => {
    return (<input
        className={classes.Input}
        type="text"
        placeholder={placeholder || 'Todo something'}
    />)
}

EditorInput.propTypes = {
    placeholder: PropTypes.string,
}

export default EditorInput
