import React, { useState, useCallback } from 'react'
import { useDidUpdateEffect, useAnimationOnUpdate } from '../../hooks/customHooks'
import LabelList from '../TodoListItem/LabelList/LabelList'
import TodoCheckbox from './TodoCheckbox/TodoCheckbox'
import ThreeDotsButton from '../UI/Buttons/ThreeDotsButton/ThreeDotsButton'

import classes from './TodoListItem.module.css';

const TodoListItem = ({ id, isChecked, text, labels }) => {
    const [isCheckedState, setCheckedState] = useState(isChecked);
    const [textClasses, setTextClasses] = useState([]);
    // const scrollRef = useRef(null)

    useAnimationOnUpdate(
        setTextClasses,
        [classes.text, classes.animate, classes.lineThrough],
        isCheckedState,
        [isCheckedState]
    );

    useDidUpdateEffect(() => {
        console.log(`Todo №${id} ${isCheckedState ? 'checked' : 'unchecked'}`)
    }, [isCheckedState, id])

    const onCheckboxClickHandler = useCallback(
        () => {
            setCheckedState(prevState => !prevState)
        }, [],
    )

    const onSettingsButtonHandler = useCallback(
        () => {
            console.log(`Open setting ${id}`)
            // scrollRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' })
        }, [id],
    )

    return (
        <li className={classes.TodoListItem}>
            <div className={classes.container}>
                <TodoCheckbox isChecked={isCheckedState} onClick={onCheckboxClickHandler} />
                <span className={textClasses.join(' ')}>{text}</span>
                <LabelList labels={labels} />
            </div>
            <ThreeDotsButton onClick={onSettingsButtonHandler} />
        </li>
    )
}

export default TodoListItem;
