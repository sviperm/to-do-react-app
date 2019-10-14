import React from 'react';
import classes from './Sidebar.module.css'
import Navigation from './Navigation/Navigation';
import Categories from './Categories/Categories';
import PopUp from './PopUp/PopUp';

const Sidebar = props => {
    return (
        <aside className={classes.Sidebar}>
            {/* 3 dots button */}
            <Navigation />
            <Categories />
            <PopUp />
        </aside>
    );
};

export default Sidebar;
