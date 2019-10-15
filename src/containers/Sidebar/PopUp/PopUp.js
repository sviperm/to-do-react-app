import React, { Fragment, useState } from 'react';

import Backdrop from '../../../components/Sidebar/SidebarBackdrop/SidebarBackdrop';
import OpenCloseButton from '../../../components/UI/Buttons/CircleButton/OpenCloseButton/OpenCloseButton';
import ButtonWithLabel from '../../../components/UI/Buttons/CircleButton/ButtonWithLabel/ButtonWithLabel';

import classes from './PopUp.module.css';

const PopUp = props => {
    const [isOpen, setOpenState] = useState(false)

    const toogleOpenState = () => {
        setOpenState(prevState => !prevState)
    };

    const buttons = [
        {
            key: 1, label: 'Task', onClick: () => {
                setOpenState(false);
                console.log('Add Task');
            }
        },
        {
            key: 2, label: 'Category', onClick: () => {
                setOpenState(false);
                console.log('Add Category');
            }
        },
    ].map(button => <ButtonWithLabel {...button} order={button.key} />);

    return (
        <Fragment>
            <Backdrop isOpen={isOpen} onClick={() => { setOpenState(false) }} />
            <div className={classes.PopUp}>
                <OpenCloseButton isActive={isOpen} onClick={toogleOpenState} />
                {isOpen && buttons}
            </div>
        </Fragment>
    );
}

export default PopUp;