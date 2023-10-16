import Trending from './components/trending/trending.component'
import NewReleases from './components/new-releases/new-releases.component';
import Fantastic from './components/fantastic/fantastic.component';
import BannerComponent from './components/banner/banner.component';
import { useProductRedux } from '../redux/hook/useProductReducer';
import { useEffect } from 'react';
import { Skeleton } from 'antd';
const Home = () => {
  const {
    data: { products },
    actions
} = useProductRedux() 
useEffect(()=> {
    actions.getAllProducts()
},[])
  return (
    <div className="w-[1140px] m-auto max-sm:px-3">
      
      <div className=''>
      <BannerComponent/>
      </div>

        {products.length == 0 ?(
          <Skeleton active />
        ):(
          <div>
          <div>
            <Trending/>
          </div>
          <hr className='my-6' />
          <div>
            <NewReleases/>
          </div>
          <hr className='my-6' />
          <div>
            <Fantastic/>
          </div>
        </div>
        )}

    </div>
  )
}

export default Home