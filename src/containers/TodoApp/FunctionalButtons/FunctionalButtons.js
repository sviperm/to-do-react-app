import React from 'react'
import SquareButton from '../../../components/UI/Buttons/SquareButton/SquareButton'
import classes from './FunctionalButtons.module.css'

const Filters = () => {
    return (
        <>
            <div className={classes.Backdrop}></div>
            <div className={classes.FunctionalButtons}>
                <SquareButton color={'green'} icon={'done'} />
                <SquareButton color={'red'} icon={'failed'} />
                <SquareButton color={'yellow'} icon={'next'} />
                <SquareButton color={'violet'} icon={'calendar'} />
                <SquareButton color={'turquoise'} icon={'tag'} />
                <SquareButton color={'orange'} icon={'archive'} />
            </div>
            <div className={classes.OpenEditorButton}>
                <SquareButton color={'blue'} icon={'add'} />
            </div>
        </>
    )
}

export default Filters
