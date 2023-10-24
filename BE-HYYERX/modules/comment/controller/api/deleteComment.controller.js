import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { deleteComments } from "../../service/comment.service.js";

const deleteComment = catchAsync(async (req, res) => {
    const comment = await deleteComments(req)
    return res.status(status.OK).json(comment)
})

export default deleteComment