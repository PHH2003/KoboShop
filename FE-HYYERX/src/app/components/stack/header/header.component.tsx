import React from 'react'
import { css } from '@emotion/react'
import {BsSearch, BsHeart} from 'react-icons/bs'
import {GiShoppingCart} from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div css={cssHeader} className='shadow-md'>
      <div className='bg-[#f5f5f5]'>
          <div className='flex justify-between w-[1140px] m-auto pb-2 pt-2 text-xs'>
            <div className=''>
              <a href="#"><h2 className='text-[#BF0000] font-semibold italic'>Earn Rewards</h2></a>
            </div>
            <div className='menu flex'>
              {/* <div className='px-3 text-[#595959] font-semibold'>English</div> */}
              <select  name="" id="" className='px-3 text-[#595959] font-semibold w-[82px] bg-[#F5F5F5]'>
                <option value="0">English</option>
                <option value="1">Vietnamese</option>
              </select>
              <a href="#" className='px-3 text-[#595959] font-semibold'>Gift Cards</a>
              <a href="/blog" className='px-3 text-[#595959] font-semibold'>Blog</a>
              <a href="/help" className='px-3 text-[#595959] font-semibold  '>Help</a>
            </div>
          </div>
      </div>
      <div className='flex justify-between m-auto w-[1140px] mt-2'>
        <div className='flex items-center'>
          <Link to={"/"}>
            <img src="https://res.cloudinary.com/dpfndtcya/image/upload/v1695868388/Screenshot_2023-09-28_093249_lfrm2d.png" alt="" />
          </Link>
          <div className='flex mx-10'>
            <input
                type='text'
                className='px-8 w-[448px] border border-[#D8D8D8] py-3 text-[11px]'
                placeholder='Search by title, author, series or ISBN'
            />
            <button className='bg-black text-white px-[10px] py-[10px]'>
              <BsSearch size={22}/>
            </button>
          </div>
        </div>
        <div className=' flex items-center'>

          <div className='icon-header'>
            <Link to={"/"}>
              <button className='px-3 text-[#595959] font-semibold'>
                <BsHeart size={28} className='m-auto mt-3 ' />
                <a href="" className='text-xs'>Wishlist</a>  
              </button>
            </Link>
            
            <Link to={"/cart"}>
              <button className='px-3 text-[#595959] font-semibold'>
                <GiShoppingCart  size={38}/>
                <a href="" className='text-xs'>Cart</a>
              </button>  
            </Link>
          </div>
         
          <div className='px-3 pt-3'>
            <button className='button-register bg-[#BF0000] py-3 px-5 text-sm font-semibold text-white'>Create account</button>
            <p className='button-signin text-xs mt-2 text-[#595959] font-semibold'>Have an account? <button className='text-[#BF0000]'>Sign in</button></p>
          </div>

        </div>
      </div>
      <div className='m-auto w-[1140px] mt-2'>
        <ul className=' w-[300px] flex justify-between italic pb-7'>
          <li><a href="/">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="/help">Contact</a></li>
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
li a:hover{
  color: red;
  transition: color 0.3s ease;
  text-decoration: underline;
}
.icon-header button:hover {
  color: #BF0000;
}
.icon-header button:hover .text-xs {
  color: #BF0000; 
}
.button-register:hover {
  background-color: #595959;
}
.button-signin button:hover {
  color: #FF0000;
}
.menu a:hover,
select:hover,
.menu div:hover {
  color: #BF0000;
}
`