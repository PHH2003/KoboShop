import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { getOneCategorys } from "../../service/category.service.js";
const getOneCategory = catchAsync(async(req,res)=>{
    const category = await getOneCategorys(req)
    return res.status(status.OK).json(category)
})

export default getOneCategory