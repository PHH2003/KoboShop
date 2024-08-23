import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { BsSearch, BsHeart } from 'react-icons/bs'
import { GiShoppingCart } from 'react-icons/gi'
import { VscAccount } from 'react-icons/vsc'
import { AiOutlineUser } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useCartRedux } from '~/app/modules/client/redux/hook/useCartReducer'
import { Avatar, Badge, Space } from 'antd'
import Marquee from 'react-fast-marquee'
import { RiAdminFill } from 'react-icons/ri'
import { getOneUserSystem } from '~/app/api/auth/auth.api'

const Header = () => {
  const accsetToken = localStorage.getItem('accessToken')
  const [checkAdmin, setCheckAdmin] = useState<string | null>(null)
  const [dataAccount, setDataAccount] = useState('My Accout')
  const checkAuth = localStorage.getItem('userId')
  useEffect(() => {
    if (checkAuth) {
      const fetchUserData = async () => {
        const userData = await getOneUserSystem(checkAuth)
        const role = userData?.data?.role
        const nameUser = userData?.data?.fullname
        setCheckAdmin(role)
        setDataAccount(nameUser)
      }
      fetchUserData()
    }
  }, [])

  const [searchItem, setSearchItem] = useState('')
  const handleSearch = (event: any) => {
    setSearchItem(event.target.value)
  }
  const handleSearchProduct = () => {
    navigate(`product?q=${searchItem}`)
    location.reload()
  }
  const navigate = useNavigate()
  const handelLogout = () => {
    localStorage.clear()
    navigate('/login')
  }
  const {
    data: { carts },
    actions
  } = useCartRedux()
  useEffect(() => {
    actions.getAllCarts()
  }, [])
  return (
    <div css={cssHeader} className='shadow-md'>
      <div>
        <Marquee direction='left' className=' z-0' style={{ backgroundColor: '#BF0000' }}>
          <p style={{ padding: '0px 50px' }} className='text-[15px] text-white italic flex'>
            <img className='w-auto h-[20px] pt-[3px]' src='../../../../../public/logo-2.png' alt='Logo' />
            Thank you for always supporting us! In order for you not to miss attractive incentives during the holidays,
            please check the details on our official website. We are committed to bringing the best shopping experience
            with special promotions to express your trust in your trust. Visit the Regularly website to update the
            latest information!
          </p>
        </Marquee>
      </div>
      <div className='bg-[#f5f5f5]'>
        <div className='flex justify-between w-[1140px] m-auto pb-2 pt-2 text-xs'>
          <div className=''>
            <a href='#'>
              <h2 className='text-[#BF0000] font-semibold italic'>Wellcome to Rakuten kobo</h2>
            </a>
          </div>
          <div className='menu flex'>
            {/* <div className='px-3 text-[#595959] font-semibold'>English</div> */}
            <select name='' id='' className='px-3 text-[#595959] font-semibold w-[82px] bg-[#F5F5F5]'>
              <option value='0'>English</option>
              <option value='1'>Vietnamese</option>
            </select>
            <Link to={'/gift-cards'}>
              <a className='px-3 text-[#595959] font-semibold'>Gift Cards</a>
            </Link>
            <Link to={'/blog'}>
              <a className='px-3 text-[#595959] font-semibold'>Blog</a>
            </Link>
            <Link to={'/contact'}>
              <a className='px-3 text-[#595959] font-semibold  '>Contact</a>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex justify-between m-auto w-[1140px] mt-3'>
        <div className='flex items-center'>
          <Link to={'/'}>
            <img
              src='https://res.cloudinary.com/dpfndtcya/image/upload/v1695868388/Screenshot_2023-09-28_093249_lfrm2d.png'
              alt=''
            />
          </Link>
          <div className='flex mx-10'>
            <input
              onChange={handleSearch}
              type='text'
              className='px-8 w-[448px] border border-[#D8D8D8] py-3 text-[11px] focus:outline-none'
              placeholder='Search by title, author, series or ISBN'
            />
            <button className='bg-black text-white px-[10px] py-[10px]' onClick={handleSearchProduct}>
              <BsSearch size={22} />
            </button>
          </div>
        </div>
        <div className=' flex items-center'>
          <div className='icon-header'>
            <Link to={'/wishlish'}>
              <button className='px-3 text-[#595959] font-semibold'>
                <BsHeart size={28} className='m-auto mt-3' />
                <a href='/' className='text-xs'>
                  Wishlist
                </a>
              </button>
            </Link>

            <Link to={'/cart'}>
              <button className='px-3 '>
                <Space size='large'>
                  <Badge count={carts?.length > 0 ? carts?.length : 0}>
                    <div className='text-[#595959] font-semibold'>
                      <GiShoppingCart size={38} />
                      <a href='' className='text-xs'>
                        Cart
                      </a>
                    </div>
                  </Badge>
                </Space>
              </button>
            </Link>
          </div>
          {accsetToken ? (
            <div className='title'>
              <button className='px-3 text-[#595959] font-semibold pt-[6px]'>
                <VscAccount className='m-auto' size={34} />
                <span>
                  <p className='text-xs mt-2'>{dataAccount}</p>
                  <ul className='links'>
                    <li>
                      <button>
                        <p
                          className='hover:text-red-700 font-normal text-[15px] flex items-center'
                          onClick={handelLogout}
                        >
                          {' '}
                          <p className='px-2'>
                            <BiLogOut className='text-[20px]' />
                          </p>{' '}
                          Log out
                        </p>
                        <Link to={'/management'}>
                          <p className='hover:text-red-700 font-normal text-[15px] flex items-center py-2'>
                            <p className='px-2'>
                              <AiOutlineUser className='text-[20px]' />{' '}
                            </p>{' '}
                            Management
                          </p>
                        </Link>
                        {checkAdmin === 'ADMIN' && (
                          <Link to={'/admin'}>
                            <p className='hover:text-red-700 font-normal text-[15px] flex items-center'>
                              <p className='px-2'>
                                <RiAdminFill className='text-[20px]' />{' '}
                              </p>{' '}
                              Admin
                            </p>
                          </Link>
                        )}
                      </button>
                    </li>
                  </ul>
                </span>
              </button>
            </div>
          ) : (
            <div className='px-3 pt-3'>
              <Link to={'/register'}>
                <button className='button-register bg-[#BF0000] py-3 px-5 text-sm font-semibold text-white'>
                  Create account
                </button>
              </Link>
              <Link to={'/login'}>
                <p className='button-signin text-xs mt-2 text-[#595959] font-semibold'>
                  Have an account? <button className='text-[#BF0000]'>Sign in</button>
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className='m-auto w-[1140px] mt-2'>
        <ul className=' w-[300px] flex justify-between italic pb-7'>
          <Link to={'/'}>
            <li>
              <a href=''>Home</a>
            </li>{' '}
          </Link>
          <Link to={'/product'}>
            <li>
              <a>Product</a>
            </li>
          </Link>
          <Link to={'/contact'}>
            <li>
              <a>Contact</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header

const cssHeader = css`
  li a {
    font-weight: 600;
    font-size: 1.2rem;
  }
  li a:hover {
    color: red;
    transition: color 0.3s ease;
    text-decoration: underline;
  }
  .icon-header button:hover {
    color: #bf0000;
  }
  .icon-header button:hover .text-xs {
    color: #bf0000;
  }
  .button-register:hover {
    background-color: #595959;
  }
  .button-signin button:hover {
    color: #ff0000;
  }
  .menu a:hover,
  select:hover,
  .menu div:hover {
    color: #bf0000;
  }
  .links {
    list-style: none;
    background-color: white;
    box-shadow: 0 0 7px gray;
    position: absolute;
    top: 100%;
    max-width: 200px; /* Thay đổi giá trị theo nhu cầu của bạn */
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    z-index: 1;
    visibility: hidden;
    text-align: center; /* Căn giữa chữ trong phần tử */
  }

  .title:hover .links {
    visibility: visible;
  }

  .links li {
    padding: 10px; /* Thay đổi theo nhu cầu để thêm không gian quanh chữ */
  }
  .title {
    cursor: pointer;
    position: relative;
  }
`
