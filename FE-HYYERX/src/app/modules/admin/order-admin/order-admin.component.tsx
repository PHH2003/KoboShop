import React, { useEffect, useState } from 'react'
import TemplateTable from '../common/template-table/template-table.component'
import { deleteOrder, getAllOrder } from './service/order.service'

const OrderAdminComponent = () => {
  const [dataOrder, setDataOrder] = useState<any>([])
  const [colums, setColums] = useState([])
  const [reset, setReset] = useState<boolean>(true)
  useEffect(() => {
    getAllOrder().then((res) => {
      setDataOrder(res.data)
    })
  }, [reset])
  useEffect(() => {
    const columTemp: any = []
    if (dataOrder.length > 0) {
      Object?.keys(dataOrder[0]).map((itemKey) => {
        if (!['_id', 'updatedAt', 'createdAt', '__v', 'productOrder', 'user'].includes(itemKey)) {
          return columTemp.push({
            title: itemKey,
            dataIndex: itemKey,
            key: itemKey
          })
        }
      }
      )
    }
    if (dataOrder[0]?.productOrder && dataOrder[0]?.productOrder.length > 0) {
      const firstItem = dataOrder[0].productOrder[0].product
      if (firstItem) {
        Object.keys(firstItem).forEach((itemKey) => {
          if (
            ![
              '_id',
              'updatedAt',
              'newPrice',
              'author',
              'quantity',
              'company',
              'datePublish',
              'size',
              'cost',
              'description',
              'images',
              'categoryId',
              'createdAt',
              '__v'
            ].includes(itemKey)
          ) {
            columTemp.push({
              title: `${itemKey}`,
              dataIndex: `${itemKey}`,
              key: `${itemKey}`,
              render: (text: any, record: any, index: any) => {
                return (
                  <>
                    {dataOrder[index]?.productOrder?.map((item: any, index: any) => (
                      <p key={index}>{item.product[itemKey]}</p>
                    ))}
                  </>
                )
              }
            })
          }
        })
      }
    }
    setColums(columTemp)
  }, [dataOrder])
  const handleGetList = () => {
    setReset(!reset)
  }
  return (
    <div>
      <TemplateTable columsTable={colums} handleGetList={handleGetList} dataTable={dataOrder} deleteFunc={deleteOrder} dataPage={8} />
    </div>
  )
}

export default OrderAdminComponent