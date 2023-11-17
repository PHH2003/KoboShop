import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProductRedux } from '../../../redux/hook/useProductReducer'
import QuantityCompoennt from '~/app/components/parts/quantity/quantity.component'
import StarComponent from '~/app/components/parts/star/star.component'
import { addProductToCart } from '~/app/api/cart/cart.api'
import { useCartRedux } from '../../../redux/hook/useCartReducer'
import ButtonComponent from '~/app/components/parts/button/button.component'
import toast from 'react-hot-toast'
import { getAllComment } from '~/app/api/comment/comment.api'

const InfoDetail = () => {
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  let { id } = useParams()
  const {
    data: { product: productDetail },
    actions
  } = useProductRedux()
  const { actions: actionscart } = useCartRedux()
  const [averageStar, setAverageStar] = useState(0);
  useEffect(() => {
    getAllComment().then((res) => {
        if (res) {
            const productComments = res.filter((item: any) => item.productId === id);
            const totalStars = productComments.reduce((sum: any, comment: any) => sum + parseInt(comment.star), 0);
            const avgStar = productComments.length > 0 ? totalStars / productComments.length : 1;
            setAverageStar(avgStar);
        }
    });
}, []);
const starComponents = [];
for (let i = 1; i <= averageStar; i++) {
    starComponents.push(<StarComponent key={i} />);
}
  useEffect(() => {
    actions.getProductById(id)
  }, [id])
  const HandelAddProductToCart = () => {
  
    const requestProductCartAPI = {
      productId: productDetail._id,
      quantity: quantity
    }
    addProductToCart(requestProductCartAPI).then((res)=>{
        if(res) {
            const requestProductCart = {
                product: productDetail,
                quantity: quantity
            }
            actionscart.addProductToCart(requestProductCart)
            toast.success("Add Product to Cart Success")
        }
    }, (err) => {
      navigate('/login')
    })
  }
  return (
    <>
      <div className='flex justify-between mt-4'>
        <div css={cssDetail} className='flex justify-between'>
          <div className='w-[246px]'>
            <div>
              <img src={productDetail.images?.slice(0, 1).map((image: any) => image?.response || image?.url)} alt='' className='w-[246px] h-[376px]' />
              
            </div>
            <div className='flex items-center py-5'>
              {starComponents}
              ({starComponents.length})
            </div>
            <div>
              <p className='text-[0.9rem]'>
                #28 in <a href='#'>Fiction & Literature</a>, <a href='#'>Thrillers</a>
              </p>
              <p className='text-[0.9rem]'>
                #34 in <a href='#'>Fiction & Literature</a>, <a href='#'>Thrillers</a>
              </p>
              <p className='text-[0.9rem]'>
                #74 in <a href='#'>Fiction & Literature</a>, <a href='#'>Thrillers</a>
              </p>
            </div>
          </div>
          <div className='px-6 w-[633px]'>
            <h2>{productDetail?.name}</h2>
            <span className='title'>{productDetail?.company}</span>
            <p className='mt-4'>
              by <a href='#'>{productDetail?.author}</a>
            </p>
            <div className='flex mt-6'>
              <div className='title-price border border-[#bbb]'>
                <span>Audiobook</span>
                <div> $0.00</div>
              </div>
              <div className='px-5'>
                <div className='title-price border border-red-600 bg-red-200'>
                  <span>eBook</span>
                  <div> ${productDetail?.newPrice}</div>
                </div>
              </div>
            </div>
            <p className='my-4'>Free with Trial</p>
            <div className='py-3 flex items-center'>
              <QuantityCompoennt listQuantityRemain={productDetail} setQuantity={setQuantity} quantity={quantity} />
              <p className='text-[16px] px-3 font-medium'>available quantity:{productDetail?.quantity}</p>
            </div>

            <hr />

            <h2 className='title-name py-2'>Synopsis:</h2>
            <span>{productDetail?.description}</span>
          </div>
        </div>
        <div className='w-[250px]' css={cssBuy}>
          <h2 className='text-[1.3rem]'>Buy the eBook</h2>
          <div className='flex justify-between py-2'>
            <p>List Price</p>
            <p>
              <del>${productDetail?.cost}</del>USD
            </p>
          </div>

          <div className='flex justify-between '>
            <p className='font-semibold'>yours Price</p>
            <b>${productDetail?.newPrice * quantity} USD</b>
          </div>

          <div className=''>
            <div className='mt-2'>
              <ButtonComponent
                handleColor
                title={'Add to cart'}
                className='w-[200px]'
                onClick={HandelAddProductToCart}
              />
            </div>

            <div className='py-3'>
              <ButtonComponent title={'Buy Now'} className='w-[200px]' />
            </div>
            <ButtonComponent title={'Add to Wishlist'} className='w-[200px]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoDetail

const cssDetail = css`
  a {
    text-decoration: underline;
    font-weight: 600;
  }
  .title-name {
    font-size: 1rem;
  }
  h2 {
    font-family: 'Trebuchet MS', Trebuchet, Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
  }
  .title {
    font-family: 'Trebuchet MS', Trebuchet, Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    color: #595959;
    display: inline-block;
  }
  .title-price {
    text-align: center;
    width: 120px;
    padding: 0.3rem 0.3rem 0.5rem 0.5rem;
    // border: 1px solid #bbb;
  }
`
const cssBuy = css`
  box-shadow: 0 0 7px #e6e6e6;
  padding: 2rem 1.5rem;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  height: 320px;
`
