import React from 'react'
import classes from './DateTime.module.css'
import Legend from '../../Legend/Legend'
import PropTypes from 'prop-types'

const DateTime = ({ name, legendOnDate, legendOnTime }) => {
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
            <input type="date" name={`${name}-date`} />
            <input type="time" name={`${name}-time`} />
        </div>
    )
}

DateTime.propTypes = {
    name: PropTypes.string.isRequired,
    legendOnDate: PropTypes.string,
    legendOnTime: PropTypes.string,
}

export default DateTime
