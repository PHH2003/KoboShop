
import { css } from '@emotion/react';
import StarComponent from './../star/star.component';
import ButtonComponent from './../button/button.component';
import { FunctionComponent, useEffect, useState } from 'react';
import { getAllComment } from '~/app/api/comment/comment.api';
interface IItemProduct {
  itemproduct?: any
}
const ItemProduct: FunctionComponent<IItemProduct> = ({ itemproduct }) => {
  const [averageStar, setAverageStar] = useState(0);

  useEffect(() => {
    getAllComment().then((res) => {
      if (res) {
        const productComments = res.filter((item: any) => item.productId=== itemproduct?._id);
        const totalStars = productComments.reduce((sum: any, comment: any) => sum + parseInt(comment.star), 0);
        const avgStar = productComments.length > 0 ? totalStars / productComments.length : 1;

        setAverageStar(avgStar);

      }
    })
  }, [])
  const starComponents = [];
  for (let i = 1; i <= averageStar; i++) {
    starComponents.push(<StarComponent key={i} />);
  }
  return (
    <div css={cssItemProduct} className='w-[140px] my-7' >
      <img src={itemproduct?.images} className="w-[140px] h-[200px]" alt="" />
      <h2 className='truncate-text'>{itemproduct?.name}</h2>
      <p className="text-gray-600 text-[0.8rem] font-semibold">{itemproduct?.author}</p>
      <p className="flex">
        {starComponents}
      </p>
      <span>${itemproduct?.newPrice}</span>
      <div className='mt-4'>
        <ButtonComponent title={"Add to cart"} className="w-[140px] hover:bg-[#BF0000]" />
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
  .truncate-text {
    white-space: nowrap;     
    overflow: hidden;         
    text-overflow: ellipsis;   
    max-width: 200px;         
}
`