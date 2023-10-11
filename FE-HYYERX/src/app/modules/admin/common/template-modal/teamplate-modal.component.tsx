import React, { FC, useState } from 'react';
import { Button, Modal } from 'antd';

interface ITemplateModel {
    isModelOpen: boolean,
    handleOk(): void
    handleCancel(): void
    children?: any
}

const TemplateModal: FC<ITemplateModel> = ({isModelOpen,handleOk,handleCancel,children}) => {
    

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
                {children}
            </Modal>
        </>
    );
};

export default TemplateModal;