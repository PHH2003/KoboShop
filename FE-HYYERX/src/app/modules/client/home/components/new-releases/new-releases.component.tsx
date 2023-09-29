import React from 'react'
import { SwiperSlide } from 'swiper/react'
import Itemproduct from '~/app/components/parts/item-product/item-product.component'
import SwiperList from '~/app/components/stack/swiper-list/swiper-list.component'

const NewReleases = () => {

    const arrayImg = [
       "https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1",
       "https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1",
       "https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1",
       "https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1",
       "https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1",
       "https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1",
       "https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1",
       "https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1",
       "https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1",
       "https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1",
       "https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1",  
    ]

  return (
    
    <div>       
    <SwiperList title={"New releases you don't want to miss"}>
        {arrayImg?.map((item:any, index: any)=>(
            <SwiperSlide key={index +1}>
                <Itemproduct itemproduct={item}/>
            </SwiperSlide>   
        ))}
    </SwiperList>
     
    </div>
  )
}

export default NewReleases