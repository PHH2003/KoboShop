import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { MenuDashboard } from '~/app/modules/admin/constance/menu-dashboard.component';

const { Header, Sider, Content } = Layout;

const DefaultAdmin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

    const navigate = useNavigate()
    const handClickMenuDashboard = (data: any) => {
        navigate(data.key)
    } 

  return (
    <Layout style={{height:'100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='mr-5'>
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
        <Header style={{ padding: 0, background: colorBgContainer }}>
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
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultAdmin;