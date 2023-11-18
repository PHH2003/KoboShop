import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '~/app/components/parts/button/button.component'
import toast from 'react-hot-toast'
import { useCartRedux } from '../../../redux/hook/useCartReducer'
const BuyCart = () => {
  const {data: { listBuyProduct }} = useCartRedux()
  const navigate = useNavigate()
      const total = listBuyProduct.reduce((accumulator: any, cartItem: any) => {
          const productPrice = cartItem.product.newPrice;
          const quantity = cartItem.quantity;
          const itemTotal = productPrice * quantity;
          return accumulator + itemTotal;
      }, 0);

  const handleNavigate = () => {
    if (listBuyProduct.length == 0) {
      toast.error('no buy product')
    } else {
      navigate('/checkout')
    }
  }
  return (
    <div className='w-[25%] border p-4 h-[150px] mt-6' css={cssBuy}>
      <div className='flex justify-between py-2 text-[#595959]'>
        <p className='font-mono'>Total amount:</p>
        <span className='font-mono'>${total?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
      </div>
      <div className='py-6'>
        <ButtonComponent onClick={handleNavigate} title={'Payment'} handleColor className='sm:w-[250px] hover:bg-[#595959] max-sm:w-[100%]' />
      </div>
    </div>
  )
}

export default BuyCart

const cssBuy = css``
