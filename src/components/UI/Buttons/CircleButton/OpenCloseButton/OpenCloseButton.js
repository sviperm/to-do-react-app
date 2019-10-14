import React from 'react';
import CircleButton from '../CircleButton';

const OpenCloseButton = ({ onClick }) => {
    return (
        <CircleButton background="blue" icon="cross" becomeActiveOnClick animationOnClick="turn" onClick={onClick} />
    );
};

export default OpenCloseButton;