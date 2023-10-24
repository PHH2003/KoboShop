import {
  UserOutlined,
  FileOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  OrderedListOutlined,
  CommentOutlined
} from '@ant-design/icons'

export const MenuDashboard = [
  {
    key: '/admin/product',
    icon: <OrderedListOutlined />,
    label: 'Product'
  },
  {
    key: '/admin/category',
    icon: <FileOutlined />,
    label: 'Category'
  },
  {
    key: '/admin/order',
    icon: <ShoppingCartOutlined />,
    label: 'Order'
  },
  {
    key: '/admin/user',
    icon: <UserOutlined />,
    label: 'user'
  },
  {
    key: '/admin/comment',
    icon: <CommentOutlined />,
    label: 'Comment'
  },
  {
    key: '/',
    icon: <HomeOutlined />,
    label: 'Home'
  }
]
