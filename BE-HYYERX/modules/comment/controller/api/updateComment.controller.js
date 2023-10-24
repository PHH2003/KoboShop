import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { updateComments } from "../../service/comment.service.js";

const updateComment = catchAsync(async (req, res) => {
    const comment = await updateComments(req)
    return res.status(status.OK).json(comment)
})

export default updateComment