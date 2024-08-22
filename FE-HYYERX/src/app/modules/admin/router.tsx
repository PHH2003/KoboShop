import { RouteObject } from 'react-router-dom'
import ProductAdminComponent from './product-admin/product-admin.component'
import UserAdminComponent from './user-admin/user-admin.component'
import CategoryAdmin from './category-admin/category-admin.component'
import OrderAdminComponent from './order-admin/order-admin.component'
import CommentAdminComponent from './comment-admin/comment-admin.component'
import DashboardAdmin from './dashboard-admin/dashboard-admin.component'
import ContentAdmin from './content-admin/content-admin.component'
import ContactAdmin from './contact-admin/contact-admin.component'
import Statictis from './statictis/statictis.component'
import VorcherAdmin from './vorcher-admin/vorcher-admin.component'
import SliceComponent from './slice/slice.component'

export const AdminRouter: RouteObject[] = [
  {
    path: '',
    element: <DashboardAdmin />
  },
  {
    path: 'product',
    element: <ProductAdminComponent />
  },
  {
    path: 'user',
    element: <UserAdminComponent />
  },
  {
    path: 'category',
    element: <CategoryAdmin />
  },
  {
    path: 'order',
    element: <OrderAdminComponent />
  },
  {
    path: 'comment',
    element: <CommentAdminComponent />
  },
  {
    path: 'content',
    element: <ContentAdmin />
  },
  {
    path: 'voucher',
    element: <VorcherAdmin />
  },
  {
    path: 'statistic',
    element: <Statictis />
  },
  {
    path: 'contact',
    element: <ContactAdmin />
  },
  {
    path: 'slice',
    element: <SliceComponent />
  }
]
