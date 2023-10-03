import React, { FC, useState } from 'react';
import { Button, Modal } from 'antd';

interface ITemplateModel {
    isModelOpen: boolean,
    handleOk(): void
    handleCancel(): void
}

const TemplateModal: FC<ITemplateModel> = ({isModelOpen,handleOk,handleCancel}) => {
    

    // const showModal = () => {
    //     setIsModalOpen(true);
    // };

    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };

    // const handleCancel = () => {
    //     setIsModalOpen(false);
    // };

    return (
        <>
            <Modal title="Basic Modal" open={isModelOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export default TemplateModal;