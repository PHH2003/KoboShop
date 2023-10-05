
import { css } from '@emotion/react';
import StarComponent from './../star/star.component';
import ButtonComponent from './../button/button.component';
import { FunctionComponent } from 'react';
interface IItemProduct {
  itemproduct?: any
}
const ItemProduct: FunctionComponent<IItemProduct> = ({ itemproduct }) => {
  console.log(itemproduct);
  
  return (
    <div css={cssItemProduct} className='w-[140px] my-7' >
      <img src={itemproduct?.images[0]} className="w-[140px] h-[200px]" alt="" />
      <h2>{itemproduct?.name}</h2>
      <p className='text-gray-600 text-[0.8rem] font-semibold'>{itemproduct?.author}</p>
      <p className='flex'>
        <StarComponent />
        <StarComponent />
        <StarComponent />
        <StarComponent />
      </p>
      <span> ${itemproduct?.newPrice}</span>
      <div className='mt-4'>
        <ButtonComponent title={"Add to cart"} className="w-[140px]" />
      </div>
    </div>
  )
}

export default ItemProduct

const cssItemProduct = css`
  h2{
    color: #000;
    padding-top:10px;
    font-weight: 600;
    font-size: 0.8rem;
  }
  span{
    color: #000;
    padding-top:10px;
    font-weight: 600;
    font-size: 0.8rem;
  }
`