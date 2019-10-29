import React from 'react';
import Navigation from './Navigation/Navigation';
import Categories from './Categories/Categories';
import PopUp from './PopUp/PopUp';
import SettingsButton from './SettingsButton/SettingsButton'
import Blur from '../../components/Sidebar/Blur/Blur'
import classes from './Sidebar.module.css'

const Sidebar = props => {
    return (
        <aside className={classes.Sidebar}>
            <Blur position={'top'} />
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
