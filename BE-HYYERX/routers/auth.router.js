import express from 'express'
import authController from '../modules/auth/controller/index.js'

const router = express.Router()
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/search', authController.searchUser)
router.get('/', authController.getAllUser)
router.get('/:id', authController.getOneUser)
router.delete('/delete/:id', authController.deleteUser)
router.put('/update/:id', authController.updateUser)
router.post('/sendEmail', authController.email)
export default router