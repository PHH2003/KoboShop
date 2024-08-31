import React, { useEffect } from 'react'
import { SwiperSlide } from 'swiper/react'
import Itemproduct from '~/app/components/parts/item-product/item-product.component'
import SwiperList from '~/app/components/stack/swiper-list/swiper-list.component'
import { useProductRedux } from '../../../redux/hook/useProductReducer'
import { Link } from 'react-router-dom'

const NewReleases = () => {
    const {
      data: { products },
      actionProduct
  } = useProductRedux() 
  useEffect(()=> {
    actionProduct.getAllProducts()
  },[])

  return (
    
    <div className=''>       
    <SwiperList title={"New releases you don't want to miss"}>
        {products?.map((item:any, index: any)=>(
            <SwiperSlide key={index +1}>
                <Link to={`/detail/${item._id}`}>
                    <Itemproduct itemproduct={item}/>
                </Link>
            </SwiperSlide>   
        ))}
    </SwiperList>
     
    </div>
  )
}

export default NewReleases