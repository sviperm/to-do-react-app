import React from 'react'
import classes from './ThreeDotsButton.module.css'

const ThreeDotsButton = ({ btnClasses, onClick, children }) => {
    const style = btnClasses ? [classes.ThreeDotsButton, btnClasses] : [classes.ThreeDotsButton]
    return (
        <button className={style.join(' ')} onClick={onClick}>
            {children}
        </button>
    )
}

export default ThreeDotsButton
