import {
    UserOutlined,
    FileOutlined ,
    HomeOutlined,
    ShoppingCartOutlined,
    OrderedListOutlined,
    LogoutOutlined 
  
  } from '@ant-design/icons';

export const MenuDashboard = [
      {
        key: '/admin',
        icon: <HomeOutlined />,
        label: 'Home',
      },
      {
        key: '/admin/product',
        icon: <OrderedListOutlined />,
        label: 'Product',
      },
      {
        key: '/admin/category',
        icon: <FileOutlined />,
        label: 'Category',
      },
      {
        key: '/admin/order',
        icon: <ShoppingCartOutlined />,
        label: 'Order',
      },
      {
        key: '/admin/user',
        icon: <UserOutlined />,
        label: 'user',
      },
      {
        key: '/',
        icon: <LogoutOutlined />,
        label: 'Out',
      }
]