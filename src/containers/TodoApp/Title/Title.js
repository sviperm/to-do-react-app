import React from 'react';

import classes from './Title.module.css'

const Title = (props) => {
    return (
        <div className={classes.Title}>
            <div className={classes.category}>Personal</div>
            <div className={classes.task}>Music</div>
        </div>
    );
};

export default Title;