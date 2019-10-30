import React, { useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import classes from './Checkbox.module.css'

const Checkbox = ({ checked = false, name, textOnTrue = 'Default', textOnFalse }) => {
    const ref = useRef(null)

    const toggleCheckbox = useCallback(() => {
        ref.current.checked = !ref.current.checked
    }, [ref])

    return (
        <div className={classes.Checkbox}>
            <input ref={ref} type="checkbox" defaultChecked={checked} name={name} />
            <label onClick={toggleCheckbox}>{textOnTrue}</label>
            <label onClick={toggleCheckbox}>{textOnFalse}</label>
        </div>
    )
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    textOnTrue: PropTypes.string,
    textOnFalse: PropTypes.string.isRequired,
}

export default Checkbox
