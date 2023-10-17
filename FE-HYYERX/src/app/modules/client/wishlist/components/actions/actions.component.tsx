import { css } from '@emotion/react'
import React from 'react'
import ButtonComponent from '~/app/components/parts/button/button.component'

const ActionsComponent = () => {
  return (
    <div className='w-[20%] p-4 ' css={cssActions}>
    <div className='price-wishlist text-center'>$26.29 USD</div>
    <div className="py-6">
      <ButtonComponent  handleColor title={"Add to cart"} className="w-[200px] hover:bg-[#595959]" />
    </div>
    <div className='text-center'>
      <button className='text-remove underline font-medium hover:text-[#BF0000] '>Remove from Wishlist</button>
    </div>
  </div>
  )
}

export default ActionsComponent

const cssActions = css`
.price-wishlist,
h2{
  font-family: "Trebuchet MS",Trebuchet,Arial,Helvetica,sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
}
.text-remove{
    font-family: "Trebuchet MS",Trebuchet,Arial,Helvetica,sans-serif;
  }
`