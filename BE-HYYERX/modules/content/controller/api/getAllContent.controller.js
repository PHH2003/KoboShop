import catchAsync from "../../../../utils/catchAsync.js";
import { getAllContents } from "../../service/content.service.js";
import status from 'http-status'

const getAllContent = catchAsync(async(res)=>{
    const content = await getAllContents()
    return res.status(status.OK).json(content)
})

export default getAllContent