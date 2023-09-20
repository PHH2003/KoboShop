import express from 'express'
import productController from '../modules/product/controller/index.js'
import upload from '../config/configCloudinary.js'
import { checkRoleAdminAuthorization, veryFileToken } from '../middlewares/checkAuthorization.js'

const router = express.Router()
router.get('/', productController.getAllProduct)
router.get('/:id', productController.getOneProduct)

router.use(veryFileToken)
router.use(checkRoleAdminAuthorization)
router.use(upload.array('file', 3))
router.post('/add', productController.createProduct)
router.delete('/delete/:id', productController.deleteProduct)
router.put('/update/:id', productController.updateProduct)
export default router