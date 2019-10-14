import React, { useState } from 'react';

const PopUp = ({ className, openCloseButton, children, onToogle }) => {
    const [isOpen, setIsOpen] = useState(false)

    const tooglePopUp = () => {
        setIsOpen(prevState => !prevState);
        onToogle && onToogle(isOpen);
    };

    return (
        <div className={className}>
            {{
                ...openCloseButton,
                props: {
                    ...openCloseButton.props,
                    onClick: tooglePopUp
                }
            }}
            {isOpen && children}
        </div>
    );
}

export default PopUp;