import express from 'express'
import productController from '../modules/product/controller/index.js'
import upload from '../config/configCloudinary.js'

const router = express.Router()
router.use(upload.array('file', 3))
router.post('/add', productController.createProduct)
export default router