import React, { useState, useEffect, useCallback } from 'react'
import produce from 'immer'
import classes from './EditorForm.module.css'

import TextInput from '../../../../components/UI/Inputs/TextInput/TextInput'
import Legend from '../../../../components/UI/Legend/Legend'
import Checkbox from '../../../../components/UI/Inputs/Checkbox/Checkbox'
import DateTime from '../../../../components/UI/Inputs/DateTime/DateTime'
import SubmitButton from '../../../../components/UI/Buttons/SumbitButton/SubmitButton'
import TextArea from '../../../../components/UI/Inputs/TextArea/TextArea'

const EditorForm = () => {
    const [form, setForm] = useState({
        todo: {
            value: null,
            type: 'string',
            isRequired: true,
            isValid: false,
        },
        importance: {
            value: false,
            type: 'boolean',
            isRequired: true,
            isValid: true,
        },
        urgency: {
            value: false,
            type: 'boolean',
            isRequired: true,
            isValid: true,
        },
        beginDate: {
            value: null,
            type: 'date',
            isRequired: false,
            isValid: true,
        },
        beginTime: {
            value: null,
            type: 'time',
            isRequired: false,
            isValid: true,
        },
        endDate: {
            value: null,
            type: 'date',
            isRequired: false,
            isValid: true,
        },
        endTime: {
            value: null,
            type: 'time',
            isRequired: false,
            isValid: true,
        },
        commentary: {
            value: null,
            type: 'string',
            isRequired: false,
            isValid: true,
        },
    })
    const [isFormValid, setFormValid] = useState(false)

    useEffect(() => {
        setFormValid(checkValidity(form))
    }, [form])

    // Looks like next function is mutating state...
    // Actually no, thanks to immer package
    const updateFormData = useCallback(field => value => {
        const checkType = (value, type) => typeof (value) === type
        const validateForm = (draft, field) => {
            if (checkType(draft[field].value, draft[field].type) || !draft[field].isRequired) {
                draft[field].isValid = true
            } else {
                draft[field].value === null
                    ? draft[field].isValid = false
                    : draft[field].isValid = true
            }
        }
        setForm(produce(draft => {
            const draftValue = checkType(value, 'string') ? value.trim() : value
            draft[field].value = draftValue === '' ? null : draftValue
            validateForm(draft, field)
        }))
    }, [])


    const checkValidity = form => {
        for (const key in form) {
            if (!form[key].isValid)
                return false;
        }
        return true;
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.table(form)
    }

    return (
        <form className={classes.EditorForm} onSubmit={submitHandler}>
            <TextInput onChangeHandler={updateFormData('todo')} />
            <div>
                <Legend text="Importance" />
                <Checkbox textOnTrue="Important" onChangeHandler={updateFormData('importance')} />
            </div>
            <div>
                <Legend text="Urgency" />
                <Checkbox textOnTrue="Urgent" onChangeHandler={updateFormData('urgency')} />
            </div>
            <DateTime
                legendOnDate="Begin date"
                oncDateChangeHandler={updateFormData('beginDate')}
                legendOnTime="Begin time"
                onTimeChangeHandler={updateFormData('beginTime')}
            />
            <DateTime
                legendOnDate="End date"
                oncDateChangeHandler={updateFormData('endDate')}
                legendOnTime="End time"
                onTimeChangeHandler={updateFormData('endTime')}
            />
            <div>
                <Legend text="Commentary" />
                <div className={classes.Scrollbar}>
                    <TextArea
                        placeholder="Type something"
                        onChangeHandler={updateFormData('commentary')}
                    />
                </div>
            </div>
            <SubmitButton isDisabled={!isFormValid} text="+ Add Todo" />
        </form>
    )
}

export default EditorForm
