import express from "express"
import { veryFileToken } from "../middlewares/checkAuthorization.js"
import orderController from "../modules/order/controller/index.js"
const router = express.Router()
router.use(veryFileToken)
router.get('/', orderController.getAllOrder)
router.post('/add', orderController.addOrder)
router.post('/update', orderController.updateOrder)
router.delete("/delete/:id", orderController.deleteOrder)
export default router