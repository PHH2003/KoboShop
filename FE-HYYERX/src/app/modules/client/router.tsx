import Blog from './blog/blog.component'
import CartComponent from './cart/cart.component'
import DetailComponent from './detail/detail.component'
import Help from './help/help.component'
import Home from './home/home.component'
import { RouteObject } from 'react-router-dom'
import WishlistComponent from './wishlist/wishlist.component'

export const clientRouter: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/help',
    element: <Help />
  },
  { path: '/detail/:id',
    element: <DetailComponent /> 
  },
  { path: '/cart',
    element: <CartComponent/>
  },
  { path: '/wishlish',
  element: <WishlistComponent/>
  }
]
