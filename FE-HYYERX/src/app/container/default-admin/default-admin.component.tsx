import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { MenuDashboard } from '~/app/modules/admin/constance/menu-dashboard.component';
import { css } from '@emotion/react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiBell } from 'react-icons/bi';
const { Header, Sider, Content } = Layout;

const DefaultAdmin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const navigate = useNavigate()
  const handClickMenuDashboard = (data: any) => {
    navigate(data.key)
  }

  return (
    <Layout css={cssLayout} style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div css={cssLogoAdmin} className='mr-5'>
          <img src="https://res.cloudinary.com/dpfndtcya/image/upload/t_logo-kobo-web-admin/v1696241284/rakuten-kobo1-removebg-preview_efmks8.png" alt="" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={MenuDashboard}
          onSelect={handClickMenuDashboard}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='author flex mr-[24px] gap-[24px]'>
            <div css={cssCartMain} className='cart-main relative mt-5'>
              <Link to={'/admin/support'}>
                <AiOutlineMail className='font-bold' />
              </Link>
              <span className='absolute show-count'>2</span>
            </div>

            <div css={cssCartMain} className='cart-main relative mt-5'>
              <Link to={'/admin/order'}>
                <BiBell className='font-bold' />
              </Link>
              <span className='absolute show-count'>4</span>
            </div>

            <div className='flex gap-[4px]'>
              <img
                className='author-img h-[36px] m-auto object-cover'
                width={'36px'}
                src='https://cdn1.iconfinder.com/data/icons/flags-36/512/Vietnam_Country_flag-512.png'
              />
              <p className=''>Việt Nam</p>
            </div>
            <div className='border-[1px] h-[40px] m-auto'></div>
            <img
              className='author-img h-[36px] m-auto rounded-[50%] object-cover'
              width={'36px'}
              src='https://banner2.cleanpng.com/20180517/uzq/kisspng-computer-icons-user-profile-male-avatar-5afd8d7b2682b3.7338522715265662671577.jpg'
            />
            <p className='pr-8'>Admin</p>
          </div>
        </Header>
        <Content
          style={{
            margin: '0 16px',
            marginBottom: '24px',
            padding: 24,
            minHeight: 280,
            overflowY: 'auto',
            background: colorBgContainer
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
} 

export default DefaultAdmin

const cssLogoAdmin = css`
  color: white;
  margin: 10px;
  padding: 10px 10px;
  text-align: center;
  background-color: white;
  .ant-menu-item-selected {
    background-color: #fff;
  }
`
const cssLayout = css`
  .ant-menu {
    margin-top: 20px;
  }
  .ant-menu-item-selected,
  .ant-menu-item-active,
  .ant-menu-item-selected:active {
    background-color: #ffaa00 !important;
    font-size: 16px;
  }
  .ant-menu-item-icon {
    font-size: 16px !important;
    margin-right: 8px;
  }
`
const cssCartMain = css`
  .show-count {
    top: 0px;
    right: 0px;
    border-radius: 50px;
    background: #ef4444;
    font-size: 1rem;
    color: white;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  position: relative;
  display: block;
  height: 100%;
  padding: 8px 14px;
  font-size: 22px;
  border-radius: 8px;
  color: var(--color-black);
  cursor: pointer;
  @media (min-width: 0) and (max-width: 739px) {
    padding: 0;
    margin-left: 10px;
  }
`