
import { RouteObject } from 'react-router-dom'
import ProductAdminComponent from './product-admin/product-admin.component'
import UserAdminComponent from './user-admin/user-admin.component'
import CategoryAdmin from './category-admin/category-admin.component'
import OrderAdminComponent from './order-admin/order-admin.component'
import CommentAdminComponent from './comment-admin/comment-admin.component'

export const AdminRouter: RouteObject[] = [
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
  { path: 'order',
   element: <OrderAdminComponent /> 
  },
  {
    path: "comment",
    element: <CommentAdminComponent />
  }
]
