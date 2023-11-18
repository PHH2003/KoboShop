import SidebarComponent from './components/sidebar/sidebar.component'
import MainProductComponent from './components/main-product/main-product.component'
import { useState } from 'react';

const ProductComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  return (
    <div className='max-sm:px-3 sm:flex sm:w-[1140px] m-auto justify-between mt-3'>
        <div className='sm:w-[15%]'>
            <SidebarComponent
             selectedCategory={selectedCategory}
             onSelectCategory={setSelectedCategory}
             selectedPriceRange={selectedPriceRange}
             onSelectPriceRange={setSelectedPriceRange}            
            />
        </div>
        <div className='sm:w-[80%]'>
            <MainProductComponent selectedCategory={selectedCategory} selectedPriceRange={selectedPriceRange}/>
        </div>
    </div>
  )
}

export default ProductComponent