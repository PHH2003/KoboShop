import React, { Fragment, useEffect, useState } from 'react'
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  searchCategory,
  updateCategory
} from './service/category.service'
import TemplateTable from '../common/template-table/template-table.component'
import { Form, Input } from 'antd'
import dayjs from 'dayjs'

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
      Object?.keys(dataCategory[0]).forEach((itemKey) => {
        if (!['_id', '__v'].includes(itemKey)) {
          columTemp.push({
            title: itemKey,
            dataIndex: itemKey,
            key: itemKey,
            align: 'center',
            render: (text: any, record: any) => {
              if (itemKey === 'createdAt') {
                return <div>{dayjs(record.createdAt).format('HH:mm:ss - DD/MM/YYYY')}</div>
              }
              if(itemKey === "updatedAt"){
                return <div>{dayjs(record.updatedAt).format('HH:mm:ss - DD/MM/YYYY')}</div>
              }
              return text
            }
          })
        }
      })
    }
    setColums(columTemp)
  }, [dataCategory])

  const handleGetList = () => {
    setReset(!reset)
  }

  return (
    <div>
      <TemplateTable
        dataTable={dataCategory}
        setNewData={setDataCategory}
        searchFunc={searchCategory}
        columsTable={colums}
        component='category'
        deleteFunc={deleteCategory}
        changeFunc={updateCategory}
        handleGetList={handleGetList}
        createFunc={createCategory}
        formEdit={
          <Fragment>
            <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Please input your name!' }]}>
              <Input />
            </Form.Item>
          </Fragment>
        }
      />
    </div>
  )
}

export default CategoryAdmin
