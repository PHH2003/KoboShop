import catchAsync from "../../../../utils/catchAsync.js";
import { deleteContents } from "../../service/content.service.js";
import status from 'http-status'

const deleteContent = catchAsync(async(req,res)=>{
    await deleteContents(req)
    return res.status(status.OK).json('Successful erasing')
})

export default deleteContent