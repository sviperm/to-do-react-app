import React, { useState } from 'react'
import { useDidUpdateEffect } from '../../hooks/customHooks'

import LabelList from '../TodoListItem/LabelList/LabelList'
import TodoCheckbox from './TodoCheckbox/TodoCheckbox'

import classes from './TodoListItem.module.css';

const TodoListItem = ({ id, isChecked, text, labels }) => {
    const [checkedState, setCheckedState] = useState(isChecked);

    const onCheckboxClickhandler = () => {
        setCheckedState(prevState => !prevState);
    }

    useDidUpdateEffect(() => {
        console.log(`Todo №${id} ${checkedState ? 'checked' : 'unchecked'}`)
    }, [checkedState, id])

    return (
        <li className={classes.TodoListItem}>
            <TodoCheckbox isChecked={checkedState} onClick={onCheckboxClickhandler} />
            <span className={classes.text}>{text}</span>
            <LabelList labels={labels} />
        </li>
    )
}

export default TodoListItem;

