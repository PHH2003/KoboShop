import { css } from '@emotion/react';
import StarComponent from './../star/star.component';
import { FunctionComponent, useEffect, useState } from 'react';
import { getAllComment } from '~/app/api/comment/comment.api';
interface IItemProduct {
    itemproduct?: any
}
const ItemProductNoBuy: FunctionComponent<IItemProduct> = ({ itemproduct }) => {
  const [averageStar, setAverageStar] = useState(0);
  const [lengthComment, setLengthComment] = useState(0);
  useEffect(() => {
    getAllComment().then((res) => {
      if (res) {
        const productComments = res.filter((item: any) => item.productId._id === itemproduct?._id);
        const totalStars = productComments.reduce((sum: any, comment: any) => sum + parseInt(comment.star), 0);
        const avgStar = productComments.length > 0 ? totalStars / productComments.length : 1;
        setAverageStar(avgStar);
        setLengthComment(productComments.length)
      }
    });
  }, []);
  const starComponents = [];
  for (let i = 1; i <= averageStar; i++) {
    starComponents.push(<StarComponent key={i} />);
  }
    return (
        <div css={cssItemProduct} className='w-[140px]' >
            <img src={itemproduct?.images?.slice(0, 1).map((image: any) => image?.response || image?.url)} className="w-[140px] h-[200px] mt-9" alt="" />
            <h2 className='truncate-text'>{itemproduct?.name}</h2>
            <p className='text-gray-600 text-[0.8rem] font-semibold truncate-text '>{itemproduct?.author}</p>
            <p className='flex items-center'>
              {starComponents}({lengthComment})
            </p>
            <span> ${itemproduct.newPrice} </span>
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
  .truncate-text {
    white-space: nowrap;     
    overflow: hidden;         
    text-overflow: ellipsis;   
    max-width: 200px;         
}
`