import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status';
import { createComments } from "../../service/comment.service.js";


const createComment = catchAsync(async (req, res) => {
    const bodyData = {
        userId: req.user.id,
        productId: req.body.productId,
        comment: req.body.comment,
        star: req.body.star
    }
    await createComments(bodyData)
    return res.status(status.OK).json("đã bình luận thành công")

})
export default createComment