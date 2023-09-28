import React from 'react'
import { css } from '@emotion/react'
import {BsSearch, BsHeart} from 'react-icons/bs'
import {GiShoppingCart} from 'react-icons/gi'
const Header = () => {
  return (
    <div css={cssHeader} className=''>
      <div className='bg-[#f5f5f5]'>
          <div className='flex justify-between w-[1140px] m-auto pb-2 pt-2 text-xs'>
            <div className=''>
            <a href="#"><h2 className='text-[#BF0000]'>Earn Rewards</h2></a>
            </div>
            <div className='flex'>
              <div className='px-3'>English</div>
              <a href="#" className='px-3'>Gift Cards</a>
              <a href="#" className='px-3'>Blog</a>
              <a href="#" className='px-3'>Help</a>
              </div>
            </div>
      </div>
      <div className='flex justify-between m-auto w-[1140px] mt-2'>
        <div className='flex items-center'>
          <img src="https://res.cloudinary.com/dpfndtcya/image/upload/v1695868388/Screenshot_2023-09-28_093249_lfrm2d.png" alt="" />
          <div className='flex '>
            <input
                type='text'
                className='px-8 w-[448px] border border-[#D8D8D8] py-3 text-[11px]'
                placeholder='Search by title, author, series or ISBN'
            />
          </div>
          <button className='bg-black text-white px-[10px] py-[10px]'>
              <BsSearch size={22}/>
            </button>
        </div>
        <div className='flex items-center'>
    
            <button className='px-3 '>
              <BsHeart size={28} className='m-auto mt-3'/>
              <a href="" className='text-xs'>Wishlist</a>  
            </button>

            <button className='px-3'>
              <GiShoppingCart size={38}/>
              <a href="" className='text-xs'>Cart</a>
            </button>           
        
          <div className='px-3 pt-3'>
            <button className='bg-[#BF0000] py-3 px-5 text-sm font-semibold text-white'>Create account</button>
            <p className='text-xs mt-2'>Have an account? <a href="" className='text-[#BF0000] '>Sign in</a></p>
          </div>

        </div>
      </div>
      <div className='m-auto w-[1140px] mt-2'>
        <ul className=' w-[300px] flex justify-between'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header

const cssHeader = css `
li a{
  font-weight: 600;
  font-size: 1.2rem;
}
`