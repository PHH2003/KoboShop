import React, { useEffect } from 'react'
import InfoCart from './components/info-cart/info-cart.component'
import BuyCart from './components/buy-cart/buy-cart.component'
import LinkCart from './components/link-cart/link-cart.component'
import { useCartRedux } from '../redux/hook/useCartReducer'

const CartComponent = () => {
  const { data: { carts }, actions } = useCartRedux()
  useEffect(() => {
    actions.getAllCarts()
  }, [])
  return (
    <div className='w-[1140px] m-auto'>
      <div className='mt-3'>
        <LinkCart />
      </div>

      <div className='text-center text-3xl font-semibold text-[#595959] py-7'>
        <h1>SHOPPING CART</h1>
      </div>

      <div>
        {carts.length == 0 ? (
          <div className=''>
            <img className='w-[200px] m-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiO3E4voNluZiGk3Vfp9H1dtMJIEh2EKl7YcVpJD7V3uGvZMXKC4U-CzYUjXXjRKa4kVk&usqp=CAU" alt="" />
          </div>) :
          (<div className='sm:flex justify-between'>
            <InfoCart />
            <BuyCart />
          </div>)}
      </div>

    </div>
  )
}

export default CartComponent