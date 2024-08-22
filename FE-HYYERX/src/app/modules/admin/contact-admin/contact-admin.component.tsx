import { Button, Form, Input, Modal } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import TemplateTable from '../common/template-table/template-table.component'
import {
  createContact,
  deleteContact,
  getAllContact,
  repContact,
  searchContact,
  updateContact
} from './service/contact-admin.service'
import toast from 'react-hot-toast'
import dayjs from 'dayjs'

const ContactAdmin = () => {
  const [id, setId] = useState()
  const [dataSupport, setDataSupport] = useState([])
  const [colums, setColums] = useState([])
  const [reset, setReset] = useState<boolean>(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [feedback, setFeedback] = useState('')

  const handleInputChange = (e: any) => {
    setFeedback(e.target.value)
  }
  const showModal = (dataId: any, topicRequest: any) => {
    setIsModalOpen(true)
    setId(dataId)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
    setFeedback('')
  }
  useEffect(() => {
    getAllContact().then((res) => {
      setDataSupport(
        res.data.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      )
    })
  }, [reset])
  const onSubmit = () => {
    repContact({ id: id, reqbody: feedback }).then(
      (res) => {
        if (res) {
          toast.success('Phản hồi thành công')
          handleCancel()
          setFeedback('')
        }
      },
      (err) => {
        toast.error('Email không hợp lệ')
      }
    )
  }
  useEffect(() => {
    const columnTemp: any = []
    const title = ['', 'Full name', 'Email', 'Message', 'createdAt', 'updatedAt']

    if (dataSupport.length > 0) {
      Object.keys(dataSupport[0]).forEach((itemKey, key = 0) => {
        if (!['_id', '__v'].includes(itemKey)) {
          columnTemp.push({
            title: title[key++],
            dataIndex: itemKey,
            key: itemKey,
            align: 'center',
            render: (text: any) =>
              itemKey === 'createdAt' || itemKey === 'updatedAt' ? dayjs(text).format('DD/MM/YYYY HH:mm:ss') : text
          })
        }
      })

      columnTemp.push({
        title: 'Feedback',
        key: 'action',
        align: 'center',
        render: (text: any, record: any) => (
          <Button onClick={() => showModal(record._id, record.reqbody)} type='primary'>
            Gửi feedback
          </Button>
        )
      })
    }

    setColums(columnTemp)
  }, [dataSupport])
  const handleGetList = () => {
    setReset(!reset)
  }
  return (
    <div>
      <Modal
        bodyStyle={{ height: 210 }}
        title='Nhập phản hồi'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <textarea
          onChange={handleInputChange}
          className='w-full h-[170px] focus:outline-none p-2 border rounded-xl border-[#E7E8E9]'
          placeholder='Nhập phản hồi của bạn'
          value={feedback}
        />
        <Button className='mt-3 float-right' type='primary' onClick={onSubmit}>
          Gửi email
        </Button>
      </Modal>
      <TemplateTable
        searchFunc={searchContact}
        setNewData={setDataSupport}
        columsTable={colums}
        createFunc={createContact}
        changeFunc={updateContact}
        dataTable={dataSupport}
        deleteFunc={deleteContact}
        handleGetList={handleGetList}
        dataPage={7}
        formEdit={
          <Fragment>
            <Form.Item
              label='Full name'
              name='fullname'
              rules={[{ required: true, message: 'Vui lòng nhập đầy đủ họ và tên!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label='Email' name='email' rules={[{ required: true, message: 'Vui lòng nhập email!' }]}>
              <Input />
            </Form.Item>{' '}
            <Form.Item
              label='Message'
              name='message'
              rules={[{ required: true, message: 'Vui lòng nhập đầy đủ message!' }]}
            >
              <Input />
            </Form.Item>
          </Fragment>
        }
      />
    </div>
  )
}

export default ContactAdmin
