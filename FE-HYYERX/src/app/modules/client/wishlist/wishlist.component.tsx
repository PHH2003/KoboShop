import { css } from '@emotion/react'
import React from 'react'
import ButtonComponent from '~/app/components/parts/button/button.component'
import PaginationComponent from '~/app/components/parts/pagination/pagination.component'
import StarComponent from '~/app/components/parts/star/star.component'

const WishlistComponent = () => {
  return (
    <div css={cssWishlist} className='w-[1140px] m-auto'>
        <h1 className='font-mono text-3xl font-semibold py-6'>My Wishlist (2 items)</h1>
      
      <div className='item-wishlist flex border my-6 '>
        <div className='w-[80%] p-6 flex'>
          <img className='w-[180px] h-[276px]' src="https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1" alt="" />
          <div className='px-7'>
            <h2 className='hover:text-[#BF0000]'>The Running Grave</h2>
            <span>by <a className='underline hover:text-[#BF0000]' href="#">Carla Kovach</a></span>
            <div className='flex py-4'>
            <StarComponent/>
            <StarComponent/>
            <StarComponent/>
            <StarComponent/>
            <StarComponent/>
            </div>
            <hr className='py-2'/>
            <div className=''>
            <p>
              Lauren returns home from celebrating her engagement with friends and stumbles as she gets out of the taxi. So what if her best friend Sienna didn’t show up? Lauren had a good night anyway. As she walks towards the small house she shares with her fiancé, Robbie, she’s surprised to see every window in total darkness. And when she calls his name, the house remains silent. Where is Robbie?...
            </p>
            <p className='text-right'>... <a className='underline hover:text-[#BF0000]' href="/detail/123">Read more</a></p>
            </div>

          </div>

        </div>
        <div className='border-l-[1px] my-6'></div>
        <div className='w-[20%] p-4 '>
          <div className='price-wishlist text-center'>$26.29 USD</div>
          <div className="py-6">
            <ButtonComponent  title={"Add to cart"} className="w-[200px] hover:bg-[#BF0000]" />
          </div>
          <div className='text-center'>
            <button className='text-remove underline font-medium hover:text-[#BF0000] '>Remove from Wishlist</button>
          </div>
        </div>

      </div> 

      <div className='item-wishlist flex border my-6 '>
        <div className='w-[80%] p-6 flex'>
          <img className='w-[180px] h-[276px]' src="https://th.bing.com/th/id/OIP.nVRzDIJP6TFqhcO0Hf-3RgHaJr?pid=ImgDet&rs=1" alt="" />
          <div className='px-7'>
            <h2 className='hover:text-[#BF0000]'>The Running Grave</h2>
            <span>by <a className='underline hover:text-[#BF0000]' href="#">Carla Kovach</a></span>
            <div className='flex py-4'>
            <StarComponent/>
            <StarComponent/>
            <StarComponent/>
            <StarComponent/>
            <StarComponent/>
            </div>
            <hr className='py-2'/>
            <div className=''>
            <p>
              Lauren returns home from celebrating her engagement with friends and stumbles as she gets out of the taxi. So what if her best friend Sienna didn’t show up? Lauren had a good night anyway. As she walks towards the small house she shares with her fiancé, Robbie, she’s surprised to see every window in total darkness. And when she calls his name, the house remains silent. Where is Robbie?...
            </p>
            <p className='text-right'>... <a className='underline hover:text-[#BF0000]' href="/detail/123">Read more</a></p>
            </div>

          </div>

        </div>
        <div className='border-l-[1px] my-6'></div>
        <div className='w-[20%] p-4 '>
          <div className='price-wishlist text-center'>$26.29 USD</div>
          <div className="py-6">
            <ButtonComponent  title={"Add to cart"} className="w-[200px] hover:bg-[#BF0000]" />
          </div>
          <div className='text-center'>
            <button className='text-remove underline font-medium hover:text-[#BF0000] '>Remove from Wishlist</button>
          </div>
        </div>

      </div>
      <div className='px-[432px]'>
        <PaginationComponent/>
      </div>

    </div>
  )
}

export default WishlistComponent

const cssWishlist = css`
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
span a{
  text-decoration:underline;
  font-weight:600;
}
.item-wishlist:hover{
  transition: box-shadow 0.1s ease;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
}
// .item-wishlist:hover{
//   .item-wishlist
// }
`