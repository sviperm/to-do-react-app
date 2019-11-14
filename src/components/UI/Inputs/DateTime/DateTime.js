import React from 'react'
import classes from './DateTime.module.css'
import Legend from '../../Legend/Legend'
import PropTypes from 'prop-types'

const DateTime = ({ legendOnDate, legendOnTime, oncDateChangeHandler, onTimeChangeHandler }) => {
    return (
        <div className={classes.DateTime}>
            {legendOnDate
                ? <Legend text={legendOnDate} />
                : legendOnTime
                    ? <div />
                    : null
            }
            {legendOnTime
                ? <Legend text={legendOnTime} />
                : legendOnDate
                    ? <div />
                    : null
            }
            <input type="date" onChange={(e) => oncDateChangeHandler(e.target.value)} />
            <input type="time" onChange={(e) => onTimeChangeHandler(e.target.value)} />
        </div>
    )
}

DateTime.propTypes = {
    legendOnDate: PropTypes.string,
    legendOnTime: PropTypes.string,
    oncDateChangeHandle: PropTypes.func,
    onTimeChangeHandler: PropTypes.func,
}

export default DateTime
