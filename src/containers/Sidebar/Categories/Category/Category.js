import React from 'react';
import SideBarItem from '../../../../components/Sidebar/SideBarItem/SideBarItem';

const Category = props => {
    return <SideBarItem title={props.title} rows={props.tasks} />;
};

export default Category;