import React, { useState, useCallback, useEffect, useMemo } from 'react'
import SquareButton from '../../../components/UI/Buttons/SquareButton/SquareButton'
import EditorInput from '../../../components/UI/Forms/Inputs/Editor/Input/Input'
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
                    <EditorInput />
                </div>
            </>
            : null
    )
}

export default Editor
