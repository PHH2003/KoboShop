import SidebarComponent from './sidebar/sidebar.omponent'
import MainProductComponent from './main-product/main-product.component'

const ProductComponent = () => {
  return (
    <div className='w-[1140px] m-auto flex justify-between mt-9'>
        <div>
            <SidebarComponent/>
        </div>
        <div>
            <MainProductComponent/>
        </div>
    </div>
  )
}

export default ProductComponent