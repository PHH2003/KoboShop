import express from 'express'
import categoryController from '../modules/category/controller/index.js'
import { checkRoleAdminAuthorization, veryFileToken } from '../middlewares/checkAuthorization.js'

const router = express.Router()
router.get('/', categoryController.getAllCategory)
router.get('/search', categoryController.searchCategory)
router.get('/:id', categoryController.getOneCategory)
router.use(veryFileToken)
router.use(checkRoleAdminAuthorization)
router.post('/add', categoryController.createCategory)
router.delete('/delete/:id', categoryController.deleteCategory)
router.put('/update/:id', categoryController.updateCategory)
export default router