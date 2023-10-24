import express from "express"
import { veryFileToken } from "../middlewares/checkAuthorization.js"
import commentController from "../modules/comment/controller/index.js"

const router = express.Router()
router.get('/:productId', commentController.getComment);
router.use(veryFileToken)
router.post('/add', commentController.createComment)
router.delete('/delete/:id', commentController.deleteComment)
router.get('/', commentController.getAllComment)
router.put('/update/:id', commentController.updateComment)

export default router