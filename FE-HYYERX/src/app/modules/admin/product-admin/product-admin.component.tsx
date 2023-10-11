import React, { useEffect, useState } from 'react'
import { getAllProduct } from './service/product.service'
import TemplateTable from '../common/template-table/template-table.component'

const ProductAdminComponent = () => {
  const [dataProduct, setDataProduct] = useState<any>([])
  const [column, setColumn] = useState([])
  useEffect(() => {
    getAllProduct().then((res) =>{
      setDataProduct(res.data)
    })
  }, [])

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
                        if (itemKey === 'images' && dataProduct[index]?.images && dataProduct[index].images.length > 0) {
                            return (
                                <img
                                    src={dataProduct[index].images[0]}
                                    alt="Product Image"
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
  return (
    <div>
      <TemplateTable dataTable={dataProduct} columsTable={column} dataPage={5} />
    </div>
  )
}

export default ProductAdminComponent