import React from 'react';
import CircleButton from '../CircleButton';

const OpenCloseButton = ({ isActive, onClick }) => {
    return (
        <CircleButton background="blue" icon="cross" animationOnActive="turn" isActive={isActive} onClick={onClick} />
    );
};

export default OpenCloseButton;