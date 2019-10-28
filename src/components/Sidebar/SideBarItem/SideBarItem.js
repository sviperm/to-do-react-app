import React, { useMemo } from 'react';
import classes from './SideBarItem.module.css'
import Row from './Row/Row'

const SideGrid = ({ rows, additionalClasses, title }) => {
    const gridRows = rows.map(({ id, icon, title }) => <Row key={id} icon={icon || null} text={title} />)
    const gridClasses = useMemo(() => ([
        classes.SideBarItem, additionalClasses
    ]), [additionalClasses]);

    return (
        <ul className={gridClasses.join(' ')}>
            <Row title text={title} />
            {gridRows}
        </ul>
    );
};

export default SideGrid;