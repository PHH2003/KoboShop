import express from "express"
import { veryFileToken } from "../middlewares/checkAuthorization.js"
import cartController from "../modules/cart/controller/index.js"

const router = express.Router()
router.use(veryFileToken)
router.post('/add', cartController.addProductToCart)
export default router