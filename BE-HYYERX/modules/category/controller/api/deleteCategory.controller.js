import catchAsync from "../../../../utils/catchAsync.js";
import { deleteCategorys } from "../../service/category.service.js";
import status from 'http-status'

const deleteCategory = catchAsync(async(req,res)=>{
    const category = await deleteCategorys(req)
    return res.status(status.OK).json(category)
})

export default deleteCategory