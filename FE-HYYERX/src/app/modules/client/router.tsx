import Blog from './blog/blog.component'
import DetailComponent from './detail/detail.component'
import Help from './help/help.component'
import Home from './home/home.component'
import { RouteObject } from 'react-router-dom'

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
  { path: '/detail/:id', element: <DetailComponent /> }
]