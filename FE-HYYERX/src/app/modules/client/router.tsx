import Home from "./home/home.component";
import { RouteObject } from 'react-router-dom'

export const clientRouter: RouteObject[]= [
 {
  path: '/',
  element: <Home/>
 }
]

