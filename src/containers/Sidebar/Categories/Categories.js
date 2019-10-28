import React, { Fragment, useState, useEffect } from 'react';
import Category from './Category/Category';

const Categories = props => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        console.log('[Categories.js] setting categories');
        setCategories([
            {
                id: 1,
                title: 'personal',
                tasks: [
                    { id: 1, title: 'history' },
                    { id: 2, title: 'biology' },
                    { id: 3, title: 'music' },
                ],
            },
            {
                id: 2,
                title: 'personal',
                tasks: [
                    { id: 4, title: 'python' },
                    { id: 5, title: 'JavaScript' },
                ]
            },
            {
                id: 3,
                title: 'personal',
                tasks: [
                    { id: 1, title: 'history' },
                    { id: 2, title: 'biology' },
                    { id: 3, title: 'music' },
                ],
            },
            {
                id: 4,
                title: 'personal',
                tasks: [
                    { id: 4, title: 'python' },
                    { id: 5, title: 'JavaScript' },
                ]
            },
            {
                id: 5,
                title: 'personal',
                tasks: [
                    { id: 1, title: 'history' },
                    { id: 2, title: 'biology' },
                    { id: 3, title: 'music' },
                ],
            },
            {
                id: 6,
                title: 'personal',
                tasks: [
                    { id: 4, title: 'python' },
                    { id: 5, title: 'JavaScript' },
                ]
            },
        ]);
    }, []);

    const categoriesElemets = categories.map(category => <Category key={category.id} {...category} />)

    return (
        <Fragment>
            {categoriesElemets}
        </Fragment>
    );
}

export default Categories;
