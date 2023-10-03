import React from 'react'
import InfoCart from './components/info-cart/info-cart.component'
import BuyCart from './components/buy-cart/buy-cart.component'
import LinkCart from './components/link-cart/link-cart.component'

const CartComponent = () => {
  return (
    <div className='w-[1140px] m-auto'>
        <div className='mt-3'>
            <LinkCart/>
        </div>
        
        <div className='text-center text-3xl font-sans text-[#595959] py-7'>
            <h1>CART</h1>
        </div>
        
        <div className='flex justify-between'>
            <InfoCart/>
            <BuyCart/>
        </div>

    </div>
  )
}

export default CartComponent