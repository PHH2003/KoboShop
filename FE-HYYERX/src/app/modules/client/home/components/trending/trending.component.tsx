import React from 'react'
import { SwiperSlide } from 'swiper/react'
import Itemproduct from '~/app/components/parts/item-product/item-product.component'
import SwiperList from '~/app/components/stack/swiper-list/swiper-list.component'

const Trending = () => {

    const arrayImg = [
        "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
        "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
        "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
        "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
        "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
        "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
        "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
        "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
    ]

  return (
    <div>
    <SwiperList title={"Trending Now in eBooks"}>
        {arrayImg?.map((item:any, index: any)=>(
            <SwiperSlide key={index +1}>
                <Itemproduct itemproduct={item}/>
            </SwiperSlide>   
        ))}
    </SwiperList>
     
    </div>
  )
}

export default Trending