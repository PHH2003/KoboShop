import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { getAllComments } from "../../service/comment.service.js";

const getAllComment = catchAsync(async (req, res) => {
    const comment = await getAllComments(req)
    return res.status(status.OK).json(comment)
})

export default getAllComment