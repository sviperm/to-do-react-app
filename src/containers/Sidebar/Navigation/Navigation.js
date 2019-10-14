import React from 'react';
import SideBarItem from '../../../components/Sidebar/SideBarItem/SideBarItem';
import classes from './Navigation.module.css';

const Navigation = props => {
    const rows = [
        { id: 'today', icon: 'today', title: 'today' },
        { id: 'upcoming', icon: 'upcoming', title: 'upcoming' },
        { id: 'completed', icon: 'completed', title: 'completed' },
        { id: 'archive', icon: 'archive', title: 'archive' },
    ];

    return <SideBarItem additionalClasses={classes.Navigation} title="All" rows={rows} />;
}

export default Navigation;