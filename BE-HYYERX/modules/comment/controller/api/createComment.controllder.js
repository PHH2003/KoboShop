import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status';
import { createComments } from "../../service/comment.service.js";
import OrderModel from "../../../order/model/order.model.js";

const createComment = catchAsync(async (req, res) => {
    const bodyData = {
        userId: req.body.userId,
        productId: req.body.productId,
        comment: req.body.comment,
        star: req.body.star
    }
    const checkUser = await OrderModel.findOne({
        orderStatus: "Đã hoàn thành",
        user: bodyData.userId,
        "productOrder.product": bodyData.productId
    })
    if (!checkUser) {
        return res.status(status.BAD_REQUEST).json(" mua sản phẩm để thực hiện tính năng này")
    }
    await createComments(bodyData)
    return res.status(status.OK).json("đã bình luận thành công")

})
export default createComment