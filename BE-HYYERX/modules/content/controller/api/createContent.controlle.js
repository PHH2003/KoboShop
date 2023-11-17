import catchAsync from "../../../../utils/catchAsync.js";
import { createContents } from "../../service/content.service.js";
import status from 'http-status'

const createContent = catchAsync(async(req, res)=>{
    const content = await createContents(req)
    return res.status(status.OK).json(content)
})

export default createContent