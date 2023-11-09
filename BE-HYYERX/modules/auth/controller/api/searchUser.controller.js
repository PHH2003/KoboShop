import catchAsync from "../../../../utils/catchAsync.js";
import { searchUsers } from "../../service/auth.service.js";
import status from "http-status";

const searchUser = catchAsync(async(req,res)=>{
    const user = await searchUsers(req)
    if(user.length == 0) {
        return res.status(status.BAD_REQUEST).json("Từ khóa tìm kiếm không tồn tại")
    }
    return res.status(status.OK).json(user)
})

export default searchUser