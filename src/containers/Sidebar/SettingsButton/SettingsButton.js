import React, { useCallback } from 'react'
import classes from './SettingsButton.module.css'
import ThreeDotsButton from '../../../components/UI/Buttons/ThreeDotsButton/ThreeDotsButton'

const SettingsButton = () => {
    const fun = useCallback(
        () => {
            console.log('[SettingsButton.js] Click')
        }, [],
    )
    return <ThreeDotsButton additionalClasses={classes.SettingsButton} onClick={fun} />;
}

export default SettingsButton
