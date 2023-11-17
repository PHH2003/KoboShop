import catchAsync from "../../../../utils/catchAsync.js";
import { updateContents } from "../../service/content.service.js";
import status from 'http-status'

const updateContent = catchAsync(async(req,res)=>{
    const content = await updateContents(req) 
    return res.status(status.OK).json(content)  
})

export default updateContent