import React, { useEffect } from 'react'
import { SwiperSlide } from 'swiper/react'
import Itemproduct from '~/app/components/parts/item-product/item-product.component'
import SwiperList from '~/app/components/stack/swiper-list/swiper-list.component'
import { useProductRedux } from '../../../redux/hook/useProductReducer'

const Fantastic = () => {

    // const arrayImg = [
    //     "https://th.bing.com/th/id/R.662c1f06b89f20ee2557f43e8080bb55?rik=P0TG2RdsJolSDw&pid=ImgRaw&r=0",
    //     "https://th.bing.com/th/id/R.662c1f06b89f20ee2557f43e8080bb55?rik=P0TG2RdsJolSDw&pid=ImgRaw&r=0",
    //     "https://th.bing.com/th/id/R.662c1f06b89f20ee2557f43e8080bb55?rik=P0TG2RdsJolSDw&pid=ImgRaw&r=0",
    //     "https://th.bing.com/th/id/R.662c1f06b89f20ee2557f43e8080bb55?rik=P0TG2RdsJolSDw&pid=ImgRaw&r=0",
    //     "https://th.bing.com/th/id/R.662c1f06b89f20ee2557f43e8080bb55?rik=P0TG2RdsJolSDw&pid=ImgRaw&r=0",
    //     "https://th.bing.com/th/id/R.662c1f06b89f20ee2557f43e8080bb55?rik=P0TG2RdsJolSDw&pid=ImgRaw&r=0",
    //     "https://th.bing.com/th/id/R.662c1f06b89f20ee2557f43e8080bb55?rik=P0TG2RdsJolSDw&pid=ImgRaw&r=0",
    //     "https://th.bing.com/th/id/R.662c1f06b89f20ee2557f43e8080bb55?rik=P0TG2RdsJolSDw&pid=ImgRaw&r=0",
    //     "https://th.bing.com/th/id/R.662c1f06b89f20ee2557f43e8080bb55?rik=P0TG2RdsJolSDw&pid=ImgRaw&r=0",
    //     "https://th.bing.com/th/id/R.662c1f06b89f20ee2557f43e8080bb55?rik=P0TG2RdsJolSDw&pid=ImgRaw&r=0",
    //     "https://th.bing.com/th/id/R.662c1f06b89f20ee2557f43e8080bb55?rik=P0TG2RdsJolSDw&pid=ImgRaw&r=0",
    //     "https://th.bing.com/th/id/R.662c1f06b89f20ee2557f43e8080bb55?rik=P0TG2RdsJolSDw&pid=ImgRaw&r=0",
    // ]
    const {
        data: { products },
        actions
    } = useProductRedux() 
    useEffect(()=> {
        actions.getAllProducts()
    },[])
  return (
    <div>
    <SwiperList title={"Fantastic fiction"}>
        {products?.map((item:any, index: any)=>(
            <SwiperSlide key={index +1}>
                <Itemproduct itemproduct={item}/>
            </SwiperSlide>   
        ))}
    </SwiperList>
     
    </div>
  )
}

export default Fantastic