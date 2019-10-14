import React from 'react';

// import Backdrop from '../../../components/UI/BackDrop/BackDrop';
import PopUpUI from '../../../components/UI/PopUp/PopUp';
import OpenCloseButton from '../../../components/UI/Buttons/CircleButton/OpenCloseButton/OpenCloseButton';
import ButtonWithLabel from '../../../components/UI/Buttons/CircleButton/ButtonWithLabel/ButtonWithLabel';

import classes from './PopUp.module.css';

const PopUp = props => {
    const buttons = [
        { key: 1, label: 'Task', onClick: () => { console.log('Add Task') } },
        { key: 2, label: 'Category', onClick: () => { console.log('Add Category') } },
    ].map(button => <ButtonWithLabel {...button} order={button.key} />);

    return (
        <React.Fragment>
            <PopUpUI
                className={classes.PopUp}
                openCloseButton={<OpenCloseButton />}
            >
                {buttons}
            </PopUpUI>
        </React.Fragment>
    );
}

export default PopUp;