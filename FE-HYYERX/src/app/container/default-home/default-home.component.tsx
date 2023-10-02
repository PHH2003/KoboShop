
import { Outlet } from 'react-router-dom'
import Float from '~/app/components/stack/float-button/float-button.component'
import Footer from '~/app/components/stack/footer/footer.component'
import Header from '~/app/components/stack/header/header.component'



const DefaultHome = () => {
  return (
    <>
        <div>
            <Header/>
        </div>

        <div>
            <Outlet/>
        </div>
        <div>
          <Float/>
        </div>
        <div>
            <Footer/>
        </div>
    </>
  )
}

export default DefaultHome