import React from 'react'
import PropTypes from 'prop-types'
import classes from './Legend.module.css'

const Legend = ({ text }) => <legend className={classes.Legend}>{text.toLowerCase()}</legend>;

Legend.propTypes = {
    text: PropTypes.string,
}

export default Legend
