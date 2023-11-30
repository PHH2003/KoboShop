
import status from 'http-status'
import catchAsync from '../../../../utils/catchAsync.js'
import { deleteContacts } from '../../service/contact.service.js'

const deleteContact = catchAsync(async (req, res) => {
    const contact = await deleteContacts(req)
    return res.status(status.OK).json(contact)
})

export default deleteContact