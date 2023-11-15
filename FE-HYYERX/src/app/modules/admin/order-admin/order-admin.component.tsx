
import { Button, Segmented, Typography } from 'antd'
import TemplateOrder from '../common/template-order/teamplate-order.component'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { filterDataOrderByStatus, updateOrder } from './service/order.service'
import toast from 'react-hot-toast'

const { Title } = Typography
const OrderAdminComponent = () => {

  const [orderStatus, setOrderStatus] = useState<string | number>('đang chờ duyệt')
  const [dataTable, setDataTable] = useState<any>([])
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
  }

  const buttonByStatus = (orderId: string, orderStatus: string) => {
    switch (orderStatus) {
      case 'đang chờ duyệt':
        return (
          <Fragment>
            <Button className='text-blue-700' onClick={() => handleUpdateStatusOrder(orderId, 'đã nhận đơn')}> Chuyển duyệt thành công</Button>
            <Button danger onClick={() => handleUpdateStatusOrder(orderId, 'huỷ đơn')}>
              Chuyển huỷ đơn
            </Button>
          </Fragment>
        )
        break
      case 'đã nhận đơn':
        return (
          <Button className='text-blue-700' onClick={() => handleUpdateStatusOrder(orderId, 'đang giao hàng')}>
            Chuyển đang vận chuyển
          </Button>
        )
        break
      case 'đang giao hàng':
        return (
          <Button className='text-blue-700' onClick={() => handleUpdateStatusOrder(orderId, 'đã hoàn thành')}>
            Chuyển hoàn thành
          </Button>
        )
      case 'đã hoàn thành':
        break
      case 'huỷ đơn':
        break

      default:
        break
    }
  }
  return (
    <div>
      <Segmented
        options={[
          { value: 'đang chờ duyệt', label: 'đang chờ duyệt' },
          { value: 'đã nhận đơn', label: 'đã nhận đơn' },
          { value: 'đang giao hàng', label: 'đang giao hàng' },
          { value: 'đã hoàn thành', label: 'đã hoàn thành' },
          { value: 'huỷ đơn', label: 'Đã huỷ' }
        ]}
        size='large'
        value={orderStatus}
        onChange={changeStatusDataOrder}
      />
      <Title className='py-5' level={3}>
        Số Đơn hàng: 0
      </Title>
      <TemplateOrder buttonByStatus={buttonByStatus} dataTable={dataTable} />
    </div>
  )
}

export default OrderAdminComponent