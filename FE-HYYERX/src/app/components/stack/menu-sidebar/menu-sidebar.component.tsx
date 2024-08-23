import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useState } from 'react'
import { BiSupport } from 'react-icons/bi'
import { RiLuggageCartFill } from 'react-icons/ri'
import { BiSolidUserBadge } from 'react-icons/bi'
import { getOneUserSystem } from '~/app/api/auth/auth.api'
import { Link } from 'react-router-dom'
import { GoldOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
interface MenuSideBarProps {
  props?: any
}

const MenuSideBar: FunctionComponent<MenuSideBarProps> = () => {
  const [user, setUser] = useState<any>()
  const id = localStorage.getItem('userId')
  useEffect(() => {
    getOneUserSystem(id).then((res: any) => {
      setUser(res.data)
    })
  }, [id])
  return (
    <div css={cssMenuSideBar} className='w-[100%]]sm:w-[200px] w-full'>
      <div className='flex items-center flex-col sm:flex-row'>
        <div className='mb-4 sm:mb-0'>
          <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png' alt='' className='w-[50px]' />
        </div>
        <div>
          <p className='font-semibold text-[17px] sm:px-4 text-center sm:text-left'>{user?.fullname}</p>
        </div>
      </div>

      <div className='user-info'>
        <ul>
          <li>
            <Link to={'/management'}>
              <a href='#'>
                <UserOutlined /> <p>Thông tin tài khoản</p>
              </a>
            </Link>
          </li>
          <li>
            <Link to={'/management'}>
              <a href='#'>
                {' '}
                <GoldOutlined />
                <p> Quản lý đơn hàng</p>
              </a>
            </Link>
          </li>
          <li>
            <Link to={'/contact'}>
              <a href='#'>
                {' '}
                <PhoneOutlined />
                <p>Hỗ trợ</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuSideBar
const cssMenuSideBar = css`
  border-right: 1px solid gray;
  margin-bottom:10px;
  li {
    padding: 10px 0px;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #808285;
  }
  span {
    font-size: 20px;
    margin-right: 5px;
  }
    .user-info{
     padding-top:5px;
     margin-right: 10px;
    }
  .user-info a {
    display: flex;
    gap: 4px;
  }
  .user-info p {
    line-height: 22px;
  }
  @media (min-width: 0) and (max-width: 739px) {
    border-right: none;
    .w-full {
      max-width: 100%;
    }
    .text-center {
      text-align: center;
    }
    .text-left {
      text-align: left;
    }
  }
`
