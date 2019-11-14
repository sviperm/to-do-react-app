import React, { useState, useCallback } from 'react'

import Backdrop from '../../../components/UI/Backdrop/Backdrop'
import EditorModal from './EditorModal/EditorModal'
import EditorForm from './EditorForm/EditorForm'

const Editor = () => {
    const [show, setShow] = useState(true)
    const closeEditor = useCallback(() => {
        console.log('close')
        setShow(false)
    }, [])

    return (
        <>
            <Backdrop show={show} onCLickHandler={closeEditor} />
            <EditorModal show={show} onCloseClickHandler={closeEditor} >
                <EditorForm />
            </EditorModal>
        </>
    )
}

export default Editor
