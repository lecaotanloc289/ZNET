import { Modal } from 'antd';
import React, { useState } from 'react';

const ShowFollowers = ({ open, onClose }) => {
    const handleClose = () => {
        onClose()
    }
    return (
        <>
            <Modal title="Followers" open={open} onOk={handleClose}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default ShowFollowers;