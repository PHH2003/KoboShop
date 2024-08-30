import { Button, Descriptions, DescriptionsProps, Modal, Space, Table, Tag, Typography } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React, { FC, useState } from 'react'
import dayjs from 'dayjs'
interface PropsTypes {
  buttonByStatus?: any
  dataTable: any
  isStatistical?: boolean
}

const { Title } = Typography
const TemplateOrder: FC<PropsTypes> = ({ buttonByStatus, dataTable, isStatistical }) => {
  interface DataType {
    key: string
    name: string
    age: number
    address: string
    tags: string[]
  }
  console.log(dataTable)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [detailRecord, setDetailRecord] = useState<any>({
    fullname: '',
    phoneNumber: '',
    district: '',
    commune: '',
    locationDetail: '',
    city: '',
    productOrder: '',
    total: Number
  })

  const showModal = (record: any) => {
    setIsModalOpen(true)
    setDetailRecord({
      city: record?.city,
      fullname: record?.fullname,
      phoneNumber: record?.phoneNumber,
      district: record?.district,
      commune: record?.commune,
      detailAddress: record?.locationDetail,
      productOrder: record?.productOrder,
      total: record?.total
    })
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = (record: any) => {
    setIsModalOpen(false)
    setDetailRecord({
      city: record?.city,
      fullname: record?.fullname,
      phoneNumber: record?.phoneNumber,
      district: record?.district,
      commune: record?.commune,
      detailAddress: record?.detailAddress,
      productOrder: record?.productOrder,
      total: record?.total
    })
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Mã order',
      dataIndex: '_id',
      align: 'center',
      key: '_id',
      render: (_, record: any) => (
        <div>
          {record._id}
        </div>
      )
    },
    {
      title: 'Ngày order',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      align: 'center',
      render: (_, record: any) => (
        <div>
          {dayjs(record.createdAt).format('MM-DD-YYYY')}
        </div>
      )
    },
    {
      title: 'Trạng thái',
      dataIndex: 'orderStatus',
      key: 'orderStatus',
      align: 'center'
    },
    {
      title: 'Tổng số lượng mua',
      dataIndex: 'address',
      key: 'address',
      align: 'center',
      render: (_, record: any) => {
        const orderTotal = record?.productOrder?.reduce((orderTotal: number, product: any) => {
          return orderTotal + product.quantity
        }, 0)

        return <strong className='block text-center'>{orderTotal}</strong>
      }
    },
    {
      title: 'Tổng tiền',
      key: 'tags',
      dataIndex: 'tags',
      align: 'center',
      render: (_, record: any) => {
        const totalPrice = record?.productOrder?.reduce((orderTotal: number, product: any) => {
          return (orderTotal + product?.product?.newPrice) * product?.quantity
        }, 0)
        return <strong className='block text-center'>{totalPrice}</strong>
      }
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: (_, record: any) => (
        <Space size='middle'>
          <Button type='primary' onClick={() => showModal(record)}>
            Xem chi tiết
          </Button>
          {!isStatistical && (
            <Space size='middle' direction='vertical'>
              {buttonByStatus(record._id, record.orderStatus)}
            </Space>
          )}
        </Space>
      )
    }
  ]

  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Họ Và Tên',
      children: detailRecord.fullname
    },
    {
      key: '2',
      label: 'Số Điện Thoại',
      children: detailRecord.phoneNumber
    },
    {
      key: '3',
      label: 'Tỉnh / Thành Phố',
      children: detailRecord.city
    },
    {
      key: '4',
      label: 'Quận / Huyện',
      children: detailRecord.district
    },
    {
      key: '5',
      label: 'Xã / Phường',
      children: detailRecord.commune
    },
    {
      key: '6',
      label: 'Thông Tin Chi Tiết',
      children: detailRecord.detailAddress
    }
  ]

  const columListProduct = [
    {
      title: 'Tên Sản Phẩm',
      key: '1',
      align: 'center' as 'center',
      render: (_: any, record: any) => <div>{record?.product?.name}</div>
    },
    {
      title: 'Ảnh Sản Phẩm',
      key: '2',
      align: 'center' as 'center',
      render: (_: any, record: any) => (
        <div>
          <img className='w-[100px] ml-24' src={record?.product?.images[0]?.response} alt='' />
        </div>
      )
    },
    {
      title: 'Giá Sản Phẩm',
      key: '3',
      align: 'center' as 'center',
      render: (_: any, record: any) => (
        <strong className='block text-center'>
          {(record?.product?.newPrice).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
        </strong>
      )
    },
    {
      title: 'Số Lượng Mua',
      key: '4',
      align: 'center' as 'center',
      render: (_: any, record: any) => <div>{record.quantity}</div>
    },
    {
      title: 'Tổng tiền',
      key: '3',
      align: 'center' as 'center',
      render: (_: any, record: any) => (
        <strong className='block text-center'>
          {(record?.quantity * record?.product?.newPrice).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
        </strong>
      )
    }
  ]

  return (
    <div>
      <Table columns={columns} dataSource={dataTable} />
      <Modal open={isModalOpen} onOk={handleOk} width={900} footer={null} onCancel={handleCancel}>
        <Title level={4}>Customer information</Title>
        <Descriptions items={items} />
        <Title level={4}>Product</Title>
        <div>
          <Table columns={columListProduct} dataSource={detailRecord.productOrder} />
        </div>
      </Modal>
    </div>
  )
}

export default TemplateOrder
