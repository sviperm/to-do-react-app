import React, { useCallback } from 'react'
// import classes from './SettingsButton.module.css'
import ThreeDotsButton from '../../../components/UI/Buttons/ThreeDotsButton/ThreeDotsButton'

const SettingsButton = () => {
    const fun = useCallback(
        (string) => {
            console.log('test' + string)
        }, [],
    )
    return <ThreeDotsButton onClick={fun('test')} />;
}

export default SettingsButton
