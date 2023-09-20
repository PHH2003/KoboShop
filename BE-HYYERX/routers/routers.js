import express from 'express'
import routerProduct from './product.router.js'
import routerCategory from './category.router.js'
import routerAuth from './auth.router.js'
import routerCart from './cart.router.js'
const router = express.Router()

const arrayRouter = [
    {path:'/product', route:routerProduct},
    {path:'/category', route: routerCategory},
    {path:'/auth', route: routerAuth},
    {path: '/cart', route: routerCart}
]
arrayRouter.forEach((route)=>{
    router.use(route.path, route.route)
})

export default router