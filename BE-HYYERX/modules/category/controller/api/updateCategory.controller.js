import catchAsync from "../../../../utils/catchAsync.js";
import { updateCategorys } from "../../service/category.service.js";
import status from 'http-status'

const updateCategory = catchAsync(async(req,res)=> {
    const category = await updateCategorys(req)
    return res.status(status.OK).json(category)
})

export default updateCategory