import React from 'react';
import {
    Dialog as DialogWindow,
    DialogContent,
    DialogTitle
} from '@material-ui/core';

const Dialog = ({
    isOpen,
    handleClose,
    title,
    children
}) => {
    return (
        <DialogWindow
            fullWidth
            maxWidth='xs'
            open={isOpen}
            onClose={handleClose}
            aria-labelledby='max-width-dialog-title'
        >
            <DialogTitle id='max-width-dialog-title'>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </DialogWindow>
    );
}

export default Dialog;
