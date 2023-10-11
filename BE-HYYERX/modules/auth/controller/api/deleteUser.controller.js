import catchAsync from "../../../../utils/catchAsync.js"
import { deleteUsers } from "../../service/auth.service.js"
import status from 'http-status'
const deleteUser = catchAsync(async(req,res)=> {
    const user = await deleteUsers(req)
    return res.status(status.OK).json(user)
})
export default deleteUser