import React from 'react';
import classes from './SideBarItem.module.css'
import Row from './Row/Row'

const SideGrid = props => {
    const rows = props.rows.map(({ id, icon, title }) => <Row key={id} icon={icon || null} text={title} />)
    const gridClasses = [classes.SideBarItem, props.additionalClasses];

    return (
        <ul className={gridClasses.join(' ')}>
            <Row title text={props.title} />
            {rows}
        </ul>
    );
};

export default SideGrid;