
import status from 'http-status'
import catchAsync from '../../../../utils/catchAsync.js'
import { getAllContacts } from '../../service/contact.service.js'

const getAllContact = catchAsync(async (req, res) => {
    const contact = await getAllContacts()
    return res.status(status.OK).json(contact)
})

export default getAllContact