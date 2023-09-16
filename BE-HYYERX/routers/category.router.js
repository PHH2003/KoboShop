import express from 'express'
import categoryController from '../modules/category/controller/index.js'

const router = express.Router()
router.post('/add', categoryController.createCategory)
router.get('/', categoryController.getAllCategory)
router.get('/:id', categoryController.getOneCategory)
router.delete('/delete/:id', categoryController.deleteCategory)
router.put('/update/:id', categoryController.updateCategory)
export default router