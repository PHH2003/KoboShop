import { css } from '@emotion/react'
import { usePCategoryRedux } from '../../../redux/hook/useCategoryReducer'
import { FC, useEffect } from 'react'

interface ISaidBarComponent {
  selectedCategory?: any
  onSelectCategory?: any
  onSelectPriceRange?: any
  selectedPriceRange?: any
}

const SidebarComponent: FC<ISaidBarComponent> = ({
  selectedCategory,
  onSelectCategory,
  onSelectPriceRange,
  selectedPriceRange
}) => {
  const {
    data: { categorys },
    actions
  } = usePCategoryRedux()
  useEffect(() => {
    actions.getAllCategorys()
  }, [])
  
  const handelSelectCategory = (dataId: any) => {
    onSelectCategory(dataId)
  }
  const handleShowAll = () => {
    onSelectCategory(null)
    onSelectPriceRange(null)
  }

  const handleSelectPriceRange = (priceRange: any) => {
    onSelectPriceRange(priceRange)
  }
  return (
    <div css={cssSaidbar}>
      <div>
        <div>
          <h3 className='bg-[#ededed] py-2 font-semibold px-3 text-center'>Category</h3>
          <div className='text-center'>
            <p onClick={handleShowAll}>Show all</p>
            {categorys?.map((item: any, index: any) => (
              <p key={index + 1} onClick={() => handelSelectCategory(item._id)}>
                {item?.name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className='bg-[#ededed] py-2 font-semibold px-3 mt-2 text-center'>price filter</h3>
          <div className='text-center'>
            <p onClick={handleShowAll}>Show all</p>
            <p onClick={() => handleSelectPriceRange('1-100')}>1$ to 100$</p>
            <p onClick={() => handleSelectPriceRange('101-500')}>101$ to 500$</p>
            <p onClick={() => handleSelectPriceRange('501-999')}>501$ to 999$</p>
            <p onClick={() => handleSelectPriceRange('1000-999999999')}>Over 999$</p>
          </div>
        </div>{' '}
        <div>
          <h3 className='bg-[#ededed] py-2 font-semibold px-3 mt-2'>Khác</h3>
          <div>
            <p>Sản phẩm yêu thích</p>
            <p>Sắp xếp giá từ cao đến thấp</p>
            <p>Sắp xếp giá từ thấp đến cao</p>
            <p>Sản phẩm mới nhất</p>
            <p>Sản phẩm được mua nhiều nhất</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarComponent

const cssSaidbar = css`
  p {
    padding: 5px 7px;
    font-size: 15px;
  }
  p:hover {
    color: #bf0000;
    background: #ededed;
  }
`
