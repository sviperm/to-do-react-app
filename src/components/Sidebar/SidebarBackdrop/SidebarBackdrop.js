import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop'

import classes from './SidebarBackdrop.module.css'

const SidebarBackdrop = ({ isOpen, onClick }) => (
    <Backdrop
        className={classes.SidebarBackdrop}
        activeClass={classes.active}
        isOpen={isOpen}
        onClick={onClick}
    />
);

export default SidebarBackdrop;
