import SidebarComponent from './components/sidebar/sidebar.component'
import MainProductComponent from './components/main-product/main-product.component'
import { useState } from 'react';

const ProductComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  return (
    <div className='w-[1140px] m-auto flex justify-between mt-9'>
        <div>
            <SidebarComponent
             selectedCategory={selectedCategory}
             onSelectCategory={setSelectedCategory}
             selectedPriceRange={selectedPriceRange}
             onSelectPriceRange={setSelectedPriceRange} 
            />
        </div>
        <div>
            <MainProductComponent selectedCategory={selectedCategory} selectedPriceRange={selectedPriceRange}/>
        </div>
    </div>
  )
}

export default ProductComponent