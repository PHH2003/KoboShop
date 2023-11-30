
import status from 'http-status'
import catchAsync from '../../../../utils/catchAsync.js'
import { updateContacts } from '../../service/contact.service.js'


const updateContact = catchAsync(async (req, res) => {
    const contact = await updateContacts(req)
    return res.status(status.OK).json(contact)
})

export default updateContact