import React, { Fragment, useEffect, useState } from 'react'
import TemplateTable from '../common/template-table/template-table.component';
import { changeUser, createUser, deleteUser, getAllUser } from './service/user.service';
import { Form, Input, Select } from 'antd';

const UserAdminComponent = () => {
  const [dataUser, setDataUser] = useState([])
  const [colums, setColums] = useState([])
  const [reset, setReset] = useState<boolean>(true)
  useEffect(() => {
    getAllUser().then((res) =>{
      setDataUser(res.data)
    })
  }, [reset])
  useEffect(()=>{
    const columTemp: any = []
    console.log(dataUser[0])
    if (dataUser.length > 0) {
        Object?.keys(dataUser[0]).map((itemKey) => {
            if (!['_id', 'updatedAt', 'createdAt', '__v'].includes(itemKey)) {
                return columTemp.push({
                    title: itemKey,
                    dataIndex: itemKey,
                    key: itemKey
                })
            }
        }
        )
    }
    setColums(columTemp)
  },[dataUser])
 
  const handelGetlist = () => {
    setReset(!reset)
}

  return (
    <div>
     <TemplateTable columsTable={colums} handleGetList={handelGetlist} dataTable={dataUser} dataPage={8} deleteFunc={deleteUser} createFunc={createUser} changeFunc={changeUser} formEdit={
                <Fragment>
                    <Form.Item
                        label='fullname'
                        name='fullname'
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Please input your username!' }]} >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='password'
                        name='password'
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label='Role' name='role' rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Select placeholder='Please select'>
                            <Select.Option value='ADMIN'>ADMIN</Select.Option>
                            <Select.Option value='USER'>USER</Select.Option>
                        </Select>
                    </Form.Item>
                </Fragment>
            } />
    </div>
  )
}

export default UserAdminComponent