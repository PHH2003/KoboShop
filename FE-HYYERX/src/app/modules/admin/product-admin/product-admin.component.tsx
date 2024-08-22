import React, { Fragment, useEffect, useState } from 'react'
import { createProduct, getAllProduct, removeProduct, updateProduct } from './service/product.service'
import TemplateTable from '../common/template-table/template-table.component'
import axios from 'axios'
import { Form, Input, Select, Upload, UploadFile } from 'antd'
import { getAllCategory } from '../category-admin/service/category.service'

const ProductAdminComponent = () => {
  const [dataProduct, setDataProduct] = useState<any>([])
  const [reset, setReset] = useState<boolean>(true)
  const [column, setColumn] = useState([])
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [categorys, setCategorys] = useState([])

  const Option = Select
  //https://stackoverflow.com/questions/58128062/using-customrequest-in-ant-design-file-upload
  const uploadImage = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options
    const fmData = new FormData()
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event: any) => {
        onProgress({ percent: (event.loaded / event.total) * 100 })
      }
    }
    fmData.append('file', file)
    fmData.append('upload_preset', 'b45tqe77')
    fmData.append('cloud_name', 'dpfndtcya')
    fmData.append('folder', 'samples')
    try {
      const res = await axios.post(`https://api.cloudinary.com/v1_1/dpfndtcya/image/upload`, fmData, config)
      onSuccess(res.data.url)
      const customFileObj = {
        uid: file.uid,
        name: file.name,
        status: res.status,
        url: res.data.url,
        response: res.data.url
      }

      const updatedFiles: any[] = [...fileList, customFileObj]
      setFileList(updatedFiles)
    } catch (error) {
      onError({ error })
    }
  }
  useEffect(() => {
    getAllProduct().then((res) => {
      setDataProduct(res.data)
    })
    getAllCategory().then((res) => {
      setCategorys(res.data)
    })
  }, [reset])

  useEffect(() => {
    const columTemp: any = []
    const title = [
      'category',
      '',
      'Product',
      'newPrice',
      'Cost',
      'image',
      'Product details',
      'author',
      'Quantity',
      'Company',
      'Date of publication',
      'Size'
    ]
    if (dataProduct.length > 0) {
      Object?.keys(dataProduct[0]).map((itemKey, key = 0) => {
        if (!['_id', '__v', 'updatedAt', 'createdAt'].includes(itemKey)) {
          return columTemp.push({
            title: title[key++],
            dataIndex: itemKey,
            key: itemKey,
            align: 'center',
            render: (text: any, record: any, index: any) => {
              if (itemKey === 'images') {
                return (
                  <img className='m-auto'
                    src={dataProduct[index]?.images?.slice(0, 1).map((image: any) => image?.response || image?.url)}
                    alt='Product Image'
                    style={{ maxWidth: '60px'}}
                  />
                )
              }
              if (itemKey == 'categoryId') {
                return <div>{record.categoryId.name}</div>
              }
              return text
            }
          })
        }
      })
    }
    setColumn(columTemp)
  }, [dataProduct])
  const onRemove = (file: any) => {
    setFileList((prevFileList: any) => prevFileList?.filter((item: any) => item.uid !== file.uid))
  }
  const handleGetList = () => {
    setReset(!reset)
  }
  return (
    <div>
      <TemplateTable
        dataTable={dataProduct}
        columsTable={column}
        handleGetList={handleGetList}
        changeFunc={updateProduct}
        createFunc={createProduct}
        deleteFunc={removeProduct}
        dataPage={5}
        formEdit={
          <Fragment>
            <Form.Item label='name' name='name' rules={[{ required: true, message: 'Please input your name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label='newPrice'
              name='newPrice'
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label='cost' name='cost' rules={[{ required: true, message: 'Please input your name!' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label='Image'
              name='images'
              getValueFromEvent={(event: any) => event?.fileList}
              rules={[{ required: true, message: 'Please input your image!' }]}
              valuePropName={'fileList'}
            >
              <Upload customRequest={uploadImage} listType='picture-card' onRemove={onRemove}>
                {fileList.length < 2 && '+ Upload'}
              </Upload>
            </Form.Item>

            <Form.Item
              label='description'
              name='description'
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label='author' name='author' rules={[{ required: true, message: 'Please input your name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label='quantity'
              name='quantity'
              rules={[{ required: true, message: 'Please input your quantity!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='company'
              name='company'
              rules={[{ required: true, message: 'Please input your quantity!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='datePublish'
              name='datePublish'
              rules={[{ required: true, message: 'Please input your quantity!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label='size' name='size' rules={[{ required: true, message: 'Please input your quantity!' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label='Category'
              name='categoryId'
              getValueFromEvent={(event, select) => ({ name: select?.children, _id: select?.value })}
              getValueProps={(value) => ({ label: value?.name, value: value?._id })}
              rules={[{ required: true, message: 'Please input your categorys!' }]}
            >
              <Select placeholder='lựa chọn danh mục'>
                {categorys.map((item: any) => (
                  <Option value={item._id} key={item._id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Fragment>
        }
      />
    </div>
  )
}

export default ProductAdminComponent
