import React, { useState, useCallback, useEffect, useMemo } from 'react'
import SquareButton from '../../../components/UI/Buttons/SquareButton/SquareButton'
import TextInput from '../../../components/UI/Inputs/TextInput/TextInput'
import TextArea from '../../../components/UI/Inputs/TextArea/TextArea'
import Checkbox from '../../../components/UI/Inputs/Checkbox/Checkbox'
import DateTime from '../../../components/UI/Inputs/DateTime/DateTime'
import Legend from '../../../components/UI/Legend/Legend'
import image from '../../../media/images/editor.svg'
import classes from './Editor.module.css'

const Editor = () => {
    const [show, setShow] = useState(true)
    const [render, setRender] = useState(show)

    useEffect(() => {
        if (show) { setRender(true) }
    }, [show])

    const onAnimationEnd = useCallback(() => {
        if (!show) setRender(false)
    }, [show])

    const backdropClasses = useMemo(() => [
        classes.Backdrop,
        show ? classes.show : classes.hide
    ].join(' '), [show])
    const editorClasses = useMemo(() => [
        classes.Editor,
        show ? classes.show : classes.hide
    ].join(' '), [show])

    const closeEditor = useCallback(() => {
        setShow(false)
    }, [])

    return (
        render
            ? <>
                <div className={backdropClasses} onClick={closeEditor} />
                <div className={editorClasses} onAnimationEnd={onAnimationEnd}>
                    <div className={classes.CloseButton}>
                        <SquareButton color="red" icon="failed" bordered onClick={closeEditor} />
                    </div>
                    <div className={classes.EditorForm}>
                        <TextInput name="title" />
                        <div>
                            <Legend text="Importance" />
                            <Checkbox name="importance" textOnFalse="Important" />
                        </div>
                        <div>
                            <Legend text="Urgency" />
                            <Checkbox name="urgency" textOnFalse="Urgent" />
                        </div>
                        <DateTime name="begin" legendOnDate={'Begin date'} legendOnTime={'Begin time'} />
                        <DateTime name="end" legendOnDate={'End date'} legendOnTime={'End time'} />
                        <div>
                            <Legend text="Commentary" />
                            <div className={classes.Scrollbar}>
                                <TextArea name="commentary" />
                            </div>
                        </div>
                    </div>
                    <img src={image} alt="" />
                </div>
            </>
            : null
    )
}

export default Editor
