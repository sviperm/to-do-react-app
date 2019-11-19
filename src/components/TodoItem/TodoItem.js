import React, { useState, useCallback } from 'react'
import { useDidUpdateEffect, useAnimationOnUpdate } from '../../hooks/customHooks'
import LabelList from './LabelList/LabelList'
import TodoCheckbox from './TodoCheckbox/TodoCheckbox'
import ThreeDotsButton from '../UI/Buttons/ThreeDotsButton/ThreeDotsButton'

import classes from './TodoItem.module.css';

const TodoListItem = ({ id, isChecked, text, labels }) => {
    const [isCheckedState, setCheckedState] = useState(isChecked);
    const [textClasses, setTextClasses] = useState([]);

    useAnimationOnUpdate(
        setTextClasses,
        [classes.text, classes.animate, classes.lineThrough],
        isCheckedState,
        [isCheckedState]
    );

    useDidUpdateEffect(() => {
        console.log(`Todo №${id} ${isCheckedState ? 'checked' : 'unchecked'}`)
    }, [isCheckedState, id])

    const toggleCheckbox = useCallback(() => setCheckedState(prevState => !prevState), [])

    const onSettingsButtonHandler = useCallback(
        () => {
            console.log(`Open setting ${id}`)
        }, [id],
    )

    return (
        <>
            <div className={classes.container}>
                <TodoCheckbox isChecked={isCheckedState} onClick={toggleCheckbox} />
                <span className={textClasses.join(' ')}>{text}</span>
                <LabelList labels={labels} />
            </div>
            <ThreeDotsButton onClick={onSettingsButtonHandler} />
        </>
    )
}

export default TodoListItem;
