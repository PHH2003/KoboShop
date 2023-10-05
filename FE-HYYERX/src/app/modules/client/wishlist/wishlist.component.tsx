import { css } from '@emotion/react'
import React from 'react'
import ButtonComponent from '~/app/components/parts/button/button.component'
import PaginationComponent from '~/app/components/parts/pagination/pagination.component'
import StarComponent from '~/app/components/parts/star/star.component'
import ImginfoComponent from './components/img-info/img-info.component'
import ActionsComponent from './components/actions/actions.component'

const WishlistComponent = () => {
  return (
    <div className='w-[1140px] m-auto' css={cssWishlist}>
        <h1 className='font-mono text-3xl font-semibold py-6'>My Wishlist (2 items)</h1>
        <div className='item-wishlist flex border my-9'>
          <ImginfoComponent/>
          <div className='border-l-[1px] my-6'></div>
          <ActionsComponent/>
        </div>

        <div className='item-wishlist flex border my-6'>
          <ImginfoComponent/>
          <div className='border-l-[1px] my-6'></div>
          <ActionsComponent/>
        </div>
        
      <div className='px-[432px]'>
        <PaginationComponent/>
      </div>

    </div>
  )
}

export default WishlistComponent

const cssWishlist = css`
.item-wishlist:hover{
  transition: box-shadow 0.1s ease;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
}
`