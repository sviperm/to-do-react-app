import React, { useMemo } from 'react';

const Backdrop = ({ className, activeClass, onClick, isOpen }) => {
    const classes = useMemo(() => ([].concat(
        className,
        isOpen ? activeClass : null
    )), [isOpen, className, activeClass]);

    return <div className={classes.join(' ')} onClick={onClick} />;
};

export default Backdrop;