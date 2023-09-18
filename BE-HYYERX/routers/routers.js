import express from 'express'
import routerProduct from './product.router.js'
import routerCategory from './category.router.js'
import routerAuth from './auth.reouter.js'
const router = express.Router()

const arrayRouter = [
    {path:'/product', route:routerProduct},
    {path:'/category', route: routerCategory},
    {path:'/auth', route: routerAuth}
]
arrayRouter.forEach((route)=>{
    router.use(route.path, route.route)
})

export default router