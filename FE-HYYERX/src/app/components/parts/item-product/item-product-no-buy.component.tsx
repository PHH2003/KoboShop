import { css } from '@emotion/react';
import StarComponent from './../star/star.component';
import { FunctionComponent } from 'react';
interface IItemProduct {
    itemproduct?: any
}
const ItemProductNoBuy: FunctionComponent<IItemProduct> = ({ itemproduct }) => {
    return (
        <div css={cssItemProduct} className='w-[140px]' >
            <img src={itemproduct} className="w-[140px] h-[200px]" alt="" />
            <h2>Her Hidden Shadow</h2>
            <p className='text-gray-600 text-[0.8rem] font-semibold'>Carla Kovach</p>
            <p className='flex'>
                <StarComponent />
                <StarComponent />
                <StarComponent />
                <StarComponent />
            </p>
            <span> $3.99 </span>
        </div>
    )
}

export default ItemProductNoBuy

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