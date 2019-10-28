import React, { useMemo } from 'react'
import classes from './ThreeDotsButton.module.css'

const ThreeDotsButton = ({ additionalClasses, onClick, children }) => {
    const style = useMemo(
        () => (
            additionalClasses ?
                [classes.ThreeDotsButton].concat(additionalClasses) :
                [classes.ThreeDotsButton]
        ), [additionalClasses])
    return (
        <div className={style.join(' ')} onClick={onClick}>
            {children}
        </div>
    )
}

export default ThreeDotsButton
