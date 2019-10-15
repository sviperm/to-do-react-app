import React from 'react'
import classes from './TodoCheckbox.module.css'

const TodoCheckbox = ({ isChecked, onClick }) => {
    return (
        <div className={classes.TodoCheckbox}>
            <label className={isChecked ? classes.checked : null} onClick={onClick}>
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M 9, 9 m -8, 0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
            </label>
        </div>
    )
}

export default TodoCheckbox
