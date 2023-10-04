import React, { useEffect } from 'react'
import { SwiperSlide } from 'swiper/react'
import Itemproduct from '~/app/components/parts/item-product/item-product.component'
import SwiperList from '~/app/components/stack/swiper-list/swiper-list.component'
import { useProductRedux } from '../../../redux/hook/useProductReducer'
import { Link } from 'react-router-dom'

const Trending = () => {

    // const arrayImg = [
    //     "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
    //     "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
    //     "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
    //     "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
    //     "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
    //     "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
    //     "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
    //     "http://c3nguyenchithanh.daknong.edu.vn/wp-content/uploads/2020/04/nhung-cuon-sach-hay-nen-doc-mot-lan-trong-doi-3724-7.jpg",
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
    <SwiperList title={"Trending Now in eBooks"}>
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

export default Trending