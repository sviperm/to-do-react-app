import React, { useState } from 'react';

import Blur from '../../../components/Sidebar/Blur/Blur';
import OpenCloseButton from '../../../components/UI/Buttons/CircleButton/OpenCloseButton/OpenCloseButton';
import ButtonWithLabel from '../../../components/UI/Buttons/CircleButton/ButtonWithLabel/ButtonWithLabel';

import classes from './PopUp.module.css';

const PopUp = () => {
    const [isOpen, setOpenState] = useState(false)

    const buttons = [
        {
            id: 1,
            label: 'Task',
            onClick: () => {
                setOpenState(false)
                console.log('Add Task');
            }
        },
        {
            id: 2,
            label: 'Category',
            onClick: () => {
                setOpenState(false)
                console.log('Add Category');
            }
        },
    ].map(button => (
        <ButtonWithLabel
            {...button}
            key={button.id}
            show={isOpen}
        />
    ));

    return (
        <>
            <Blur position={'bottom'} isOpen={isOpen} onClick={() => setOpenState(false)} />
            <div className={classes.PopUp}>
                <OpenCloseButton isActive={isOpen} onClick={() => setOpenState(prevState => !prevState)} />
                {buttons}
            </div>
        </>
    );
}

export default PopUp;