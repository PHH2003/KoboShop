import React, { Fragment, useEffect, useState } from 'react'
import { createCategory, deleteCategory, getAllCategory, updateCategory } from './service/category.service'
import TemplateTable from '../common/template-table/template-table.component'
import { Form, Input } from 'antd'

const CategoryAdmin = () => {
    const [dataCategory, setDataCategory] = useState([])
    const [colums, setColums] = useState([])
    const [reset, setReset] = useState<boolean>(true)
    useEffect(() => {
        getAllCategory().then((res) => {
            setDataCategory(res.data)
        })
    }, [reset])
    useEffect(() => {
        const columTemp: any = []
        if (dataCategory.length > 0) {
            Object?.keys(dataCategory[0]).map((itemKey) => {
                if (!['_id', '__v'].includes(itemKey)) {
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
    }, [dataCategory])
    const handleGetList = () => {
        setReset(!reset)
    }
    return (
        <div>
            <TemplateTable dataTable={dataCategory} columsTable={colums} deleteFunc={deleteCategory} changeFunc={updateCategory} handleGetList={handleGetList} createFunc={createCategory} formEdit={
                <Fragment>
                    <Form.Item
                        label='name'
                        name='name'
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Fragment>
            } />
        </div>
    )
}

export default CategoryAdmin