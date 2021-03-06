import React, { useMemo } from 'react'

import Badge from '../../UI/Badge/Badge'

import classes from './LabelList.module.css'

const LabelList = ({ labels }) => {
    const labelList = labels.map(({ text, color }, i) => (
        <Badge key={i} text={text} color={color} />
    ));
    const style = useMemo(() => ({
        gridTemplateColumns: `repeat(${labelList.length}, auto)`
    }), [labelList.length]);

    return (
        <div className={classes.LabelList} style={style}>
            {labelList}
        </div>
    )
}

export default LabelList
