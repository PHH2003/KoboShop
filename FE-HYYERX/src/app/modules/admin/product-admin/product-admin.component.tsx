import React, { useEffect, useState } from 'react'
import { getAllProduct } from './service/product.service'
import TemplateTable from '../common/template-table/template-table.component'

const ProductAdminComponent = () => {
  const [dataProduct, setDataProduct] = useState([])
  useEffect(() => {
    getAllProduct().then((res) =>{
      setDataProduct(res.data)
    })
  }, [])
  return (
    <div>
      <TemplateTable dataTable={dataProduct} />
    </div>
  )
}

export default ProductAdminComponent