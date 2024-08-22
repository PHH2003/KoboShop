import { Button, Form, Input, Modal, Segmented, Select, Typography } from 'antd'
import TemplateOrder from '../common/template-order/teamplate-order.component'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { filterDataOrderByStatus, updateOrder } from './service/order.service'
import toast from 'react-hot-toast'
import { PlusOutlined } from '@ant-design/icons'
const { Title } = Typography
const OrderAdminComponent = () => {
  const [orderStatus, setOrderStatus] = useState<string | number>('Đang chờ duyệt')
  const [dataTable, setDataTable] = useState<any>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form] = Form.useForm()
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const changeStatusDataOrder = (value: string | number) => {
    setOrderStatus(value)
  }
  const callAllOrder = useCallback(() => {
    filterDataOrderByStatus(orderStatus).then((res) => {
      if (res) {
        setDataTable(res.data)
      }
    })
  }, [orderStatus])
  console.log(dataTable);
  
  useEffect(() => {
    callAllOrder()
  }, [orderStatus])

  const handleUpdateStatusOrder = (orderId: string, orderStatus: string) => {
    updateOrder({ orderId, orderStatus }).then((res) => {
      if (res) {
        callAllOrder()
        toast.success('Đã cập nhật trạng thái đơn hàng')
      }
    })
    setOrderStatus(orderStatus)
  }

  const buttonByStatus = (orderId: string, orderStatus: string) => {
    switch (orderStatus) {
      case 'Đang chờ duyệt':
        return (
          <Fragment>
            <Button className='text-blue-700' onClick={() => handleUpdateStatusOrder(orderId, 'Đã nhận đơn')}>
              {' '}
              Chuyển duyệt thành công
            </Button>
            <Button danger onClick={() => handleUpdateStatusOrder(orderId, 'Đã huỷ')}>
              Chuyển huỷ đơn
            </Button>
          </Fragment>
        )
        break
      case 'Đã nhận đơn':
        return (
          <Button className='text-blue-700' onClick={() => handleUpdateStatusOrder(orderId, 'Đang giao hàng')}>
            Chuyển đang vận chuyển
          </Button>
        )
        break
      case 'Đang giao hàng':
        return (
          <Button className='text-blue-700' onClick={() => handleUpdateStatusOrder(orderId, 'Đã hoàn thành')}>
            Chuyển hoàn thành
          </Button>
        )
      case 'Đã hoàn thành':
        break
      case 'Huỷ đơn':
        break
      default:
        break
    }
  }
  return (
    <div>
      <Segmented
        options={[
          { value: 'Đang chờ duyệt', label: 'Đang chờ duyệt' },
          { value: 'Đã nhận đơn', label: 'Đã nhận đơn' },
          { value: 'Đang giao hàng', label: 'Đang giao hàng' },
          { value: 'Đã hoàn thành', label: 'Đã hoàn thành' },
          { value: 'Đã huỷ', label: 'Đã huỷ' }
        ]}
        size='large'
        value={orderStatus}
        onChange={changeStatusDataOrder}
      />
      <div className='float-right'>
        <Button onClick={showModal} type='primary' className='p-0 h-[40px]  w-[44px] rounded-[4px] bg-[#D4FF00]'>
          <PlusOutlined className='text-[20px] mb-[4px]' />
        </Button>
      </div>
      {/* Modal add order */}
      <div>
        <Modal title='Basic Modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form form={form} layout='vertical' name='form_in_modal'>
            <Fragment>
              <Form.Item
                label='fullname'
                name='fullname'
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='phoneNumber'
                name='phoneNumber'
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item label='city' name='city' rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input />
              </Form.Item>

              <Form.Item
                label='district'
                name='district'
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='locationDetail'
                name='locationDetail'
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.List name='productOrder' initialValue={[]}>
                {(fields, { add, remove }) => (
                  <div>
                    {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                      <div key={key}>
                        <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                          <Form.Item
                            {...restField}
                            name={[name, 'product']}
                            fieldKey={[fieldKey, 'product'] as any}
                            label='Select Product'
                            rules={[{ required: true, message: 'Please select a product' }]}
                          >
                            <Select></Select>
                          </Form.Item>
                        </div>
                      </div>
                    ))}
                    <Button type='dashed' onClick={() => add()} block>
                      + Add Product
                    </Button>
                  </div>
                )}
              </Form.List>

              <Form.Item
                label='orderStatus'
                name='orderStatus'
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Select placeholder=' trạng thái'>
                  <Select.Option value='Duyệt thành công'>Duyệt thành công</Select.Option>
                  <Select.Option value='Đang vận chuyển'>Đang vận chuyển</Select.Option>
                  <Select.Option value='Hoàn thành'>Hoàn thành</Select.Option>
                </Select>
              </Form.Item>
            </Fragment>
          </Form>
        </Modal>
      </div>
      <Title className='py-5' level={3}>
        Số Đơn hàng: {dataTable.length}
      </Title>
      <TemplateOrder buttonByStatus={buttonByStatus} dataTable={dataTable} />
    </div>
  )
}

export default OrderAdminComponent
