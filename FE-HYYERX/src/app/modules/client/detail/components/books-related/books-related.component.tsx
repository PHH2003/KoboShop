import React, { useEffect } from 'react'
import { SwiperSlide } from 'swiper/react'
import Itemproduct from '~/app/components/parts/item-product/item-product.component'
import SwiperList from '~/app/components/stack/swiper-list/swiper-list.component'
import { useProductRedux } from '../../../redux/hook/useProductReducer'

const BookRelatedCompnonent = () => {

  const {
    data: { products },
    actions
} = useProductRedux() 
useEffect(()=> {
    actions.getAllProducts()
},[])

  return (
    
    <div className=''>       
    <SwiperList title={"Books related to Her Hidden Shadow"}>
        {products?.map((item:any, index: any)=>(
            <SwiperSlide key={index +1}>
                <Itemproduct itemproduct={item}/>
            </SwiperSlide>   
        ))}
    </SwiperList>
     
    </div>
  )
}

export default BookRelatedCompnonent