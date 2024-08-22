import {
  UserOutlined,
  FileOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  OrderedListOutlined,
  CommentOutlined,
  LineChartOutlined,
  MoneyCollectOutlined,
  FileAddOutlined,
  CustomerServiceOutlined
} from '@ant-design/icons'
import { SiAdminer } from 'react-icons/si'
export const MenuDashboard = [
  {
    key: '/admin',
    icon: <SiAdminer />,
    label: 'Dashboard'
  },
  {
    key: '/admin/category',
    icon: <FileOutlined />,
    label: 'Category'
  },
  {
    key: '/admin/product',
    icon: <OrderedListOutlined />,
    label: 'Product'
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
    key: '/admin/contact',
    icon: <CustomerServiceOutlined />,
    label: 'Contact'
  },
  {
    key: '/admin/statistic',
    icon: <LineChartOutlined />,
    label: 'Statistical'
  },
  {
    key: '/admin/voucher',
    icon: <MoneyCollectOutlined />,
    label: 'Voucher'
  },
  {
    key: '/admin/slice',
    icon: <FileAddOutlined />,
    label: 'Slice'
  },
  {
    key: '/',
    icon: <HomeOutlined />,
    label: 'Home'
  }
]
