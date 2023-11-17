import express from "express"
import { checkRoleAdminAuthorization, veryFileToken } from "../middlewares/checkAuthorization.js"
import contentController from "../modules/content/controller/index.js"

const router = express.Router()

router.get('/search', contentController.sreachContent)
router.get('/', contentController.getAllContent)
router.use(veryFileToken)
router.use(checkRoleAdminAuthorization)
router.post('/add', contentController.createContent)
router.delete('/delete/:id', contentController.deleteContent)
router.put('/update/:id', contentController.updateContent)

export default router