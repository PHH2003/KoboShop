import catchAsync from "../../../../utils/catchAsync.js";
import { getAllCategorys } from "../../service/category.service.js";
import status from 'http-status'

const getAllCategory = catchAsync(async(req,res) => {
    const category = await getAllCategorys()
    return res.status(status.OK).json(category)
})

export default getAllCategory