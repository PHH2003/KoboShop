import React, { FC, useEffect, useState } from 'react';
import { Button, Popconfirm, Space, Table, Tag, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import TemplateModal from '../template-modal/teamplate-modal.component';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

interface ITemplateTableProp {
    dataTable: any[],
    createfunc?: any
}


const TemplateTable: FC<ITemplateTableProp>= ({dataTable, createfunc}) => {
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [type, setType] = useState('CREATE')
    const [columTable, setColumTable] = useState<any[]>([])
    const confirm = (e: any) => {
        message.success('Click on Yes');
    };
    const cancel = (e: any) => {
        message.error('Click on No');
    };
    const handleOk = () => {
        setIsModelOpen(false)
    }
    const handleCancel = () => {
        setIsModelOpen(false)
    }
    const showModel = (typeAction: any) => {
        setIsModelOpen(true)
        setType(typeAction)
    }
    const columns: ColumnsType<DataType> = [

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={()=>showModel('CREATE')} >
                        edit
                    </Button>
                    <Popconfirm
                        className='m-auto'
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={confirm}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    useEffect(() => {
        const columTemp: any[] = []
        if(dataTable.length > 0){
            Object?.keys(dataTable[0]).map((itemKey) => 
                columTemp.push({
                    title: itemKey,
                    dataIndex: itemKey,
                    key: itemKey
                })
            )
        }
        const merArray = [...columTemp, ...columns]
        setColumTable(merArray)
    }, [dataTable])

    return (
        <div className=''>
            <div className='pb-4'>
                <Button type="primary" onClick={showModel}>
                    Create user
                </Button>
            </div>
            <div className='overflow-auto'>
                <Table columns={columTable} dataSource={dataTable} />
            </div>
            <div>
                <TemplateModal isModelOpen={isModelOpen} handleOk={handleOk} handleCancel={handleCancel} />
            </div>
        </div>

    )

}

export default TemplateTable;