import React, { Fragment, useEffect, useState } from 'react'
import { createProduct, getAllProduct, removeProduct } from './service/product.service'
import TemplateTable from '../common/template-table/template-table.component'
import axios from 'axios'
import { Form, Input, Upload } from 'antd'

const ProductAdminComponent = () => {
  const [dataProduct, setDataProduct] = useState<any>([])
  const [reset, setReset] = useState<boolean>(true)
  const [column, setColumn] = useState([])
  const [fileList, setFileList] = useState<any>([])
  //https://stackoverflow.com/questions/58128062/using-customrequest-in-ant-design-file-upload
  const uploadImage = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    const config = {
        headers: { "content-type": "multipart/form-data" },
        onUploadProgress: (event: any) => {
            onProgress({ percent: (event.loaded / event.total) * 100 });
        }
    }
    fmData.append("file", file);
    fmData.append("upload_preset", "b45tqe77");
    fmData.append("cloud_name", "dpfndtcya");
    fmData.append("folder", "samples");
    try {
        // tài liệu https://cloudinary.com/documentation/upload_images
        const response: any = axios.post(`https://api.cloudinary.com/v1_1/dpfndtcya/image/upload`, fmData, config)
        onSuccess(response.data.url)
        setFileList((prevFileList: any) => [
            ...prevFileList, 
            {
                uid: file.uid,
                name: file.name,
                status: response.status,
                url: response.data.url
            }
        ])
    } catch (error) {
        onError({error})
    }
}
  useEffect(() => {
    getAllProduct().then((res) =>{
      setDataProduct(res.data)
    })
  }, [reset])
  
  useEffect(() => {
    const columTemp: any = []
    if (dataProduct.length > 0) {
        Object?.keys(dataProduct[0]).map((itemKey) => {
            if (!['_id', '__v', 'updatedAt', 'createdAt'].includes(itemKey)) {
                return columTemp.push({
                    title: itemKey,
                    dataIndex: itemKey,
                    key: itemKey,
                    render: (text: any, record: any, index: any) => {
                        if (itemKey === 'images') {
                            return (
                                <img
                                    src={record.images}                                 
                                    style={{ maxWidth: '50px' }}
                                />
                            );
                        }
                        return text;
                    },
                })
            }
        }
        )
    }
    setColumn(columTemp)
}, [dataProduct])
const onRemove = (file:any) =>{
    setFileList((prevFileList:any)=>prevFileList.filter((item:any)=>item.uid !== file.uid))
}
const handleGetList = () =>{
    setReset(!reset)
}
  return (
    <div>
    <TemplateTable dataTable={dataProduct} columsTable={column} handleGetList={handleGetList} createFunc={createProduct} deleteFunc={removeProduct} dataPage={5} formEdit={
        <Fragment>
            <Form.Item
                label='name'
                name='name'
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label='newPrice'
                name='newPrice'
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='cost'
                name='cost'
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>



            <Form.Item
                label='Image'
                name="images"
                getValueFromEvent={(event: any) => event.fileList}
                rules={[{ required: true, message: 'Please input your image!' }]}
                valuePropName={'listFile'}
                initialValue={fileList}
            >
                <Upload
                    customRequest={uploadImage}
                    listType='picture-card'
                    onRemove={onRemove}
                >
                    {fileList.length < 1 && '+ Upload'}
                </Upload>
            </Form.Item>



            <Form.Item
                label='description'
                name='description'
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label='author'
                name='author'
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
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

            <Form.Item
                label='size'
                name='size'
                rules={[{ required: true, message: 'Please input your quantity!' }]}
            >
                <Input />
            </Form.Item>

        </Fragment>
    } />
</div>
  )
}

export default ProductAdminComponent