import Trending from './components/trending/trending.component'
import NewReleases from './components/new-releases/new-releases.component';
import Fantastic from './components/fantastic/fantastic.component';
import BannerComponent from './components/banner/banner.component';

const Home = () => {
  return (
    <div className="w-[1140px] m-auto">
      
      <div className=''>
      <BannerComponent/>
      </div>

      <div>
        <Trending/>
      </div>

      <div>
        <NewReleases/>
      </div>

      <div>
        <Fantastic/>
      </div>
    </div>
  )
}

export default Home