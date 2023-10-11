import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Button, Form, Input, Popconfirm, Space, Table,  message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import TemplateModal from '../template-modal/teamplate-modal.component';
import LayoutLoading from '~/app/components/stack/layout-loading/layout-loading.component';
import { SearchOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

interface ITemplateTableProp {
    dataTable?: any[]
    columsTable?: any
    createFunc?: any
    deleteFunc?: any
    changeFunc?: any
    searchFunc?: any
    dataPage?: any
    formEdit?: ReactNode
}


const TemplateTable: FC<ITemplateTableProp>= ({dataTable, createFunc, deleteFunc, changeFunc, searchFunc, columsTable, formEdit, dataPage}) => {
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [triggerLoadding, setTriggerLoadding] =useState(false)
    const [type, setType] = useState('CREATE')
    const [defaultValue, setDefaultvalue] = useState<any>()
    const [form] = Form.useForm()

    const confirmDelete = (ItemId: any) => {
        setTriggerLoadding(true)
        deleteFunc(ItemId).then((res: any)=>{
            if(res){
                setTimeout(()=> {
                    setTriggerLoadding(false)
                }, 1000)
            } 
        },(err: any) =>{
            setTimeout(()=> {
                setTriggerLoadding(false)
            }, 1000)      
        })
        message.success('Click on Yes');
    };
    const cancel = (e: any) => {
        message.error('Click on No');
    };
    const handleOk = () => {
        setIsModelOpen(false)
        setTriggerLoadding(true)
        if(type=='CREATE'){
            form.validateFields().then((value)=>{
                form.resetFields()
                createFunc(value).then((res:any)=>{
                    if(res){
                        setTimeout(()=> {
                            setTriggerLoadding(false)
                        }, 1000)
                    }
                }, (err: any)=>{
                    setTimeout(() => {
                        setTriggerLoadding(false)
                    }, 1000)
                })
            })
            
        }
        if(type=='CHANGE'){
            form.validateFields().then((value)=> {
                form.resetFields()
                changeFunc(  defaultValue._id, value).then((res:any)=>{
                if(res){
                    setTimeout(()=> {
                        setTriggerLoadding(false)
                    }, 1000)
                }
            },(err:any)=>{
                setTimeout(()=> {
                    setTriggerLoadding(false)
                }, 1000)
            })
            })
            
        }
    }

    const handleSearchItem = () => {
        setTriggerLoadding(true)
        searchFunc(type).then((res:any)=>{
            if(res){
                setTimeout(()=>{
                    setTriggerLoadding(false)
                },1000)
            }
        }, (err:any)=>{
            setTimeout(() => {
                setTriggerLoadding(false)
            }, 1000)
        })
    }

    const handleCancel = () => {
        setIsModelOpen(false)
        setDefaultvalue(null)
        form.resetFields()
    }
    const showModel = (typeAction: any, recordTable?:any) => {
        setIsModelOpen(true)
        setType(typeAction)
        if(typeAction === "CHANGE"){
            setDefaultvalue(recordTable)
        }else{
            setDefaultvalue(null)
        }
    }
    const columns: ColumnsType<DataType> = [
        ...columsTable,
        {
            title: 'Action',
            key: 'action',
            render: (_, record: any) => (
                <Space size="middle">
                    <Button type="primary" onClick={()=>showModel('CHANGE', record)} >
                        Edit
                    </Button>
                    <Popconfirm
                        className='m-auto'
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={()=>confirmDelete(record._id)}
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
   
    return (
        <>
       <LayoutLoading condition={triggerLoadding}>
         <div className=''>
            <div className='flex pb-4 justify-between'>
                <Button type="primary" onClick={()=>showModel('CREATE')}>
                    Create
                </Button>
                <div>
                    <Input placeholder='search item here' className='w-[350px]' prefix={<SearchOutlined />}/>
                    <Button type='primary' className='ml-3'  onClick={handleSearchItem}>Search</Button>
                </div>
            </div>
            <div className='overflow-auto'>
                <Table columns={columns} dataSource={dataTable} pagination={{ pageSize: dataPage }} />
            </div>
            <div>
            <TemplateModal isModelOpen={isModelOpen} handleOk={handleOk} handleCancel={handleCancel} >
                        <Form form={form} layout='vertical' name='form_in_modal' initialValues={defaultValue || {}}>
                            {formEdit}
                        </Form>
                    </TemplateModal>
            </div>
        </div>

       </LayoutLoading>
       </>
    )

}

export default TemplateTable;