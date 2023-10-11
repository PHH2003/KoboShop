import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { updateUsers } from "../../service/auth.service.js";

const updateUser = catchAsync(async(req,res)=> {
    const user = await updateUsers(req)
    return res.status(status.OK).json(user)
})

export default updateUser