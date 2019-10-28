import React from 'react';
import classes from './Sidebar.module.css'
import Navigation from './Navigation/Navigation';
import Categories from './Categories/Categories';
import PopUp from './PopUp/PopUp';
import SettingsButton from './SettingsButton/SettingsButton'

const Sidebar = props => {
    return (
        <aside className={classes.Sidebar}>
            <SettingsButton />
            <div className={classes.Navigation}>
                <Navigation />
                <Categories />
            </div>
            <PopUp />
        </aside>
    );
};

export default Sidebar;
