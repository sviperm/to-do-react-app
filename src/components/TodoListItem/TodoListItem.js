import React, { useState } from 'react'
import { useDidUpdateEffect, useAnimationOnUpdate } from '../../hooks/customHooks'

import LabelList from '../TodoListItem/LabelList/LabelList'
import TodoCheckbox from './TodoCheckbox/TodoCheckbox'

import classes from './TodoListItem.module.css';

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

    const onCheckboxClickhandler = () => {
        setCheckedState(prevState => !prevState);
    }

    return (
        <li className={classes.TodoListItem}>
            <TodoCheckbox isChecked={isCheckedState} onClick={onCheckboxClickhandler} />
            <span className={textClasses.join(' ')}>{text}</span>
            <LabelList labels={labels} />
        </li>
    )
}

export default TodoListItem;
