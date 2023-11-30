
import express from "express"
import { veryFileToken } from "../middlewares/checkAuthorization.js"
import contactController from './../modules/contact/controller/index.js';
const router = express.Router()
router.use(veryFileToken)
router.post('/add', contactController.createContact)
router.get('/', contactController.getAllContact)
router.get('/search', contactController.searchContacts)
router.put('/update/:id', contactController.updateContact)
router.delete('/delete/:id', contactController.deleteContact)
router.post('/seencontact', contactController.seenContact)
export default router