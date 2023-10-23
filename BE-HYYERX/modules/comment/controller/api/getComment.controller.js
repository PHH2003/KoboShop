import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status';
import { getComments } from "../../service/comment.service.js";

const getComment = catchAsync(async (req, res) => {
    const productId = req.params.productId;
    const comments = await getComments(productId)
    return res.status(status.OK).json(comments)
})

export default getComment