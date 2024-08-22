import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Button, Form, Input, Popconfirm, Space, Table, message } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import TemplateModal from '../template-modal/teamplate-modal.component'
import LayoutLoading from '~/app/components/stack/layout-loading/layout-loading.component'
import { SearchOutlined } from '@ant-design/icons'
import toast from 'react-hot-toast'

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
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
  handleGetList?: any
  setNewData?: any
  component?: string
}

const TemplateTable: FC<ITemplateTableProp> = ({
  dataTable,
  createFunc,
  deleteFunc,
  changeFunc,
  searchFunc,
  columsTable,
  formEdit,
  dataPage,
  handleGetList,
  setNewData,
  component
}) => {
  const [isModelOpen, setIsModelOpen] = useState(false)
  const [triggerLoadding, setTriggerLoadding] = useState(false)
  const [type, setType] = useState('CREATE')
  const [defaultValue, setDefaultvalue] = useState<any>(null)
  const [form] = Form.useForm()
  const [keyword, setKeyword] = useState('')
  const confirmDelete = (ItemId: any) => {
    setTriggerLoadding(true)
    if (component === 'category') {
      changeFunc({ status: false }, ItemId?._id).then((res: any) => {
        if (res) {
          setIsModelOpen(false)
          setTriggerLoadding(true)
          setTimeout(() => {
            setTriggerLoadding(false)
            message.success('xóa thành công')
            handleGetList()
          }, 1000)
        }
      })
    } else {
      if (component === 'products' || component === 'users' || component === 'voucher') {
        changeFunc({ ...ItemId, status: false }, ItemId?._id).then(
          (res: any) => {
            if (res) {
              setTimeout(() => {
                setTriggerLoadding(false)
                message.success('Xóa thành công')
                handleGetList()
              }, 1000)
            }
          },
          (err: any) => {
            setTimeout(() => {
              setTriggerLoadding(false)
              message.error(err.response.data)
            }, 1000)
          }
        )
      } else {
        deleteFunc(ItemId).then(
          (res: any) => {
            if (res) {
              setTimeout(() => {
                setTriggerLoadding(false)
                toast.success('Deleted successfully')
                handleGetList()
              }, 1000)
            }
          },
          (err: any) => {
            setTimeout(() => {
              setTriggerLoadding(false)
              toast.error(err?.response?.data)
            }, 1000)
          }
        )
      }
    }
  }
  const cancel = (e: any) => {
    message.error('Click on No')
  }
  const handleOk = () => {
    if (form.getFieldValue('images')) {
      const dataList = [...form.getFieldValue('images')].map((itemImg: any) => ({
        uid: itemImg.uid,
        name: itemImg.name,
        status: itemImg.status,
        url: itemImg.url || itemImg.response,
        response: itemImg.response || itemImg.url
      }))

      form.setFieldsValue({
        images: dataList
      })
    }
    if (type == 'CREATE') {
      form.validateFields().then((value) => {
        form.resetFields()
        createFunc(value).then(
          (res: any) => {
            if (res) {
              setIsModelOpen(false)
              setTriggerLoadding(true)
              setTimeout(() => {
                setTriggerLoadding(false)
                toast.success('Added successfully')
                handleGetList()
              }, 1000)
            }
          },
          (err: any) => {
            setTimeout(() => {
              setTriggerLoadding(false)
              toast.error('add failure')
            }, 1000)
          }
        )
        form.resetFields()
      })
    }
    if (type === 'CHANGE') {
      form
        .validateFields()
        .then((values: any) => {
          // form.resetFields()
          changeFunc(defaultValue._id, values).then(
            (res: any) => {
              if (res) {
                setIsModelOpen(false)
                setTriggerLoadding(true)
                setTimeout(() => {
                  setTriggerLoadding(false)
                  toast.success('sửa thành công')
                  handleGetList()
                }, 1000)
              }
            },
            (err: any) => {
              setTimeout(() => {
                setTriggerLoadding(false)
                message.error('sửa thất bại ')
              }, 1000)
            }
          )
        })
    }
  }

  const handleSearchData = (event: any) => {
    setKeyword(event.target.value)
  }

  const handleSearchItem = () => {
    setTriggerLoadding(true)
    searchFunc(keyword).then(
      (res: any) => {
        if (res) {
          setTimeout(() => {
            setTriggerLoadding(false)
            setNewData(res.data)
          }, 1000)
        }
      },
      (err: any) => {
        setTimeout(() => {
          setTriggerLoadding(false)
          toast.error(err?.response?.data)
        }, 1000)
      }
    )
  }

  const handleCancel = () => {
    setIsModelOpen(false)
  }
  const showModel = (typeAction: any, recordTable?: any) => {
    setIsModelOpen(true)
    setType(typeAction)
    if (typeAction === 'CHANGE') {
      setDefaultvalue(recordTable)
      form.setFieldsValue(recordTable)
    } else {
      form.resetFields()
    }
  }
  const columns: ColumnsType<DataType> = [
    ...columsTable,
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (_, record: any) => (
        <Space size='middle'>
          <Button type='primary' onClick={() => showModel('CHANGE', record)}>
            Edit
          </Button>
          <Popconfirm
            className='m-auto'
            title='Delete the task'
            description='Are you sure to delete this task?'
            onConfirm={() => confirmDelete(record._id)}
            onCancel={cancel}
            okText='Yes'
            cancelText='No'
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      )
    }
  ]

  return (
    <>
      <LayoutLoading condition={triggerLoadding}>
        <div className=''>
          <div className='flex pb-4 justify-between'>
            <Button type='primary' onClick={() => showModel('CREATE')}>
              Create
            </Button>
            <div>
              <Input
                placeholder='search item here'
                className='w-[350px]'
                prefix={<SearchOutlined />}
                onChange={handleSearchData}
              />
              <Button type='primary' className='ml-3' onClick={handleSearchItem}>
                Search
              </Button>
            </div>
          </div>
          <div className='overflow-auto'>
            <Table columns={columns} dataSource={dataTable} pagination={{ pageSize: dataPage }} />
          </div>
          <div>
            <TemplateModal isModelOpen={isModelOpen} handleOk={handleOk} handleCancel={handleCancel}>
              <Form form={form} layout='vertical' name='form_in_modal'>
                {formEdit}
              </Form>
            </TemplateModal>
          </div>
        </div>
      </LayoutLoading>
    </>
  )
}

export default TemplateTable
