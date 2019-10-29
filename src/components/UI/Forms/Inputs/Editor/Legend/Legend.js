import React from 'react'
import PropTypes from 'prop-types'

const Legend = ({ value }) => {
    return <legend>{value}</legend>
}

Legend.propTypes = {
    value: PropTypes.string,
}

export default Legend
