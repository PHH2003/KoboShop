import express from 'express'
import routerProduct from './product.router.js'
const router = express.Router()

const arrayRouter = [
    {path:'/product', route:routerProduct}
]
arrayRouter.forEach((route)=>{
    router.use(route.path, route.route)
})

export default router