import catchAsync from "../../../../utils/catchAsync.js";
import { searchComments } from "../../service/comment.service.js";
import status from 'http-status'

const searchComment = catchAsync(async(req,res)=>{
    const comment = await searchComments(req)
    if(comment.length == 0) {
        return res.status(status.BAD_REQUEST).json('Search keyword does not exist')
    }
    return res.status(status.Ok).json(comment)
})

export default searchComment