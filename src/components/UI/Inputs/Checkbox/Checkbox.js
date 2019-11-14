import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import classes from './Checkbox.module.css'

const Checkbox = ({ checked = false, textOnFalse = 'Default', textOnTrue, onChangeHandler }) => {
    const ref = useRef(null)

    const toggleCheckbox = () => {
        ref.current.checked = !ref.current.checked
        onChangeHandler(ref.current.checked)
    }

    return (
        <div className={classes.Checkbox}>
            <input
                ref={ref}
                type="checkbox"
                defaultChecked={checked}
            />
            <label onClick={toggleCheckbox}>{textOnFalse}</label>
            <label onClick={toggleCheckbox}>{textOnTrue}</label>
        </div>
    )
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    textOnFalse: PropTypes.string,
    textOnTrue: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func,
}

export default Checkbox
