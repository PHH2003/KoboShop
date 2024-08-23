
import status from 'http-status'
import catchAsync from '../../../../utils/catchAsync.js'
import { getOneUsers } from '../../service/auth.service.js'

const getOneUser = catchAsync(async (req, res) => {
    const users = await getOneUsers(req)
    return res.status(status.OK).json(users)
})

export default getOneUser