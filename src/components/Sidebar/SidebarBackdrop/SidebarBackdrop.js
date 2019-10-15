import React from 'react';

import Backdrop from '../../UI/BackDrop/BackDrop'

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
