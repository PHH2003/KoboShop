import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Navigation } from 'swiper/modules';
import { FunctionComponent } from 'react';
import { css } from '@emotion/react';
import useWindowSizeLayout from '~/app/hook/useWindow';

interface ISwiperList {
    children?:any
    title?:any
} 

const SwiperList: FunctionComponent<ISwiperList> = ({children, title}) => {
  const windowSize = useWindowSizeLayout()
  console.log(windowSize.width)
  return (
    <div css={cssSwiper} className='h-[450px]'>
        <div className='mt-11'>
            <span className='name-books'>eBooks</span>
            <div className='flex items-center justify-between'>
                <h2 className='title font-semibold mt-4 text-2xl'>{title}</h2>
                <a href="#" className='viewall font-semibold underline'>View all</a>
            </div>
            
        </div>
        <Swiper
        slidesPerView={windowSize.width < 739 ? 2 : 6}
        spaceBetween={60}
        pagination={true}
        modules={[Navigation]}
        className="mySwiper"
        navigation={true}
      >
        {children}
      </Swiper>
    </div>
  )
}

export default SwiperList
const cssSwiper = css`
.name-books{
    background-color:#006265;
    border-radius: 3px;
    padding: 3px 6px;
    color: #fff
}

.title:hover{
    color:#BF0000; 
}
.viewall:hover{
    color:#BF0000;
    text-decoration: underline;
}
`