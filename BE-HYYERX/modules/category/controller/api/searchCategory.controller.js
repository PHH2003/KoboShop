import status from "http-status";
import catchAsync from "../../../../utils/catchAsync.js";
import { searchCategorys } from "../../service/category.service.js";

const searchCategory = catchAsync(async(req,res)=>{
    const category = await searchCategorys(req)
    if(category.length === 0) {
        return res.status(status.BAD_REQUEST).json("Từ khóa tìm kiếm không tồn tại")
    }
    return res.status(status.OK).json(category)
})

export default searchCategory