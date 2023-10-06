import React, { useEffect } from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperList from '~/app/components/stack/swiper-list/swiper-list.component'
import { useProductRedux } from '../../../redux/hook/useProductReducer'
import ItemProductNoBuy from '~/app/components/parts/item-product/item-product-no-buy.component'

const MoreByAuthorComponent = () => {

    const {
        data: { products },
        actions
    } = useProductRedux() 
    useEffect(()=> {
        actions.getAllProducts()
    },[])

  return (
    <div className=''>
    <SwiperList title={"More by Carla Kovach"}>
        {products?.map((item:any, index: any)=>(
            <SwiperSlide key={index +1}>
                <ItemProductNoBuy itemproduct={item}/>
            </SwiperSlide>   
        ))}
    </SwiperList>
     
    </div>
  )
}

export default MoreByAuthorComponent