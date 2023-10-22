import { useProductRedux } from '../../redux/hook/useProductReducer'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Itemproduct from '~/app/components/parts/item-product/item-product.component'

const MainProductComponent = () => {
  const keyWords = new URLSearchParams(location.search).get('q')
  const {
    data: { products },
    actions
  } = useProductRedux()
  const filteredProducts = keyWords
    ? products.filter((item: any) => item?.name.toLowerCase().includes(keyWords.toLowerCase()))
    : products
  useEffect(() => {
    actions.getAllProducts()
  }, [keyWords])
  return (
    <div className='grid grid-cols-5 gap-10'>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item: any, index: any) => (
          <Link to={`/detail/${item._id}`} key={index}>
            <Itemproduct itemproduct={item} />
          </Link>
        ))
      ) : (
        <p className='w-[300px]  text-[18px] text-gray-600 font-semibold text-center'>Không có sản phẩm</p>
      )}
    </div>
  )
}

export default MainProductComponent
